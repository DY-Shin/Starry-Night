package com.gog.starrynight.domain.constellation_history.controller;

import com.gog.starrynight.domain.constellation_history.service.ConstellationHistoryService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "별자리 기록 관리")
@RestController
@RequiredArgsConstructor
public class ConstellationHistoryController {
    private final ConstellationHistoryService constellationHistoryService;
}
