package com.gog.starrynight.domain.constellation.dto;

import com.gog.starrynight.domain.constellation.entity.Constellation;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ConstellationSimpleInfo {
    private Long id;
    private String name;

    public ConstellationSimpleInfo(Constellation constellation) {
        this.id = constellation.getId();
        this.name = constellation.getName();
    }
}
