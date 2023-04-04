package com.gog.starrynight.domain.achievement.controller;

import com.gog.starrynight.common.dto.ApiResponse;
import com.gog.starrynight.domain.achievement.dto.AchievementCreateRequest;
import com.gog.starrynight.domain.achievement.dto.AchievementDetailInfo;
import com.gog.starrynight.domain.achievement.dto.AchievementInfo;
import com.gog.starrynight.domain.achievement.service.AchievementService;
import com.gog.starrynight.security.LoginUser;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "도전과제 관리")
@RestController
@RequiredArgsConstructor
public class AchievementController {
    private final AchievementService achievementService;

    @Operation(summary = "도전과제 생성")
    @PostMapping("/achievements")
    public ResponseEntity<ApiResponse<AchievementInfo>> createAchievement(@RequestBody AchievementCreateRequest dto) {

        AchievementInfo achievementInfo = achievementService.createAchievement(dto);
        ApiResponse<AchievementInfo> result = new ApiResponse<>(true, "도전과제 생성 성공", achievementInfo);
        return new ResponseEntity<>(result, HttpStatus.CREATED);
    }

    @Operation(summary = "도전과제 삭제")
    @DeleteMapping("/achievements/{achievementId}")
    public ResponseEntity<ApiResponse> deleteAchievement(@PathVariable Long achievementId) {
        achievementService.deleteAchievement(achievementId);
        ApiResponse result = new ApiResponse(true, "도전과제 삭제 성공");
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @Operation(summary = "유저의 도전과제 현황 조회")
    @GetMapping("/users/{userId}/achievements")
    public ResponseEntity<ApiResponse<List<AchievementDetailInfo>>> getAchievementListByUser(@PathVariable Long userId) {
        List<AchievementDetailInfo> achievementList = achievementService.getAchievementList(userId);
        ApiResponse<List<AchievementDetailInfo>> result = new ApiResponse(true, "유저의 도전과제 현황 조회 성공", achievementList);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
