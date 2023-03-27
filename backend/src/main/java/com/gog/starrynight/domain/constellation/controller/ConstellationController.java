package com.gog.starrynight.domain.constellation.controller;

import com.gog.starrynight.common.dto.ApiResponse;
import com.gog.starrynight.domain.constellation.dto.ConstellationCreateRequest;
import com.gog.starrynight.domain.constellation.dto.ConstellationInfo;
import com.gog.starrynight.domain.constellation.service.ConstellationService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Tag(name = "별자리 관리")
@RestController
@RequiredArgsConstructor
public class ConstellationController {
    private final ConstellationService constellationService;

    @Operation(summary = "별자리 등록")
    @PostMapping("/constellations")
    public ResponseEntity<ApiResponse> createConstellation(@RequestBody ConstellationCreateRequest dto) {
        ConstellationInfo constellationInfo = constellationService.createConstellation(dto);
        ApiResponse result = new ApiResponse(true, "별자리 등록 성공", constellationInfo);
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
    public ResponseEntity<ApiResponse> checkConstellation(@PathVariable("constellationId") Long constellationId) {
        ConstellationInfo constellationInfo = constellationService.checkConstellation(constellationId);
        ApiResponse result = new ApiResponse(true, "별자리 조회", constellationInfo);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
