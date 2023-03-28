package com.gog.starrynight.domain.post_like.dto;

import lombok.Data;

@Data
public class GetPostLikersRequest {
    private int page;
    private int size;
    private String sort;
    private String direction;

    public GetPostLikersRequest() {
        this.sort = "createdDate";
        this.direction = "desc";
        this.page = 0;
        this.size = 10;
    }
}
