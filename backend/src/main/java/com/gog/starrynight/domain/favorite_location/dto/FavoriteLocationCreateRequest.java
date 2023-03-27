package com.gog.starrynight.domain.favorite_location.dto;

import lombok.Data;

@Data
public class FavoriteLocationCreateRequest {
    private double lat;
    private double lng;
}
