package com.gog.starrynight.domain.achievement_constellation.service;

import com.gog.starrynight.domain.achievement_constellation.repository.AchievementConstellationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class AchievementConstellationService {
    private final AchievementConstellationRepository achievementConstellationRepository;
}
