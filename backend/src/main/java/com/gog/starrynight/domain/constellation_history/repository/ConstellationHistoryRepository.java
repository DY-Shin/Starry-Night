package com.gog.starrynight.domain.constellation_history.repository;

import com.gog.starrynight.domain.constellation_history.entity.ConstellationHistory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ConstellationHistoryRepository extends JpaRepository<ConstellationHistory, Long> {
    Optional<ConstellationHistory> findByConstellationIdAndPostId(Long constellationId, Long postId);
}
