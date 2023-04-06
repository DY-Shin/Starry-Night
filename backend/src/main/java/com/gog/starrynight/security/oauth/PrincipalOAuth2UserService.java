package com.gog.starrynight.security.oauth;

import com.gog.starrynight.domain.user.dto.UserCreateRequest;
import com.gog.starrynight.domain.user.entity.User;
import com.gog.starrynight.domain.user.repository.UserRepository;
import com.gog.starrynight.domain.user.service.UserService;
import com.gog.starrynight.security.LoginUser;
import com.gog.starrynight.security.oauth.provider.GoogleOAuthUserInfo;
import com.gog.starrynight.security.oauth.provider.KakaoOAuthUserInfo;
import com.gog.starrynight.security.oauth.provider.OAuthUserInfo;
import lombok.RequiredArgsConstructor;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class PrincipalOAuth2UserService extends DefaultOAuth2UserService {
    private final UserRepository userRepository;
    private final UserService userService;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2User oAuth2User = super.loadUser(userRequest);

        String provider = userRequest.getClientRegistration().getRegistrationId();

        OAuthUserInfo oAuthUserInfo = null;

        if (provider.equals("kakao")) {
            oAuthUserInfo = new KakaoOAuthUserInfo(oAuth2User.getAttributes());
        } else if(provider.equals("google")) {
            oAuthUserInfo = new GoogleOAuthUserInfo(oAuth2User.getAttributes());
        }

        String providerId = oAuthUserInfo.getProviderId();
        String loginId = provider + "_" + providerId;

        Optional<User> findUser = userRepository.findByLoginId(loginId);

        User user = null;

        // 해당 소셜 아이디로 로그인한 적이 없다면 회원 생성
        if (findUser.isEmpty()) {
            UserCreateRequest dto = UserCreateRequest.builder()
                    .loginId(loginId)
                    .name(oAuthUserInfo.getName())
                    .password(UUID.randomUUID().toString())
                    .provider(provider)
                    .profileImageUrl(oAuthUserInfo.getProfileImageUrl())
                    .build();
            user = userService.creatUser(dto);
        } else { // 로그인한 적이 있으므로 유저 불러오기
            user = findUser.get();
        }

        return new LoginUser(user);
    }
}
