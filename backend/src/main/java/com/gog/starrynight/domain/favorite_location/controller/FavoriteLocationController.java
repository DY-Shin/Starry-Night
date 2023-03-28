package com.gog.starrynight.domain.favorite_location.controller;

import com.gog.starrynight.common.dto.ApiResponse;
import com.gog.starrynight.domain.favorite_location.dto.FavoriteLocationCreateRequest;
import com.gog.starrynight.domain.favorite_location.dto.FavoriteLocationSimpleInfo;
import com.gog.starrynight.domain.favorite_location.service.FavoriteLocationService;
import com.gog.starrynight.security.LoginUser;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@Tag(name = "관심위치 관리")
@RestController
@RequiredArgsConstructor
public class FavoriteLocationController {
    private final FavoriteLocationService favoriteLocationService;

    @Operation(summary = "관심위치 등록")
    @PostMapping("/favorite-locations")
    public ResponseEntity<ApiResponse> createFavoriteLocation(@AuthenticationPrincipal LoginUser loginUser,
                                                              @RequestBody FavoriteLocationCreateRequest dto) {
        FavoriteLocationSimpleInfo favoriteLocationSimpleInfo = favoriteLocationService.createFavoriteLocation(loginUser.getId(), dto);
        ApiResponse result = new ApiResponse(true, "관심위치 등록 성공", favoriteLocationSimpleInfo);
        return new ResponseEntity<>(result, HttpStatus.CREATED);
    }

    @Operation(summary = "관심위치 삭제")
    @DeleteMapping("/favorite-locations/{favoriteLocationId}")
    public ResponseEntity<ApiResponse> deleteFavoriteLocation(@AuthenticationPrincipal LoginUser loginUser,
                                                              @PathVariable("favoriteLocationId") Long favoriteLocationId) {
        favoriteLocationService.deleteFavoriteLocation(loginUser.getId(), favoriteLocationId);
        ApiResponse result = new ApiResponse(true, "관심위치 삭제 성공");
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
