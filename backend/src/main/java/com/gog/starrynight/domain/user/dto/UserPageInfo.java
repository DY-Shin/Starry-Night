package com.gog.starrynight.domain.user.dto;

import lombok.*;

@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserPageInfo {
    private Integer completedConstellationCount;
    private Integer totalConstellationCount;
    private Integer completedAchievementCount;
    private Integer totalAchievementCount;
    private Integer postCount;
    private boolean permission;
}
