package com.gog.starrynight.domain.constellation_history.service;

import com.gog.starrynight.domain.constellation_history.repository.ConstellationHistoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ConstellationHistoryService {
    private final ConstellationHistoryRepository constellationHistoryRepository;
}
