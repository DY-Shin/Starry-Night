package com.gog.starrynight.domain.post.repository;

import com.gog.starrynight.domain.post.entity.Post;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PostRepository extends JpaRepository<Post, Long> {
    @Query("SELECT COUNT(p) FROM Post p Where p.writer.id=:userId")
    int getPostCountByUser(Long userId);

    Page<Post> findAll(Specification<Post> spec, Pageable pageable);
}
