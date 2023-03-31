package com.gog.starrynight.domain.achievement_constellation.service;

import com.gog.starrynight.common.exception.ResourceAlreadyExistsException;
import com.gog.starrynight.common.exception.ResourceNotFoundException;
import com.gog.starrynight.domain.achievement.dto.AchievementInfo;
import com.gog.starrynight.domain.achievement.entity.Achievement;
import com.gog.starrynight.domain.achievement.repository.AchievementRepository;
import com.gog.starrynight.domain.achievement_constellation.dto.AchievementConstellationCreateRequest;
import com.gog.starrynight.domain.achievement_constellation.dto.AchievementConstellationInfo;
import com.gog.starrynight.domain.achievement_constellation.entity.AchievementConstellation;
import com.gog.starrynight.domain.achievement_constellation.repository.AchievementConstellationRepository;
import com.gog.starrynight.domain.constellation.dto.ConstellationSimpleInfo;
import com.gog.starrynight.domain.constellation.entity.Constellation;
import com.gog.starrynight.domain.constellation.repository.ConstellationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class AchievementConstellationService {
    private final AchievementConstellationRepository achievementConstellationRepository;
    private final AchievementRepository achievementRepository;
    private final ConstellationRepository constellationRepository;

    @Transactional
    public AchievementConstellationInfo createAchievementConstellation(AchievementConstellationCreateRequest dto) {
        Achievement achievement = achievementRepository.findById(dto.getAchievementId())
                .orElseThrow(() -> new ResourceNotFoundException("존재하지 않는 도전과제입니다."));

        Constellation constellation = constellationRepository.findById(dto.getConstellationId())
                .orElseThrow(() -> new ResourceNotFoundException("존재하지 않는 별자리입니다."));

        if (achievementConstellationRepository.findByAchievementAndConstellation(achievement, constellation).isPresent()){
            throw new ResourceAlreadyExistsException("해당 도전과제에 이미 등록된 별자리입니다.");
        }

        AchievementConstellation achievementConstellation = AchievementConstellation.builder()
                .achievement(achievement)
                .constellation(constellation)
                .build();

        achievementConstellationRepository.save(achievementConstellation);

        AchievementInfo achievementInfo = new AchievementInfo(achievement);
        ConstellationSimpleInfo constellationSimpleInfo = new ConstellationSimpleInfo(constellation);

        return new AchievementConstellationInfo(achievementInfo, constellationSimpleInfo);
    }

    @Transactional
    public void deleteAchievementConstellation(Long achievementId, Long constellationId) {
        Achievement achievement = achievementRepository.findById(achievementId)
                .orElseThrow(() -> new ResourceNotFoundException("존재하지 않는 도전과제입니다."));

        Constellation constellation = constellationRepository.findById(constellationId)
                .orElseThrow(() -> new ResourceNotFoundException("존재하지 않는 별자리입니다."));

        AchievementConstellation achievementConstellation = achievementConstellationRepository.findByAchievementAndConstellation(achievement, constellation)
                .orElseThrow(() -> new ResourceNotFoundException("해당 도전과제에 등록되어있지 않은 별자리입니다."));

        achievementConstellationRepository.delete(achievementConstellation);
    }
}
