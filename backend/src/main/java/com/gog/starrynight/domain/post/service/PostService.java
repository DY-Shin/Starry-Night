package com.gog.starrynight.domain.post.service;

import com.gog.starrynight.common.exception.ResourceNotFoundException;
import com.gog.starrynight.domain.post.dto.PostInfo;
import com.gog.starrynight.domain.post.dto.PostRequest;
import com.gog.starrynight.domain.post.entity.Post;
import com.gog.starrynight.domain.post.repository.PostRepository;
import com.gog.starrynight.domain.user.entity.User;
import com.gog.starrynight.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class PostService {
    private final PostRepository postRepository;
    private final UserRepository userRepository;

    @Transactional
    public PostInfo createPost(PostRequest dto, Long requesterId) {
        User requester = userRepository.findById(requesterId).orElseThrow(
                () -> new ResourceNotFoundException("존재하지 않는 회원입니다.")
        );

        Post post = Post.builder()
                .title(dto.getTitle())
                .content(dto.getContent())
                .lat(dto.getLat())
                .lng(dto.getLng())
                .writer(requester)
                .build();

        postRepository.save(post);

        return new PostInfo(post);
    }
}
