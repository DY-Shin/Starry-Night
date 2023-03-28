package com.gog.starrynight.domain.post.dto;

import lombok.Data;

@Data
public class PostSearchRequest {
    private String title;
    private String content;
    private double[] pointA;
    private double[] pointB;
    private int page;
    private int size;
    private String sort;
    private String direction;

    public PostSearchRequest() {
        this.sort = "createdDate";
        this.direction = "desc";
        this.page = 0;
        this.size = 10;
    }
}
