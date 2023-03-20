package com.gog.starrynight.domain.achievement.service;

import com.gog.starrynight.domain.achievement.repository.AchievementRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class AchievementService {
    private final AchievementRepository achievementRepository;
}
