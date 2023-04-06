package com.gog.starrynight.domain.constellation.entity;

import com.gog.starrynight.common.entity.BaseTimeEntity;
import com.gog.starrynight.domain.achievement_constellation.entity.AchievementConstellation;
import com.gog.starrynight.domain.constellation_history.entity.ConstellationHistory;
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
public class Constellation extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(length = 100, nullable = false)
    private String name;
    @Column(length = 20)
    private String latin;
    @Column(columnDefinition = "DECIMAL(9,6)", nullable = false)
    private double mag;
    @Column(length = 20)
    private String ra;
    private Integer declination;
    @Column(length = 2000)
    private String description;
    @Column(length = 500)
    private String manual;
    @Column(length = 300)
    private String originImage;
    @Column(length = 300)
    private String linedImage;
    @Column(length = 300)
    private String illustImage;

    @Builder.Default
    @OneToMany(mappedBy = "constellation", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<AchievementConstellation> achievementConstellations = new ArrayList<>();

    @Builder.Default
    @OneToMany(mappedBy = "constellation", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<ConstellationHistory> constellationHistories = new ArrayList<>();
}
