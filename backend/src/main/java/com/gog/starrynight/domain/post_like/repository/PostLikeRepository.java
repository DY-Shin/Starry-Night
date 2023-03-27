package com.gog.starrynight.domain.post_like.repository;

import com.gog.starrynight.domain.post_like.entity.PostLike;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface PostLikeRepository extends JpaRepository<PostLike, Long> {
    Optional<PostLike> findByPostIdAndUserId(Long postId, Long userId);

    @Query("SELECT COUNT(pl) FROM PostLike pl WHERE pl.post.id = :postId")
    int getTotalPostLikeCountByPostId(Long postId);

    boolean existsPostLikeByPostIdAndUserId(Long postId, Long userId);
}
