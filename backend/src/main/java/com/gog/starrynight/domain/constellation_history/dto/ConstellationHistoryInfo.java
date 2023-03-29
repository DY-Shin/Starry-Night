package com.gog.starrynight.domain.constellation_history.dto;

import com.gog.starrynight.domain.constellation_history.entity.ConstellationHistory;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
public class ConstellationHistoryInfo {
    private LocalDateTime createdDate;
    private double lat;
    private double lng;

    public ConstellationHistoryInfo(ConstellationHistory constellationHistory) {
        this.createdDate = constellationHistory.getCreatedDate();
        this.lat = constellationHistory.getLat();
        this.lng = constellationHistory.getLng();
    }
}
