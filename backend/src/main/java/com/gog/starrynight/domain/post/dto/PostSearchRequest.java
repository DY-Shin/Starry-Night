package com.gog.starrynight.domain.post.dto;

import com.gog.starrynight.common.dto.PagingRequest;
import lombok.Data;

@Data
public class PostSearchRequest extends PagingRequest {
    private String title;
    private String content;
    private double[] pointA;
    private double[] pointB;
    
    public PostSearchRequest() {
        super();
    }
}
