package com.gog.starrynight.domain.favorite_location.dto;

import com.gog.starrynight.common.dto.PagingRequest;
import lombok.Data;

@Data
public class FavoriteLocationSearchRequest extends PagingRequest {
    private String name;

    public FavoriteLocationSearchRequest() {
        super();
    }
}
