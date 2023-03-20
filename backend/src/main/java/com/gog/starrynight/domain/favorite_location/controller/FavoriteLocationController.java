package com.gog.starrynight.domain.favorite_location.controller;

import com.gog.starrynight.domain.favorite_location.service.FavoriteLocationService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "관심위치 관리")
@RestController
@RequiredArgsConstructor
public class FavoriteLocationController {
    private final FavoriteLocationService favoriteLocationService;
}
