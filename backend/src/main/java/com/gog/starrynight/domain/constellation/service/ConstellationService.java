package com.gog.starrynight.domain.constellation.service;

import com.gog.starrynight.domain.constellation.dto.ConstellationCreate;
import com.gog.starrynight.domain.constellation.dto.ConstellationInfo;
import com.gog.starrynight.domain.constellation.entity.Constellation;
import com.gog.starrynight.domain.constellation.repository.ConstellationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ConstellationService {
    private final ConstellationRepository constellationRepository;

    @Transactional
    public ConstellationInfo constellationCreate(ConstellationCreate dto) {
        Constellation constellation = Constellation.builder()
                .name(dto.getName())
                .description(dto.getDescription())
                .build();

        constellationRepository.save(constellation);

        return new ConstellationInfo(constellation);
    }
}
