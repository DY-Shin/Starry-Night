package com.gog.starrynight.domain.constellation.service;

import com.gog.starrynight.domain.constellation.repository.ConstellationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ConstellationService {
    private final ConstellationRepository constellationRepository;
}
