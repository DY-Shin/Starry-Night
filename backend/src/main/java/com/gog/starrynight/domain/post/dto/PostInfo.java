package com.gog.starrynight.domain.post.dto;

import com.gog.starrynight.domain.post.entity.Post;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class PostInfo {
    private Long id;
    private String title;
    private String content;
    private double lat;
    private double lng;

    public PostInfo(Post post) {
        this.id = post.getId();
        this.title = post.getTitle();
        this.content = post.getContent();
        this.lat = post.getLat();
        this.lng = post.getLng();
    }
}
