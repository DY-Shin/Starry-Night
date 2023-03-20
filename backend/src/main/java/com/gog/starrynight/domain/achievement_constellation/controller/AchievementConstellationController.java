package com.gog.starrynight.domain.achievement_constellation.controller;

import com.gog.starrynight.domain.achievement_constellation.service.AchievementConstellationService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "도전과제 별자리 관리")
@RestController
@RequiredArgsConstructor
public class AchievementConstellationController {
    private final AchievementConstellationService achievementConstellationService;
}
