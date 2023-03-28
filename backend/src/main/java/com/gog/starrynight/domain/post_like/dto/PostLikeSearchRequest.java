package com.gog.starrynight.domain.post_like.dto;

import lombok.Data;

@Data
public class PostLikeSearchRequest {
    private int page;
    private int size;
    private String sort;
    private String direction;

    public PostLikeSearchRequest() {
        this.sort = "createdDate";
        this.direction = "desc";
        this.page = 0;
        this.size = 10;
    }
}
