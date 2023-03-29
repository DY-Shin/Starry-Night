package com.gog.starrynight.domain.achievement.controller;

import com.gog.starrynight.common.dto.ApiResponse;
import com.gog.starrynight.domain.achievement.dto.AchievementCreateRequest;
import com.gog.starrynight.domain.achievement.dto.AchievementInfo;
import com.gog.starrynight.domain.achievement.entity.Achievement;
import com.gog.starrynight.domain.achievement.service.AchievementService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

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
}
