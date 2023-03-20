package com.gog.starrynight.domain.post.controller;

import com.gog.starrynight.domain.post.service.PostService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "게시물 관리")
@RestController
@RequiredArgsConstructor
public class PostController {
    private final PostService postService;
}
