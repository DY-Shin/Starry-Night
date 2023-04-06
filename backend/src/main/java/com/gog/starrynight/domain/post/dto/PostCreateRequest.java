package com.gog.starrynight.domain.post.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class PostCreateRequest {
    private String title;
    private String content;
    private Double lat;
    private Double lng;
    private Long[] constellations;
}
