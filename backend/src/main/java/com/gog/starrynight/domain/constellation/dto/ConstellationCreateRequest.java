package com.gog.starrynight.domain.constellation.dto;

import lombok.Data;

import javax.persistence.Column;

@Data
public class ConstellationCreateRequest {
    private String name;
    private String latin;
    private double mag;
    private String ra;
    private Integer declination;
    private String description;
    private String manual;
    private String originImage;
    private String linedImage;
    private String illustImage;
}
