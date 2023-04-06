package com.gog.starrynight.domain.post_image.repository;

import com.gog.starrynight.domain.post_image.entity.PostImage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostImageRepository extends JpaRepository<PostImage, Long> {
}
