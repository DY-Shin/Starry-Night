package com.gog.starrynight.domain.constellation.dto;

import com.gog.starrynight.domain.constellation.entity.Constellation;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ConstellationListItemInfo extends ConstellationSimpleInfo {
    private boolean completed;

    public ConstellationListItemInfo(Constellation constellation, boolean completed) {
        super(constellation);
        this.completed = completed;
    }
}
