package com.gog.starrynight.domain.favorite_location.repository;

import com.gog.starrynight.domain.favorite_location.entity.FavoriteLocation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FavoriteLocationRepository extends JpaRepository<FavoriteLocation, Long> {
    Optional<FavoriteLocation> findByIdAndUserId(Long id, Long userId);
}
