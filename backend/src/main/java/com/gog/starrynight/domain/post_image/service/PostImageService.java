package com.gog.starrynight.domain.post_image.service;

import com.gog.starrynight.domain.post_image.repository.PostImageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class PostImageService {
    private final PostImageRepository postImageRepository;
}
