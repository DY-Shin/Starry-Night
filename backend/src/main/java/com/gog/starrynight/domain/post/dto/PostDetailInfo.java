package com.gog.starrynight.domain.post.dto;

import com.gog.starrynight.domain.constellation.dto.ConstellationSimpleInfo;
import com.gog.starrynight.domain.post.entity.Post;
import com.gog.starrynight.domain.post_image.dto.PostImageInfo;
import com.gog.starrynight.domain.user.dto.UserSimpleInfo;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
public class PostDetailInfo {
    private Long id;
    private String title;
    private String content;
    private double lat;
    private double lng;
    private UserSimpleInfo writer;
    private List<PostImageInfo> images;
    private List<ConstellationSimpleInfo> constellationTags;
    private int postLikeCount;
    private boolean permission;
    private LocalDateTime createdDate;

    public PostDetailInfo(Post post, UserSimpleInfo writer, List<PostImageInfo> images, List<ConstellationSimpleInfo> constellationTags, int postLikeCount, boolean permission) {
        this.id = post.getId();
        this.title = post.getTitle();
        this.content = post.getContent();
        this.lat = post.getLat();
        this.lng = post.getLng();
        this.createdDate = post.getCreatedDate();
        this.writer = writer;
        this.images = images;
        this.constellationTags = constellationTags;
        this.postLikeCount = postLikeCount;
        this.permission = permission;
    }
}
