package com.gog.starrynight.domain.user_achievement.entity;

import com.gog.starrynight.common.entity.BaseTimeEntity;
import com.gog.starrynight.domain.achievement.entity.Achievement;
import com.gog.starrynight.domain.user.entity.User;
import lombok.*;

import javax.persistence.*;

@Entity
@Builder
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UserAchievement extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "achievement_id")
    private Achievement achievement;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    public void setAchievement(Achievement achievement) {
        if (this.achievement != null) {
            this.achievement.getUserAchievements().remove(this);
        }

        this.achievement = achievement;
        this.achievement.getUserAchievements().add(this);
    }

    public void setUser(User user) {
        if (this.user != null) {
            this.user.getUserAchievements().remove(this);
        }

        this.user = user;
        this.user.getUserAchievements().add(this);
    }

}
