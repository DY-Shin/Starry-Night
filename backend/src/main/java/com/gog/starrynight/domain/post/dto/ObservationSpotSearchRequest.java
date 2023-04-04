package com.gog.starrynight.domain.post.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ObservationSpotSearchRequest {
    private double[] pointA;
    private double[] pointB;
}
