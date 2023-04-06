package com.gog.starrynight.domain.constellation.dto;

import com.gog.starrynight.domain.constellation.entity.Constellation;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ConstellationInfo {
    private Long id;
    private String name;
    private String description;

    public ConstellationInfo(Constellation constellation) {
        this.id = constellation.getId();
        this.name = constellation.getName();
        this.description = constellation.getDescription();
    }
}
