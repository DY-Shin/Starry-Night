package com.gog.starrynight.domain.user_achievement.service;

import com.gog.starrynight.common.exception.ResourceAlreadyExistsException;
import com.gog.starrynight.common.exception.ResourceForbiddenException;
import com.gog.starrynight.common.exception.ResourceNotFoundException;
import com.gog.starrynight.domain.achievement.entity.Achievement;
import com.gog.starrynight.domain.achievement.repository.AchievementRepository;
import com.gog.starrynight.domain.achievement_constellation.repository.AchievementConstellationRepository;
import com.gog.starrynight.domain.constellation_history.repository.ConstellationHistoryRepository;
import com.gog.starrynight.domain.user.entity.User;
import com.gog.starrynight.domain.user.repository.UserRepository;
import com.gog.starrynight.domain.user_achievement.dto.UserAchievementCreateRequest;
import com.gog.starrynight.domain.user_achievement.entity.UserAchievement;
import com.gog.starrynight.domain.user_achievement.repository.UserAchievementRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class UserAchievementService {

    private final UserAchievementRepository userAchievementRepository;
    private final UserRepository userRepository;
    private final AchievementRepository achievementRepository;
    private final AchievementConstellationRepository achievementConstellationRepository;
    private final ConstellationHistoryRepository constellationHistoryRepository;

    @Transactional
    public void createUserAchievement(UserAchievementCreateRequest dto, Long requesterId) {
        User requester = userRepository.findById(requesterId)
                .orElseThrow(() -> new ResourceNotFoundException("존재하지 않는 사용자입니다."));

        Achievement achievement = achievementRepository.findById(dto.getAchievementId())
                .orElseThrow(() -> new ResourceNotFoundException("존재하지 않는 도전과제입니다."));

        Optional<UserAchievement> userAchievementOptional = userAchievementRepository.findByUserIdAndAchievementId(requesterId, achievement.getId());

        if (userAchievementOptional.isPresent()) {
            throw new ResourceAlreadyExistsException("이미 달성한 도전과제입니다.");
        }

        List<Long> constellationIds = achievementConstellationRepository.getConstellationIdsByAchievementId(achievement.getId());
        int totalConstellationCount = constellationIds.size();

        int completedConstellationCount = constellationHistoryRepository.getCompletedConstellationCountByAchievementIdsAndUserId(
                constellationIds,
                requesterId
        );

        if (totalConstellationCount != completedConstellationCount) {
            throw new ResourceForbiddenException("도전과제 별자리를 아직 모두 채우지 못했습니다.");
        }

        UserAchievement userAchievement = UserAchievement.builder()
                .user(requester)
                .achievement(achievement)
                .build();

        userAchievementRepository.save(userAchievement);
    }
}
