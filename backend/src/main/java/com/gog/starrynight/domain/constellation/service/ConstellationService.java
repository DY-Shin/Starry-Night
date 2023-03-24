package com.gog.starrynight.domain.constellation.service;

import com.gog.starrynight.domain.constellation.dto.ConstellationCreateRequest;
import com.gog.starrynight.domain.constellation.dto.ConstellationInfo;
import com.gog.starrynight.domain.constellation.entity.Constellation;
import com.gog.starrynight.domain.constellation.repository.ConstellationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ConstellationService {
    private final ConstellationRepository constellationRepository;

    @Transactional
    public ConstellationInfo createConstellation(ConstellationCreateRequest dto) {
        Constellation constellation = Constellation.builder()
                .name(dto.getName())
                .description(dto.getDescription())
                .build();

        constellationRepository.save(constellation);

        return new ConstellationInfo(constellation);
    }
}
