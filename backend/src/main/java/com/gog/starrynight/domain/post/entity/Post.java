package com.gog.starrynight.domain.post.entity;

import com.gog.starrynight.common.entity.BaseTimeEntity;
import com.gog.starrynight.domain.constellation_history.entity.ConstellationHistory;
import com.gog.starrynight.domain.post_image.entity.PostImage;
import com.gog.starrynight.domain.post_like.entity.PostLike;
import com.gog.starrynight.domain.user.entity.User;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Builder
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Post extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(length = 100, nullable = false)
    private String title;

    @Column(length = 500, nullable = false)
    private String content;

    @Column(columnDefinition = "DECIMAL(9,6)")
    private Double lat;

    @Column(columnDefinition = "DECIMAL(9,6)")
    private Double lng;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "writer_id")
    private User writer;

    @Builder.Default
    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<PostImage> postImages = new ArrayList<>();

    @Builder.Default
    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<PostLike> postLikes = new ArrayList<>();

    @Builder.Default
    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<ConstellationHistory> constellationHistories = new ArrayList<>();
}
