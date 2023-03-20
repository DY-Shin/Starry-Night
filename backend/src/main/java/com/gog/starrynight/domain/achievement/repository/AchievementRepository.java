package com.gog.starrynight.domain.achievement.repository;

import com.gog.starrynight.domain.achievement.entity.Achievement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AchievementRepository extends JpaRepository<Achievement, Long> {
}
