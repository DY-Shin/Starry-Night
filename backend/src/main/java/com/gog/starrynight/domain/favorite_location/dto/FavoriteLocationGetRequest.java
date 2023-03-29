package com.gog.starrynight.domain.favorite_location.dto;

import lombok.Data;

@Data
public class FavoriteLocationGetRequest {
    private int page;
    private int size;
    private String sort;
    private String direction;

    public FavoriteLocationGetRequest() {
        this.sort = "createdDate";
        this.direction = "desc";
        this.page = 0;
        this.size = 10;
    }
}
