package com.gog.starrynight.domain.constellation.controller;

import com.gog.starrynight.domain.constellation.service.ConstellationService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "별자리 관리")
@RestController
@RequiredArgsConstructor
public class ConstellationController {
    private final ConstellationService constellationService;
}
