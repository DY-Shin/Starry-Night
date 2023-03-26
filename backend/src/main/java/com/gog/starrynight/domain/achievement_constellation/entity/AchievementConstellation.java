package com.gog.starrynight.domain.achievement_constellation.entity;

import com.gog.starrynight.common.entity.BaseTimeEntity;
import com.gog.starrynight.domain.achievement.entity.Achievement;
import com.gog.starrynight.domain.constellation.entity.Constellation;
import lombok.*;

import javax.persistence.*;

@Entity
@Builder
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class AchievementConstellation extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "achievement_id")
    private Achievement achievement;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "constellation_id")
    private Constellation constellation;

    public void setAchievement(Achievement achievement) {
        if (this.achievement != null) {
            this.achievement.getAchievementConstellations().remove(this);
        }

        this.achievement = achievement;
        this.achievement.getAchievementConstellations().add(this);
    }

    public void setConstellation(Constellation constellation) {
        if (this.constellation != null) {
            this.constellation.getAchievementConstellations().remove(this);
        }

        this.constellation = constellation;
        this.constellation.getAchievementConstellations().add(this);
    }
}
