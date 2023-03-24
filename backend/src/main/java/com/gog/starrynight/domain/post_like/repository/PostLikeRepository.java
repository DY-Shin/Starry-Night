package com.gog.starrynight.domain.post_like.repository;

import com.gog.starrynight.domain.post_like.entity.PostLike;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PostLikeRepository extends JpaRepository<PostLike, Long> {
    Optional<PostLike> findByPostIdAndUserId(Long postId, Long requesterId);
    List<PostLike> findAllByPostId(Long postId);
}
