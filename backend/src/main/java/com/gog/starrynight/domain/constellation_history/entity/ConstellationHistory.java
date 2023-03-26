package com.gog.starrynight.domain.constellation_history.entity;

import com.gog.starrynight.common.entity.BaseTimeEntity;
import com.gog.starrynight.domain.constellation.entity.Constellation;
import com.gog.starrynight.domain.post.entity.Post;
import com.gog.starrynight.domain.user.entity.User;
import lombok.*;

import javax.persistence.*;

@Entity
@Builder
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ConstellationHistory extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(columnDefinition = "DECIMAL(9,6)")
    private double lat;

    @Column(columnDefinition = "DECIMAL(9,6)")
    private double lng;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "constellation_id")
    private Constellation constellation;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_id")
    private Post post;

    public void setConstellation(Constellation constellation) {
        if (this.constellation != null) {
            this.constellation.getConstellationHistories().remove(this);
        }

        this.constellation = constellation;
        this.constellation.getConstellationHistories().add(this);
    }

    public void setUser(User user) {
        if (this.user != null) {
            this.user.getConstellationHistories().remove(this);
        }

        this.user = user;
        this.user.getConstellationHistories().add(this);
    }

    public void setPost(Post post) {
        if (this.post != null) {
            this.post.getConstellationHistories().remove(this);
        }

        this.post = post;
        this.post.getConstellationHistories().add(this);
    }
}
