package com.gog.starrynight.domain.achievement.entity;

import com.gog.starrynight.common.entity.BaseTimeEntity;
import com.gog.starrynight.domain.achievement_constellation.entity.AchievementConstellation;
import com.gog.starrynight.domain.user_achievement.entity.UserAchievement;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Builder
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Achievement extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 100, nullable = false)
    private String name;

    @Builder.Default
    @OneToMany(mappedBy = "achievement", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<AchievementConstellation> achievementConstellations = new ArrayList<>();

    @Builder.Default
    @OneToMany(mappedBy = "achievement", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<UserAchievement> userAchievements = new ArrayList<>();

}
