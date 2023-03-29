package com.gog.starrynight.domain.achievement.service;

import com.gog.starrynight.common.exception.ResourceAlreadyExistsException;
import com.gog.starrynight.common.exception.ResourceNotFoundException;
import com.gog.starrynight.domain.achievement.dto.AchievementCreateRequest;
import com.gog.starrynight.domain.achievement.dto.AchievementInfo;
import com.gog.starrynight.domain.achievement.entity.Achievement;
import com.gog.starrynight.domain.achievement.repository.AchievementRepository;
import com.gog.starrynight.domain.achievement_constellation.entity.AchievementConstellation;
import com.gog.starrynight.domain.achievement_constellation.repository.AchievementConstellationRepository;
import com.gog.starrynight.domain.constellation.entity.Constellation;
import com.gog.starrynight.domain.constellation.repository.ConstellationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class AchievementService {
    private final AchievementRepository achievementRepository;
    private final ConstellationRepository constellationRepository;
    private final AchievementConstellationRepository achievementConstellationRepository;

    @Transactional
    public AchievementInfo createAchievement(AchievementCreateRequest dto) {
        if (achievementRepository.findByName(dto.getName()).isPresent()) {
            throw new ResourceAlreadyExistsException("똑같은 이름의 도전과제가 이미 존재합니다.");
        }

        Achievement achievement = Achievement.builder()
                .name(dto.getName())
                .build();
        achievementRepository.save(achievement);

        if (dto.getConstellations() != null) {
            List<AchievementConstellation> achievementConstellations = new ArrayList<>();
            for (Long constellationId : dto.getConstellations()) {
                Constellation constellation = constellationRepository.findById(constellationId)
                        .orElseThrow(() -> new ResourceNotFoundException("존재하지 않는 별자리가 있습니다."));

                AchievementConstellation achievementConstellation = AchievementConstellation.builder()
                        .achievement(achievement)
                        .constellation(constellation)
                        .build();

                achievementConstellations.add(achievementConstellation);
            }
            achievementConstellationRepository.saveAll(achievementConstellations);
        }

        return new AchievementInfo(achievement);
    }
}
