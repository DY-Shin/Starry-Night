package com.gog.starrynight.domain.user.service;

import com.gog.starrynight.common.exception.ResourceNotFoundException;
import com.gog.starrynight.common.util.DataFileUtil;
import com.gog.starrynight.domain.datafile.entity.DataFile;
import com.gog.starrynight.domain.datafile.repository.DataFileRepository;
import com.gog.starrynight.domain.user.dto.UserCreateRequest;
import com.gog.starrynight.domain.user.dto.UserNameUpdateRequest;
import com.gog.starrynight.domain.user.dto.UserSimpleInfo;
import com.gog.starrynight.domain.user.entity.User;
import com.gog.starrynight.domain.user.repository.UserRepository;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final DataFileRepository dataFileRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final DataFileUtil dataFileUtil;

    @Transactional
    public User creatUser(UserCreateRequest dto) {
        DataFile profileImage = dataFileUtil.saveImageFromURL(dto.getProfileImageUrl());
        dataFileRepository.save(profileImage);

        User user = User.builder()
                .loginId(dto.getLoginId())
                .password(bCryptPasswordEncoder.encode(dto.getPassword()))
                .name(dto.getName())
                .provider(dto.getProvider())
                .profileImage(profileImage)
                .build();
        userRepository.save(user);

        return user;
    }

    @Transactional
    public void updateUserName(Long requesterId, UserNameUpdateRequest dto) {
        User requester = userRepository.findById(requesterId)
                .orElseThrow(() -> new ResourceNotFoundException("존재하지 않는 회원입니다."));

        requester.setName(dto.getName());
    }

    public UserSimpleInfo getMyProfile(Long requesterId) {
        User requester = userRepository.findById(requesterId)
                .orElseThrow(() -> new ResourceNotFoundException("존재하지 않는 회원입니다."));

        return new UserSimpleInfo(requester);
    }

    @Transactional
    public void updateUserProfileImage(Long requesterId, MultipartFile multipartFile) throws IOException {
        User requester = userRepository.findById(requesterId)
                .orElseThrow(() -> new ResourceNotFoundException("존재하지 않는 회원입니다."));

        DataFile profileImage = requester.getProfileImage();

        // 프로필 이미지가 존재하는 경우
        if (profileImage != null) {
            String filePath = dataFileUtil.getFullPath(profileImage.getStoredFileName());
            dataFileUtil.deleteFile(filePath);
            requester.setProfileImage(null);
            dataFileRepository.delete(profileImage);
        }

        profileImage = dataFileUtil.storeFile(multipartFile);
        dataFileRepository.save(profileImage);

        requester.setProfileImage(profileImage);
    }
}
