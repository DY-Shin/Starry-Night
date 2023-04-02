package com.gog.starrynight.domain.constellation.service;

import com.gog.starrynight.common.exception.ResourceNotFoundException;
import com.gog.starrynight.domain.constellation.dto.ConstellationCreateRequest;
import com.gog.starrynight.domain.constellation.dto.ConstellationDetailInfo;
import com.gog.starrynight.domain.constellation.dto.ConstellationSimpleInfo;
import com.gog.starrynight.domain.constellation.entity.Constellation;
import com.gog.starrynight.domain.constellation.repository.ConstellationRepository;
import com.gog.starrynight.domain.constellation_history.repository.ConstellationHistoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ConstellationService {
    private final ConstellationRepository constellationRepository;
    private final ConstellationHistoryRepository constellationHistoryRepository;

    @Transactional
    public ConstellationSimpleInfo createConstellation(ConstellationCreateRequest dto) {
        Constellation constellation = Constellation.builder()
                .name(dto.getName())
                .latin(dto.getLatin())
                .mag(dto.getMag())
                .ra(dto.getRa())
                .declination(dto.getDeclination())
                .description(dto.getDescription())
                .manual(dto.getManual())
                .originImage(dto.getOriginImage())
                .linedImage(dto.getLinedImage())
                .illustImage(dto.getIllustImage())
                .build();

        constellationRepository.save(constellation);

        return new ConstellationSimpleInfo(constellation);
    }

    @Transactional
    public void deleteConstellation(Long constellationId) {
        Constellation constellation = constellationRepository.findById(constellationId)
                .orElseThrow(() -> new ResourceNotFoundException("존재하지 않는 별자리입니다."));

        constellationRepository.delete(constellation);
    }

    public ConstellationDetailInfo getConstellationDetailInfo(Long constellationId, Long requesterId) {
        Constellation constellation = constellationRepository.findById(constellationId)
                .orElseThrow(() -> new ResourceNotFoundException("존재하지 않는 별자리입니다."));

        LocalDateTime firstViewedDate = null;
        Integer viewCount = null;
        if (requesterId != null) {
            firstViewedDate = constellationHistoryRepository.getFirstViewedDateByConstellationIdAndUserId(constellationId, requesterId);
            viewCount = constellationHistoryRepository.getViewCountByConstellationIdAndUserId(constellationId, requesterId);
        }

        return new ConstellationDetailInfo(constellation, firstViewedDate, viewCount);
    }
}
