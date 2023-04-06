package com.gog.starrynight.domain.constellation.dto;

import com.gog.starrynight.domain.constellation.entity.Constellation;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
public class ConstellationDetailInfo extends ConstellationInfo{
    private String latin;
    private double mag;
    private String ra;
    private Integer declination;
    private String description;
    private String manual;
    private String originImage;
    private String linedImage;
    private String illustImage;
    private LocalDateTime firstViewedDate;
    private Integer viewCount;

    public ConstellationDetailInfo(Constellation constellation, LocalDateTime firstViewedDate, Integer viewCount) {
        super(constellation);
        this.latin = constellation.getLatin();
        this.mag = constellation.getMag();
        this.ra = constellation.getRa();
        this.declination = constellation.getDeclination();
        this.description = constellation.getDescription();
        this.manual = constellation.getManual();
        this.originImage = constellation.getOriginImage();
        this.linedImage = constellation.getLinedImage();
        this.illustImage = constellation.getIllustImage();
        this.firstViewedDate = firstViewedDate;
        this.viewCount = viewCount;
    }
}
