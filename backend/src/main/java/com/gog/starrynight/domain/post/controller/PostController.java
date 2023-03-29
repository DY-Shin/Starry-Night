package com.gog.starrynight.domain.post.controller;

import com.gog.starrynight.common.dto.ApiResponse;
import com.gog.starrynight.common.dto.PagedResult;
import com.gog.starrynight.domain.post.dto.*;
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
        Long requesterId = (loginUser != null ? loginUser.getId() : null);
        PostDetailInfo postDetailInfo = postService.getPostDetailInfo(postId, requesterId);
        ApiResponse<PostDetailInfo> result = new ApiResponse<>(true, "게시물 상세 조회 성공", postDetailInfo);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @Operation(summary = "게시물 검색")
    @GetMapping("/posts")
    public ResponseEntity<ApiResponse<PagedResult<PostDetailInfo>>> searchPost(@AuthenticationPrincipal LoginUser loginUser,
                                                                               PostSearchRequest dto) {
        Long requesterId = (loginUser != null ? loginUser.getId() : null);
        PagedResult<PostDetailInfo> pagedResult = postService.searchPost(dto, requesterId);
        ApiResponse<PagedResult<PostDetailInfo>> result = new ApiResponse<>(true, "게시물 검색 성공", pagedResult);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @Operation(summary = "게시물 삭제")
    @DeleteMapping("/posts/{postId}")
    public ResponseEntity<ApiResponse<PagedResult<PostDetailInfo>>> deletePost(@AuthenticationPrincipal LoginUser loginUser,
                                                                               @PathVariable Long postId) {
        postService.deletePost(postId, loginUser.getId());
        ApiResponse<PagedResult<PostDetailInfo>> result = new ApiResponse<>(true, "게시물 삭제 성공");
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @Operation(summary = "게시물 수정")
    @PutMapping("/posts/{postId}")
    public ResponseEntity<ApiResponse<PostInfo>> updatePost(@AuthenticationPrincipal LoginUser loginUser,
                                                            @PathVariable Long postId,
                                                            @RequestPart("post") PostUpdateRequest dto,
                                                            @RequestPart(value = "addedImages", required = false) MultipartFile[] addedImages) throws IOException {
        PostInfo postInfo = postService.updatePost(postId, dto, addedImages, loginUser.getId());
        ApiResponse<PostInfo> result = new ApiResponse<>(true, "게시물 수정 성공", postInfo);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

}
