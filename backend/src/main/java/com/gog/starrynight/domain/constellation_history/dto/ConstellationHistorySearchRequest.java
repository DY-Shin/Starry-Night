package com.gog.starrynight.domain.constellation_history.dto;

import com.gog.starrynight.common.dto.PagingRequest;
import lombok.Data;

@Data
public class ConstellationHistorySearchRequest extends PagingRequest {
    private Long userId;
    private Long constellationId;

    public ConstellationHistorySearchRequest(){
        super();
    }
}
