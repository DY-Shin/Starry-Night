package com.gog.starrynight.domain.post.repository;

import com.gog.starrynight.domain.post.entity.Post;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PostRepository extends JpaRepository<Post, Long> {
    Page<Post> findAllByTitleContainingAndContentContaining(Pageable pageable, String title, String content);

    Page<Post> findAllByTitleContaining(Pageable pageable, String title);

    Page<Post> findAllByContentContaining(Pageable pageable, String content);

    Page<Post> findAll(Pageable pageable);

    Page<Post> findAllByTitleContainingAndContentContainingAndLatBetweenAndLngBetween(Pageable pageable,
                                                                                      String title,
                                                                                      String content,
                                                                                      double minLat,
                                                                                      double maxLat,
                                                                                      double minLng,
                                                                                      double maxLng);

    Page<Post> findAllByTitleContainingAndLatBetweenAndLngBetween(Pageable pageable,
                                                                  String title,
                                                                  double minLat,
                                                                  double maxLat,
                                                                  double minLng,
                                                                  double maxLng);

    Page<Post> findAllByContentContainingAndLatBetweenAndLngBetween(Pageable pageable,
                                                                    String content,
                                                                    double minLat,
                                                                    double maxLat,
                                                                    double minLng,
                                                                    double maxLng);

    Page<Post> findAllByLatBetweenAndLngBetween(Pageable pageable,
                                                                    double minLat,
                                                                    double maxLat,
                                                                    double minLng,
                                                                    double maxLng);

    @Query("SELECT COUNT(p) FROM Post p Where p.writer.id=:userId")
    int getPostCountByUser(Long userId);
}
