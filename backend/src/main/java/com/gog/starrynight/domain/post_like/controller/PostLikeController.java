package com.gog.starrynight.domain.post_like.controller;

import com.gog.starrynight.common.dto.ApiResponse;
import com.gog.starrynight.common.dto.PagedResult;
import com.gog.starrynight.domain.post_like.dto.PostLikeSearchRequest;
import com.gog.starrynight.domain.post_like.service.PostLikeService;
import com.gog.starrynight.domain.user.dto.UserSimpleInfo;
import com.gog.starrynight.security.LoginUser;
import io.swagger.v3.oas.annotations.Operation;
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

    @Operation(summary = "게시물 좋아요한 회원 리스트")
    @GetMapping("/posts/{postId}/like-users")
    public ResponseEntity<ApiResponse> postLikeList(@PathVariable("postId") Long postId,
                                                    PostLikeSearchRequest dto) {
        PagedResult<UserSimpleInfo> pagedResult = postLikeService.searchPostLike(postId, dto);
        ApiResponse<PagedResult<UserSimpleInfo>> result = new ApiResponse<>(true, "게시물 좋아요한 회원 리스트 조회", pagedResult);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
