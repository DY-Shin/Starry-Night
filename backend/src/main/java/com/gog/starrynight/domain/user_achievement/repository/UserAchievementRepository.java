package com.gog.starrynight.domain.user_achievement.repository;

import com.gog.starrynight.domain.user_achievement.entity.UserAchievement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserAchievementRepository extends JpaRepository<UserAchievement, Long> {

    @Query("SELECT COUNT(ua) FROM UserAchievement ua Where ua.user.id=:userId")
    int getUserCompletedAchievementCount(Long userId);
}
