package com.gog.starrynight.domain.favorite_location.repository;

import com.gog.starrynight.domain.favorite_location.entity.FavoriteLocation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FavoriteLocationRepository extends JpaRepository<FavoriteLocation, Long> {
}
