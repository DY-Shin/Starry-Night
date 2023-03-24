package com.gog.starrynight.domain.user.service;

import com.gog.starrynight.common.exception.ResourceNotFoundException;
import com.gog.starrynight.domain.user.dto.UserNameUpdateRequest;
import com.gog.starrynight.domain.user.entity.User;
import com.gog.starrynight.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    @Transactional
    public void updateUserName(Long requesterId, UserNameUpdateRequest dto) {
        User requester = userRepository.findById(requesterId)
                .orElseThrow(() -> new ResourceNotFoundException("존재하지 않는 회원입니다."));

        requester.setName(dto.getName());
    }
}
