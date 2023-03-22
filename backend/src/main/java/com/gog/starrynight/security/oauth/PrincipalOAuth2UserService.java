package com.gog.starrynight.security.oauth;

import com.gog.starrynight.domain.user.entity.User;
import com.gog.starrynight.domain.user.repository.UserRepository;
import com.gog.starrynight.security.LoginUser;
import com.gog.starrynight.security.oauth.provider.KakaoOAuthUserInfo;
import com.gog.starrynight.security.oauth.provider.OAuthUserInfo;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
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
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2User oAuth2User = super.loadUser(userRequest);

        String provider = userRequest.getClientRegistration().getRegistrationId();

        OAuthUserInfo oAuthUserInfo = null;

        if (provider.equals("kakao")) {
            oAuthUserInfo = new KakaoOAuthUserInfo(oAuth2User.getAttributes());
        }

        String providerId = oAuthUserInfo.getProviderId();
        String userId = provider + "_" + providerId;

        Optional<User> findUser = userRepository.findByLoginId(userId);

        User user = null;

        // 해당 소셜 아이디로 로그인한 적이 없다면 회원 생성
        if (findUser.isEmpty()) {
            user = User.builder()
                    .loginId(userId)
                    .name(oAuthUserInfo.getName())
                    .password(bCryptPasswordEncoder.encode(UUID.randomUUID().toString()))
                    .provider(provider)
                    .build();

            userRepository.save(user);
        } else { // 로그인한 적이 있으므로 유저 불러오기
            user = findUser.get();
        }

        return new LoginUser(user);
    }
}
