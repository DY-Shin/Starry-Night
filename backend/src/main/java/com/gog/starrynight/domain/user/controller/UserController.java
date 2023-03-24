package com.gog.starrynight.domain.user.controller;

import com.gog.starrynight.common.dto.ApiResponse;
import com.gog.starrynight.domain.user.dto.UserNameUpdateRequest;
import com.gog.starrynight.domain.user.service.UserService;
import com.gog.starrynight.security.LoginUser;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@Tag(name = "회원 관리")
@RestController
@RequiredArgsConstructor
public class UserController {
    @Value("${app.auth.access-token-name}")
    private String accessTokenName;
    private final UserService userService;

    @Operation(summary = "로그아웃")
    @PostMapping("/logout")
    public ResponseEntity<ApiResponse> logout() {
        ResponseCookie cookie = ResponseCookie.from(accessTokenName, null)
                .maxAge(0)
                .httpOnly(true)
                .build();

        ApiResponse result = new ApiResponse<>(true, "로그아웃 성공");

        return ResponseEntity.ok()
                .header(HttpHeaders.SET_COOKIE, cookie.toString())
                .body(result);
    }

    @Operation(summary = "회원 이름 변경")
    @PatchMapping("/my-profile/name")
    public ResponseEntity<ApiResponse> updateUserName(@AuthenticationPrincipal LoginUser loginUser,
                                                      @RequestBody UserNameUpdateRequest dto) {
        userService.updateUserName(loginUser.getId(), dto);

        ApiResponse result = new ApiResponse<>(true, "회원 이름 변경 성공");

        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
