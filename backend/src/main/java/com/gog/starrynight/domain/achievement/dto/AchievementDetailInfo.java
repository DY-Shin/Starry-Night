package com.gog.starrynight.domain.achievement.dto;

import com.gog.starrynight.domain.achievement.entity.Achievement;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class AchievementDetailInfo extends AchievementInfo {
    boolean completed;
    boolean completionPossible;
    Integer completedConstellationCount;
    Integer totalConstellationCount;

    public AchievementDetailInfo(Achievement achievement, boolean completed, boolean completionPossible, Integer completedConstellationCount, Integer totalConstellationCount) {
        super(achievement);
        this.completed = completed;
        this.completionPossible = completionPossible;
        this.completedConstellationCount = completedConstellationCount;
        this.totalConstellationCount = totalConstellationCount;
    }
}
