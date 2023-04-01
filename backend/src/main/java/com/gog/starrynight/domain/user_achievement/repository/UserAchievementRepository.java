package com.gog.starrynight.domain.user_achievement.repository;

import com.gog.starrynight.domain.achievement.entity.Achievement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserAchievementRepository extends JpaRepository<Achievement, Long> {

}
