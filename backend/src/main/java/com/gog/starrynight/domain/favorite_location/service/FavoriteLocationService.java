package com.gog.starrynight.domain.favorite_location.service;

import com.gog.starrynight.common.exception.ResourceNotFoundException;
import com.gog.starrynight.domain.favorite_location.dto.FavoriteLocationCreateRequest;
import com.gog.starrynight.domain.favorite_location.dto.FavoriteLocationSimpleInfo;
import com.gog.starrynight.domain.favorite_location.entity.FavoriteLocation;
import com.gog.starrynight.domain.favorite_location.repository.FavoriteLocationRepository;
import com.gog.starrynight.domain.user.entity.User;
import com.gog.starrynight.domain.user.repository.UserRepository;
import com.gog.starrynight.security.LoginUser;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class FavoriteLocationService {
    private final FavoriteLocationRepository favoriteLocationRepository;
    private final UserRepository userRepository;

    @Transactional
    public FavoriteLocationSimpleInfo createFavoriteLocation(Long requesterId, FavoriteLocationCreateRequest dto) {
        User requester = userRepository.findById(requesterId)
                .orElseThrow(() -> new ResourceNotFoundException("존재하지 않는 회원입니다."));

        FavoriteLocation favoriteLocation = FavoriteLocation.builder()
                .lat(dto.getLat())
                .lng(dto.getLng())
                .user(requester)
                .build();

        favoriteLocationRepository.save(favoriteLocation);

        return new FavoriteLocationSimpleInfo(favoriteLocation);
    }

    @Transactional
    public void deleteFavoriteLocation(Long requesterId, Long favoriteLocationId) {
        User requester = userRepository.findById(requesterId)
                .orElseThrow(() -> new ResourceNotFoundException("존재하지 않는 회원입니다."));

        FavoriteLocation favoriteLocation = favoriteLocationRepository.findByIdAndUserId(favoriteLocationId, requesterId)
                .orElseThrow(() -> new ResourceNotFoundException("등록한 관심 위치가 아닙니다."));

        favoriteLocationRepository.delete(favoriteLocation);
    }
}
