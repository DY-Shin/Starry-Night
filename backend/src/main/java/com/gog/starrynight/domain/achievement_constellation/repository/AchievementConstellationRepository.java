package com.gog.starrynight.domain.achievement_constellation.repository;

import com.gog.starrynight.domain.achievement.entity.Achievement;
import com.gog.starrynight.domain.achievement_constellation.entity.AchievementConstellation;
import com.gog.starrynight.domain.constellation.entity.Constellation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface AchievementConstellationRepository extends JpaRepository<AchievementConstellation, Long> {
    Optional<AchievementConstellation> findByAchievementAndConstellation(Achievement achievement, Constellation constellation);

    @Query("SELECT ac.constellation.id FROM AchievementConstellation ac WHERE ac.achievement.id = :achievementId")
    List<Long> getConstellationIdsByAchievementId(Long achievementId);

    List<AchievementConstellation> findAllByAchievementId(Long achievementId);
}
