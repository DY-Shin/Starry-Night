package com.gog.starrynight.domain.favorite_location.service;

import com.gog.starrynight.domain.favorite_location.repository.FavoriteLocationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class FavoriteLocationService {
    private final FavoriteLocationRepository favoriteLocationRepository;
}
