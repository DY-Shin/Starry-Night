package com.gog.starrynight.domain.post_like.controller;

import com.gog.starrynight.domain.post_like.service.PostLikeService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "게시물 좋아요 관리")
@RestController
@RequiredArgsConstructor
public class PostLikeController {
    private final PostLikeService postLikeService;
}
