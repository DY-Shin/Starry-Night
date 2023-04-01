package com.gog.starrynight.domain.favorite_location.service;

import com.gog.starrynight.common.dto.PagedResult;
import com.gog.starrynight.common.dto.PagingRequest;
import com.gog.starrynight.common.exception.ResourceAlreadyExistsException;
import com.gog.starrynight.common.exception.ResourceNotFoundException;
import com.gog.starrynight.domain.favorite_location.dto.FavoriteLocationCreateRequest;
import com.gog.starrynight.domain.favorite_location.dto.FavoriteLocationInfo;
import com.gog.starrynight.domain.favorite_location.entity.FavoriteLocation;
import com.gog.starrynight.domain.favorite_location.repository.FavoriteLocationRepository;
import com.gog.starrynight.domain.user.entity.User;
import com.gog.starrynight.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class FavoriteLocationService {
    private final FavoriteLocationRepository favoriteLocationRepository;
    private final UserRepository userRepository;

    @Transactional
    public FavoriteLocationInfo createFavoriteLocation(Long requesterId, FavoriteLocationCreateRequest dto) {
        User requester = userRepository.findById(requesterId)
                .orElseThrow(() -> new ResourceNotFoundException("존재하지 않는 회원입니다."));

        Optional<FavoriteLocation> location = favoriteLocationRepository.findByLatAndLngAndUserId(dto.getLat(), dto.getLng(), requesterId);
        if (location.isPresent()) {
            throw new ResourceAlreadyExistsException("이미 존재하는 관심 위치입니다.");
        }

        FavoriteLocation favoriteLocation = FavoriteLocation.builder()
                .name(dto.getName())
                .lat(dto.getLat())
                .lng(dto.getLng())
                .user(requester)
                .build();

        favoriteLocationRepository.save(favoriteLocation);

        return new FavoriteLocationInfo(favoriteLocation);
    }

    @Transactional
    public void deleteFavoriteLocation(Long requesterId, Long favoriteLocationId) {
        User requester = userRepository.findById(requesterId)
                .orElseThrow(() -> new ResourceNotFoundException("존재하지 않는 회원입니다."));

        FavoriteLocation favoriteLocation = favoriteLocationRepository.findByIdAndUserId(favoriteLocationId, requesterId)
                .orElseThrow(() -> new ResourceNotFoundException("등록한 관심 위치가 아닙니다."));

        favoriteLocationRepository.delete(favoriteLocation);
    }

    public PagedResult<FavoriteLocationInfo> getFavoriteLocation(Long requesterId, PagingRequest dto) {
        User requester = userRepository.findById(requesterId)
                .orElseThrow(() -> new ResourceNotFoundException("존재하지 않는 회원입니다."));

        Sort.Direction direction = dto.getDirection().equals("asc") ? Sort.Direction.ASC : Sort.Direction.DESC;
        Sort sort = Sort.by(direction, dto.getSort());
        Pageable pageable = PageRequest.of(dto.getPage(), dto.getSize(), sort);

        Page<FavoriteLocation> queryResult = favoriteLocationRepository.findAllByUserId(pageable, requesterId);

        Page<FavoriteLocationInfo> processedResult = queryResult.map(FavoriteLocationInfo::new);

        return new PagedResult<>(processedResult);
    }
}
