package com.gog.starrynight.domain.achievement_constellation.dto;

import lombok.Data;

@Data
public class AchievementConstellationCreateRequest {
    private Long achievementId;
    private Long constellationId;
}
