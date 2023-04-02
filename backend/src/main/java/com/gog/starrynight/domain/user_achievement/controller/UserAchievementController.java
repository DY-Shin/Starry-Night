package com.gog.starrynight.domain.user_achievement.controller;

import com.gog.starrynight.common.dto.ApiResponse;
import com.gog.starrynight.domain.user_achievement.dto.UserAchievementCreateRequest;
import com.gog.starrynight.domain.user_achievement.service.UserAchievementService;
import com.gog.starrynight.security.LoginUser;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "회원 도전과제 관리")
@RestController
@RequiredArgsConstructor
public class UserAchievementController {

    private final UserAchievementService userAchievementService;

    @Operation(summary = "회원 도전과제 달성")
    @PostMapping("/user-achievements")
    public ResponseEntity<ApiResponse> createUserAchievement(@AuthenticationPrincipal LoginUser loginUser,
                                                             @RequestBody UserAchievementCreateRequest dto) {
        userAchievementService.createUserAchievement(dto, loginUser.getId());
        ApiResponse result = new ApiResponse(true, "회원 도전과제 달성 완료");
        return new ResponseEntity<>(result, HttpStatus.CREATED);
    }
}
