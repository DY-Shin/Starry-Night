package com.gog.starrynight.domain.post.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class PostRequest {
    private String title;
    private String content;
    private double lat;
    private double lng;
}
