package com.gog.starrynight.domain.constellation_history.controller;

import com.gog.starrynight.common.dto.ApiResponse;
import com.gog.starrynight.common.dto.PagedResult;
import com.gog.starrynight.domain.constellation_history.dto.ConstellationHistoryInfo;
import com.gog.starrynight.domain.constellation_history.dto.ConstellationHistorySearchRequest;
import com.gog.starrynight.domain.constellation_history.service.ConstellationHistoryService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "별자리 기록 관리")
@RestController
@RequiredArgsConstructor
public class ConstellationHistoryController {
    private final ConstellationHistoryService constellationHistoryService;

    @Operation(summary = "별자리 기록 조회")
    @GetMapping("/constellation-histories")
    public ResponseEntity<ApiResponse<PagedResult<ConstellationHistoryInfo>>> searchConstellationHistory(ConstellationHistorySearchRequest dto) {
        PagedResult<ConstellationHistoryInfo> constellationHistoryInfo = constellationHistoryService.searchConstellationHistory(dto);
        ApiResponse<PagedResult<ConstellationHistoryInfo>> result = new ApiResponse<>(true, "별자리 기록 조회 성공", constellationHistoryInfo);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
