package com.gog.starrynight.domain.achievement.controller;

import com.gog.starrynight.domain.achievement.service.AchievementService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "도전과제 관리")
@RestController
@RequiredArgsConstructor
public class AchievementController {
    private final AchievementService achievementService;
}
