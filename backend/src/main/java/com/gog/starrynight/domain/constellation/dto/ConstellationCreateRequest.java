package com.gog.starrynight.domain.constellation.dto;

import lombok.Data;

@Data
public class ConstellationCreateRequest {
    private String name;
    private String description;
}
