package com.gog.starrynight.domain.achievement.dto;

import com.gog.starrynight.domain.achievement.entity.Achievement;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
public class AchievementInfo {
    private Long id;
    private String name;
    private LocalDateTime createdDate;

    public AchievementInfo(Achievement achievement) {
        this.id = achievement.getId();
        this.name = achievement.getName();
        this.createdDate = achievement.getCreatedDate();
    }
}
