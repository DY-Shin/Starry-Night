package com.gog.starrynight.domain.post_like.service;

import com.gog.starrynight.common.dto.PagedResult;
import com.gog.starrynight.common.dto.PagingRequest;
import com.gog.starrynight.common.exception.ResourceAlreadyExistsException;
import com.gog.starrynight.common.exception.ResourceNotFoundException;
import com.gog.starrynight.domain.post.entity.Post;
import com.gog.starrynight.domain.post.repository.PostRepository;
import com.gog.starrynight.domain.post_like.entity.PostLike;
import com.gog.starrynight.domain.post_like.repository.PostLikeRepository;
import com.gog.starrynight.domain.user.dto.UserSimpleInfo;
import com.gog.starrynight.domain.user.entity.User;
import com.gog.starrynight.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class PostLikeService {
    private final PostLikeRepository postLikeRepository;
    private final UserRepository userRepository;
    private final PostRepository postRepository;

    @Transactional
    public void createPostLike(Long postId, Long requesterId) {
        User requester = userRepository.findById(requesterId).orElseThrow(
                () -> new ResourceNotFoundException("존재하지 않는 회원입니다.")
        );

        Post post = postRepository.findById(postId).orElseThrow(
                () -> new ResourceNotFoundException("존재하지 않는 게시물입니다.")
        );

        if (postLikeRepository.findByPostIdAndUserId(postId, requesterId).isPresent()) {
            throw new ResourceAlreadyExistsException("이미 좋아요한 게시물입니다.");
        }

        PostLike postLike = PostLike.builder()
                .post(post)
                .user(requester)
                .build();

        postLikeRepository.save(postLike);
    }

    @Transactional
    public void deletePostLike(Long postId, Long requesterId) {
        User requester = userRepository.findById(requesterId).orElseThrow(
                () -> new ResourceNotFoundException("존재하지 않는 회원입니다.")
        );

        Post post = postRepository.findById(postId).orElseThrow(
                () -> new ResourceNotFoundException("존재하지 않는 게시물입니다.")
        );

        PostLike postLike = postLikeRepository.findByPostIdAndUserId(postId, requesterId).orElseThrow(
                () -> new ResourceNotFoundException("좋아요하지 않은 게시물입니다.")
        );

        postLikeRepository.delete(postLike);
    }

    public PagedResult<UserSimpleInfo> getPostLikers(Long postId, PagingRequest dto) {
        Sort.Direction direction = dto.getDirection().equals("asc") ? Sort.Direction.ASC : Sort.Direction.DESC;
        Sort sort = Sort.by(direction, dto.getSort());
        Pageable pageable = PageRequest.of(dto.getPage(), dto.getSize(), sort);

        Page<PostLike> queryResult = postLikeRepository.findAllByPostId(pageable, postId);

        Page<UserSimpleInfo> processedResult = queryResult.map(postlike -> new UserSimpleInfo(postlike.getUser()));

        return new PagedResult<>(processedResult);
    }
}
