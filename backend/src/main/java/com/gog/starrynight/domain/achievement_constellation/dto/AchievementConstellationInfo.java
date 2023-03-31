package com.gog.starrynight.domain.achievement_constellation.dto;

import com.gog.starrynight.domain.achievement.dto.AchievementInfo;
import com.gog.starrynight.domain.constellation.dto.ConstellationSimpleInfo;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class AchievementConstellationInfo {
    private AchievementInfo achievement;
    private ConstellationSimpleInfo constellation;

    public AchievementConstellationInfo(AchievementInfo achievementInfo, ConstellationSimpleInfo constellationSimpleInfo){
        this.achievement = achievementInfo;
        this.constellation = constellationSimpleInfo;
    }
}
