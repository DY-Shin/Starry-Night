package com.gog.starrynight.domain.post_like.service;

import com.gog.starrynight.domain.post_like.repository.PostLikeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class PostLikeService {
    private final PostLikeRepository postLikeRepository;
}
