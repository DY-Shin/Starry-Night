package com.gog.starrynight.domain.user.dto;

import com.gog.starrynight.domain.user.entity.User;
import lombok.*;

@Data
@NoArgsConstructor
public class UserPageInfo extends UserSimpleInfo{
    private Integer completedConstellationCount;
    private Integer totalConstellationCount;
    private Integer completedAchievementCount;
    private Integer totalAchievementCount;
    private Integer postCount;
    private boolean permission;

    public UserPageInfo(User user, int completedConstellationCount, int totalConstellationCount, int completedAchievementCount, int totalAchievementCount, int postCount, boolean permission) {
        super(user);
        this.completedConstellationCount = completedConstellationCount;
        this.totalConstellationCount = totalConstellationCount;
        this.completedAchievementCount = completedAchievementCount;
        this.totalAchievementCount = totalAchievementCount;
        this.postCount = postCount;
        this.permission = permission;
    }
}
