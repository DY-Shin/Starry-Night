package com.gog.starrynight.domain.achievement_constellation.controller;

import com.gog.starrynight.common.dto.ApiResponse;
import com.gog.starrynight.domain.achievement_constellation.dto.AchievementConstellationCreateRequest;
import com.gog.starrynight.domain.achievement_constellation.dto.AchievementConstellationInfo;
import com.gog.starrynight.domain.achievement_constellation.service.AchievementConstellationService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Tag(name = "도전과제 별자리 관리")
@RestController
@RequiredArgsConstructor
public class AchievementConstellationController {
    private final AchievementConstellationService achievementConstellationService;

    @Operation(summary = "도전과제 별자리 등록")
    @PostMapping("/achievement-constellations")
    public ResponseEntity<ApiResponse<AchievementConstellationInfo>> createAchievementConstellation(@RequestBody AchievementConstellationCreateRequest dto) {
        AchievementConstellationInfo achievementConstellationInfo = achievementConstellationService.createAchievementConstellation(dto);
        ApiResponse<AchievementConstellationInfo> result = new ApiResponse<>(true, "도전과제 별자리 등록 성공", achievementConstellationInfo);
        return new ResponseEntity<>(result, HttpStatus.CREATED);
    }

    @Operation(summary = "도전과제 별자리 삭제")
    @DeleteMapping("/achievement-constellations/{achievementConstellationId}")
    public ResponseEntity<ApiResponse> deleteAchievementConstellation(@PathVariable Long achievementConstellationId) {
        achievementConstellationService.deleteAchievementConstellation(achievementConstellationId);
        ApiResponse result = new ApiResponse(true, "도전과제 별자리 삭제 성공");
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
