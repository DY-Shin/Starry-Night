package com.gog.starrynight.domain.constellation.repository;

import com.gog.starrynight.domain.constellation.entity.Constellation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ConstellationRepository extends JpaRepository<Constellation, Long> {
    List<Constellation> findByMagLessThan(double mag);
}
