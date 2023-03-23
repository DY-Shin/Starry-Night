package com.gog.starrynight.domain.post_like.controller;

import com.gog.starrynight.common.dto.ApiResponse;
import com.gog.starrynight.domain.post_like.service.PostLikeService;
import com.gog.starrynight.security.LoginUser;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@Tag(name = "게시물 좋아요 관리")
@RestController
@RequiredArgsConstructor
public class PostLikeController {
    private final PostLikeService postLikeService;

    @PostMapping("/posts/{postId}/like")
    public ResponseEntity<ApiResponse> createPostLike(@AuthenticationPrincipal LoginUser loginUser,
                                                        @PathVariable("postId") Long postId) {
        postLikeService.createPostLike(postId, loginUser.getId());
        ApiResponse result = new ApiResponse(true, "좋아요 성공");
        return new ResponseEntity<>(result, HttpStatus.CREATED);
    }
}
