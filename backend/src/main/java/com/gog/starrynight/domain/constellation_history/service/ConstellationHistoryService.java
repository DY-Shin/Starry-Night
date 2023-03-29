package com.gog.starrynight.domain.constellation_history.service;

import com.gog.starrynight.common.dto.PagedResult;
import com.gog.starrynight.domain.constellation_history.dto.ConstellationHistoryInfo;
import com.gog.starrynight.domain.constellation_history.dto.ConstellationHistorySearchRequest;
import com.gog.starrynight.domain.constellation_history.entity.ConstellationHistory;
import com.gog.starrynight.domain.constellation_history.repository.ConstellationHistoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ConstellationHistoryService {
    private final ConstellationHistoryRepository constellationHistoryRepository;

    public PagedResult<ConstellationHistoryInfo> searchConstellationHistory(ConstellationHistorySearchRequest dto) {
        Sort.Direction direction = dto.getDirection().equals("asc") ? Sort.Direction.ASC : Sort.Direction.DESC;
        Sort sort = Sort.by(direction, dto.getSort());
        Pageable pageable = PageRequest.of(dto.getPage(), dto.getSize(), sort);

        Page<ConstellationHistory> queryResult = constellationHistoryRepository.findAllByUserIdAndConstellationId(pageable, dto.getUserId(), dto.getConstellationId());

        Page<ConstellationHistoryInfo> processedResult = queryResult.map(ConstellationHistoryInfo::new);

        return new PagedResult<>(processedResult);
    }
}
