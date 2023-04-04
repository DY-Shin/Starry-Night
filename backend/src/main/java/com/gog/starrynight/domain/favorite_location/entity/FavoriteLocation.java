package com.gog.starrynight.domain.favorite_location.entity;

import com.gog.starrynight.common.entity.BaseTimeEntity;
import com.gog.starrynight.domain.user.entity.User;
import lombok.*;

import javax.persistence.*;

@Entity
@Builder
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class FavoriteLocation extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 15, nullable = false)
    private String name;

    @Column(columnDefinition = "DECIMAL(9,6)", nullable = false)
    private double lat;

    @Column(columnDefinition = "DECIMAL(9,6)", nullable = false)
    private double lng;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    public void setUser(User user) {
        if (this.user != null) {
            this.user.getFavoriteLocations().remove(this);
        }
        this.user = user;
        this.user.getFavoriteLocations().add(this);
    }
}
