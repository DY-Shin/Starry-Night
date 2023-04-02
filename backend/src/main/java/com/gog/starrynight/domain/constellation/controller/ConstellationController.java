package com.gog.starrynight.domain.constellation.controller;

import com.gog.starrynight.common.dto.ApiResponse;
import com.gog.starrynight.domain.constellation.dto.ConstellationCreateRequest;
import com.gog.starrynight.domain.constellation.dto.ConstellationDetailInfo;
import com.gog.starrynight.domain.constellation.dto.ConstellationListItemInfo;
import com.gog.starrynight.domain.constellation.dto.ConstellationSimpleInfo;
import com.gog.starrynight.domain.constellation.service.ConstellationService;
import com.gog.starrynight.security.LoginUser;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "별자리 관리")
@RestController
@RequiredArgsConstructor
public class ConstellationController {
    private final ConstellationService constellationService;

    @Operation(summary = "별자리 등록")
    @PostMapping("/constellations")
    public ResponseEntity<ApiResponse> createConstellation(@RequestBody ConstellationCreateRequest dto) {
        ConstellationSimpleInfo constellationSimpleInfo = constellationService.createConstellation(dto);
        ApiResponse result = new ApiResponse(true, "별자리 등록 성공", constellationSimpleInfo);
        return new ResponseEntity<>(result, HttpStatus.CREATED);
    }

    @Operation(summary = "별자리 삭제")
    @DeleteMapping("/constellations/{constellationId}")
    public ResponseEntity<ApiResponse> deleteConstellation(@PathVariable("constellationId") Long constellationId) {
        constellationService.deleteConstellation(constellationId);
        ApiResponse result = new ApiResponse(true, "별자리 삭제 성공");
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @Operation(summary = "별자리 상세 조회")
    @GetMapping("/constellations/{constellationId}")
    public ResponseEntity<ApiResponse<ConstellationDetailInfo>> getConstellationDetailInfo(@AuthenticationPrincipal LoginUser loginUser,
                                                                                           @PathVariable("constellationId") Long constellationId) {
        Long requesterId = (loginUser != null ? loginUser.getId() : null);
        ConstellationDetailInfo constellationDetailInfo = constellationService.getConstellationDetailInfo(constellationId, requesterId);
        ApiResponse<ConstellationDetailInfo> result = new ApiResponse(true, "별자리 조회 성공", constellationDetailInfo);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @Operation(summary = "도전과제별 별자리 목록 조회")
    @GetMapping("/achievements/{achievementId}/constellations")
    public ResponseEntity<ApiResponse<List<ConstellationListItemInfo>>> getConstellationsByAchievement(@AuthenticationPrincipal LoginUser loginUser,
                                                                                                       @PathVariable Long achievementId) {
        Long requesterId = (loginUser != null ? loginUser.getId() : null);
        List<ConstellationListItemInfo> constellations = constellationService.getConstellationsByAchievement(achievementId, requesterId);
        ApiResponse<List<ConstellationListItemInfo>> result = new ApiResponse(true, "도전과제별 별자리 목록 조회 성공", constellations);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
