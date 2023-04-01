package com.gog.starrynight.domain.constellation_history.repository;

import com.gog.starrynight.domain.constellation_history.entity.ConstellationHistory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface ConstellationHistoryRepository extends JpaRepository<ConstellationHistory, Long> {
    Optional<ConstellationHistory> findByConstellationIdAndPostId(Long constellationId, Long postId);

    Page<ConstellationHistory> findAllByUserIdAndConstellationId(Pageable pageable, Long userId, Long constellationId);

    @Query("SELECT COUNT(distinct ch.constellation) FROM ConstellationHistory ch Where ch.user.id=:userId")
    int getUserCompletedConstellationCount(Long userId);
}
