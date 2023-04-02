package com.gog.starrynight.domain.constellation.service;

import com.gog.starrynight.common.exception.ResourceNotFoundException;
import com.gog.starrynight.domain.achievement.entity.Achievement;
import com.gog.starrynight.domain.achievement.repository.AchievementRepository;
import com.gog.starrynight.domain.achievement_constellation.entity.AchievementConstellation;
import com.gog.starrynight.domain.achievement_constellation.repository.AchievementConstellationRepository;
import com.gog.starrynight.domain.constellation.dto.ConstellationCreateRequest;
import com.gog.starrynight.domain.constellation.dto.ConstellationDetailInfo;
import com.gog.starrynight.domain.constellation.dto.ConstellationListItemInfo;
import com.gog.starrynight.domain.constellation.dto.ConstellationSimpleInfo;
import com.gog.starrynight.domain.constellation.entity.Constellation;
import com.gog.starrynight.domain.constellation.repository.ConstellationRepository;
import com.gog.starrynight.domain.constellation_history.repository.ConstellationHistoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ConstellationService {
    private final ConstellationRepository constellationRepository;
    private final ConstellationHistoryRepository constellationHistoryRepository;
    private final AchievementRepository achievementRepository;
    private final AchievementConstellationRepository achievementConstellationRepository;

    @Transactional
    public ConstellationSimpleInfo createConstellation(ConstellationCreateRequest dto) {
        Constellation constellation = Constellation.builder()
                .name(dto.getName())
                .latin(dto.getLatin())
                .mag(dto.getMag())
                .ra(dto.getRa())
                .declination(dto.getDeclination())
                .description(dto.getDescription())
                .manual(dto.getManual())
                .originImage(dto.getOriginImage())
                .linedImage(dto.getLinedImage())
                .illustImage(dto.getIllustImage())
                .build();

        constellationRepository.save(constellation);

        return new ConstellationSimpleInfo(constellation);
    }

    @Transactional
    public void deleteConstellation(Long constellationId) {
        Constellation constellation = constellationRepository.findById(constellationId)
                .orElseThrow(() -> new ResourceNotFoundException("존재하지 않는 별자리입니다."));

        constellationRepository.delete(constellation);
    }

    public ConstellationDetailInfo getConstellationDetailInfo(Long constellationId, Long requesterId) {
        Constellation constellation = constellationRepository.findById(constellationId)
                .orElseThrow(() -> new ResourceNotFoundException("존재하지 않는 별자리입니다."));

        LocalDateTime firstViewedDate = null;
        Integer viewCount = null;
        if (requesterId != null) {
            firstViewedDate = constellationHistoryRepository.getFirstViewedDateByConstellationIdAndUserId(constellationId, requesterId);
            viewCount = constellationHistoryRepository.getViewCountByConstellationIdAndUserId(constellationId, requesterId);
        }

        return new ConstellationDetailInfo(constellation, firstViewedDate, viewCount);
    }

    public List<ConstellationListItemInfo> getConstellationsByAchievement(Long achievementId, Long requesterId) {
        Achievement achievement = achievementRepository.findById(achievementId)
                .orElseThrow(() -> new ResourceNotFoundException("존재하지 않는 도전과제입니다."));

        List<AchievementConstellation> achievementConstellations = achievementConstellationRepository.findAllByAchievementId(achievement.getId());

        return achievementConstellations.stream()
                .map(achievementConstellation -> getConstellationListItemInfo(requesterId, achievementConstellation))
                .collect(Collectors.toList());
    }

    public ConstellationListItemInfo getConstellationListItemInfo(Long requesterId, AchievementConstellation achievementConstellation) {
        Constellation constellation = achievementConstellation.getConstellation();
        boolean completed = false;
        if (requesterId != null) {
            completed = constellationHistoryRepository.existsByUserIdAndConstellationId(requesterId, constellation.getId());
        }
        return new ConstellationListItemInfo(constellation, completed);
    }
}
