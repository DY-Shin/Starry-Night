package com.gog.starrynight.domain.post.dto;

import com.gog.starrynight.domain.post.entity.Post;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ObservationSpot {
    double lat;
    double lng;

    public ObservationSpot(Post post) {
        this.lat = post.getLat();
        this.lng = post.getLng();
    }
}
