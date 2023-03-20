package com.gog.starrynight.domain.constellation_history.repository;

import com.gog.starrynight.domain.constellation_history.entity.ConstellationHistory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConstellationHistoryRepository extends JpaRepository<ConstellationHistory, Long> {
}
