package com.gog.starrynight.domain.achievement.service;

import com.gog.starrynight.common.exception.ResourceAlreadyExistsException;
import com.gog.starrynight.common.exception.ResourceNotFoundException;
import com.gog.starrynight.domain.achievement.dto.AchievementCreateRequest;
import com.gog.starrynight.domain.achievement.dto.AchievementDetailInfo;
import com.gog.starrynight.domain.achievement.dto.AchievementInfo;
import com.gog.starrynight.domain.achievement.entity.Achievement;
import com.gog.starrynight.domain.achievement.repository.AchievementRepository;
import com.gog.starrynight.domain.achievement_constellation.entity.AchievementConstellation;
import com.gog.starrynight.domain.achievement_constellation.repository.AchievementConstellationRepository;
import com.gog.starrynight.domain.constellation.entity.Constellation;
import com.gog.starrynight.domain.constellation.repository.ConstellationRepository;
import com.gog.starrynight.domain.constellation_history.repository.ConstellationHistoryRepository;
import com.gog.starrynight.domain.user.entity.User;
import com.gog.starrynight.domain.user.repository.UserRepository;
import com.gog.starrynight.domain.user_achievement.repository.UserAchievementRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class AchievementService {
    private final AchievementRepository achievementRepository;
    private final ConstellationRepository constellationRepository;
    private final UserAchievementRepository userAchievementRepository;
    private final ConstellationHistoryRepository constellationHistoryRepository;
    private final AchievementConstellationRepository achievementConstellationRepository;
    private final UserRepository userRepository;

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

    @Transactional
    public void deleteAchievement(Long achievementId) {
        Achievement achievement = achievementRepository.findById(achievementId)
                .orElseThrow(() -> new ResourceNotFoundException("존재하지 않는 도전과제입니다."));

        achievementRepository.delete(achievement);
    }

    public List<AchievementDetailInfo> getAchievementList(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("존재하지 않는 회원입니다."));

        List<Achievement> achievements = achievementRepository.findAll();

        return achievements.stream()
                .map(achievement -> getAchievementDetailInfo(userId, achievement))
                .collect(Collectors.toList());
    }

    public List<AchievementInfo> getAchievements() {
        List<Achievement> achievements = achievementRepository.findAll();

        return achievements.stream()
                .map(AchievementInfo::new)
                .collect(Collectors.toList());
    }

    public AchievementDetailInfo getAchievementDetailInfo(Long requesterId, Achievement achievement) {
        boolean completed = false;
        boolean completionPossible = false;
        int completedConstellationCount = 0;
        int totalConstellationCount;

        List<Long> constellationIds = achievementConstellationRepository.getConstellationIdsByAchievementId(achievement.getId());
        totalConstellationCount = constellationIds.size();

        if (requesterId != null) {
            completedConstellationCount = constellationHistoryRepository.getCompletedConstellationCountByAchievementIdsAndUserId(
                    constellationIds,
                    requesterId
            );

            completed = userAchievementRepository.findByUserIdAndAchievementId(requesterId, achievement.getId()).isPresent();

            if (!completed) {
                completionPossible = (completedConstellationCount == totalConstellationCount);
            }
        }

        return new AchievementDetailInfo(
                achievement,
                completed,
                completionPossible,
                completedConstellationCount,
                totalConstellationCount
        );
    }

}
