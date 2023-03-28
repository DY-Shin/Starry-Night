package com.gog.starrynight.common.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AreaRange {
    double minLat;
    double maxLat;
    double minLng;
    double maxLng;
}
