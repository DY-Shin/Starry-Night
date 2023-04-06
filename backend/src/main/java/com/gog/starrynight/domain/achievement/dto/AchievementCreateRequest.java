package com.gog.starrynight.domain.achievement.dto;

import lombok.Data;

@Data
public class AchievementCreateRequest {
    private String name;
    private Long[] constellations;
}
