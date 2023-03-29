package com.gog.starrynight.domain.favorite_location.dto;

import com.gog.starrynight.domain.favorite_location.entity.FavoriteLocation;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class FavoriteLocationInfo {
    private Long id;
    private double lat;
    private double lng;

    public FavoriteLocationInfo(FavoriteLocation favoriteLocation) {
        this.id = favoriteLocation.getId();
        this.lat = favoriteLocation.getLat();
        this.lng = favoriteLocation.getLng();
    }
}
