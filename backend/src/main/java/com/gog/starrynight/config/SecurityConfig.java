package com.gog.starrynight.config;

import com.gog.starrynight.security.oauth.OAuth2AuthenticationFailureHandler;
import com.gog.starrynight.security.oauth.OAuth2AuthenticationSuccessHandler;
import com.gog.starrynight.security.oauth.PrincipalOAuth2UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final PrincipalOAuth2UserService principalOauth2UserService;
    private final OAuth2AuthenticationSuccessHandler oAuth2AuthenticationSuccessHandler;
    private final OAuth2AuthenticationFailureHandler oAuth2AuthenticationFailureHandler;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests() // 애플리케이션에 들어오는 요청에 대한 사용 권한을 체크
                .anyRequest().permitAll(); // 나머지 모든 주소에 대해서 인증 여부와 관계없이 허용

        http.cors()                     // CORS on
                .and()
                .csrf().disable()           // CSRF off
                .httpBasic().disable()     // Basic Auth off
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);    // Session off

        http.oauth2Login() // OAuth2 로그인 설정
                .userInfoEndpoint()
                .userService(principalOauth2UserService) // OAuth2인증 과정에서 Authentication 생성에 필요한 OAuth2User를 반환하는 클래스 지정
                .and()
                .successHandler(oAuth2AuthenticationSuccessHandler) // 인증 성공 후처리
                .failureHandler(oAuth2AuthenticationFailureHandler); // 인증 실패 후처리

        http.logout()
                .disable();
    }

}
