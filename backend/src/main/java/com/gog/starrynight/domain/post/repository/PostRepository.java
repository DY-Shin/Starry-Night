package com.gog.starrynight.domain.post.repository;

import com.gog.starrynight.domain.post.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {
}
