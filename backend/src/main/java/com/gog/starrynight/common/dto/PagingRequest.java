package com.gog.starrynight.common.dto;

import lombok.Data;

@Data
public class PagingRequest {
    private int page;
    private int size;
    private String sort;
    private String direction;

    public PagingRequest() {
        this.sort = "createdDate";
        this.direction = "desc";
        this.page = 0;
        this.size = 10;
    }
}
