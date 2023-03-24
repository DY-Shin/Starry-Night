package com.gog.starrynight.domain.post_like.controller;

import com.gog.starrynight.common.dto.ApiResponse;
import com.gog.starrynight.domain.post_like.service.PostLikeService;
import com.gog.starrynight.security.LoginUser;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "게시물 좋아요 관리")
@RestController
@RequiredArgsConstructor
public class PostLikeController {
    private final PostLikeService postLikeService;

    @Operation(summary = "게시물 좋아요")
    @PostMapping("/posts/{postId}/like")
    public ResponseEntity<ApiResponse> createPostLike(@AuthenticationPrincipal LoginUser loginUser,
                                                        @PathVariable("postId") Long postId) {
        postLikeService.createPostLike(postId, loginUser.getId());
        ApiResponse result = new ApiResponse(true, "좋아요 성공");
        return new ResponseEntity<>(result, HttpStatus.CREATED);
    }

    @Operation(summary = "게시물 좋아요 취소")
    @DeleteMapping("/posts/{postId}/dislike")
    public ResponseEntity<ApiResponse> deletePostLike(@AuthenticationPrincipal LoginUser loginUser,
                                                      @PathVariable("postId") Long postId) {
        postLikeService.deletePostLike(postId, loginUser.getId());
        ApiResponse result = new ApiResponse(true, "좋아요 취소 성공");
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @Operation(summary = "게시물 좋아요한 사람 리스트")
    @GetMapping("/posts/{postId}/like/lists")
    public ResponseEntity<ApiResponse> postLikeList(@PathVariable("postId") Long postId) {
        List<String> postLikePeople = postLikeService.postLikeList(postId);
        ApiResponse<List<String>> result = new ApiResponse<>(true, "좋아요한 사람 리스트 조회", postLikePeople);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
