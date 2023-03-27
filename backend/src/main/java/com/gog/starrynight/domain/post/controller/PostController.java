package com.gog.starrynight.domain.post.controller;

import com.gog.starrynight.common.dto.ApiResponse;
import com.gog.starrynight.domain.post.dto.PostCreateRequest;
import com.gog.starrynight.domain.post.dto.PostDetailInfo;
import com.gog.starrynight.domain.post.dto.PostInfo;
import com.gog.starrynight.domain.post.service.PostService;
import com.gog.starrynight.security.LoginUser;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Tag(name = "게시물 관리")
@RestController
@RequiredArgsConstructor
public class PostController {

    private final PostService postService;

    @Operation(summary = "게시물 생성")
    @PostMapping("/posts")
    public ResponseEntity<ApiResponse<PostInfo>> createPost(@AuthenticationPrincipal LoginUser loginUser,
                                                            @RequestPart("post") PostCreateRequest dto,
                                                            @RequestPart(value = "images", required = false) MultipartFile[] images) throws IOException {
        PostInfo postInfo = postService.createPost(dto, images, loginUser.getId());
        ApiResponse<PostInfo> result = new ApiResponse<>(true, "게시물 생성 성공", postInfo);
        return new ResponseEntity<>(result, HttpStatus.CREATED);
    }

    @Operation(summary = "게시물 상세 조회")
    @GetMapping("/posts/{postId}")
    public ResponseEntity<ApiResponse<PostDetailInfo>> getPostDetailInfo(@AuthenticationPrincipal LoginUser loginUser,
                                                                         @PathVariable Long postId) {
        Long requesterId = loginUser != null ? loginUser.getId() : null;
        PostDetailInfo postDetailInfo = postService.getPostDetailInfo(postId, requesterId);
        ApiResponse<PostDetailInfo> result = new ApiResponse<>(true, "게시물 상세 조회 성공", postDetailInfo);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }


}
