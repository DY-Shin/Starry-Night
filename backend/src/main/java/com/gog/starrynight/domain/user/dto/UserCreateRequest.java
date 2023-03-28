package com.gog.starrynight.domain.user.dto;

import lombok.*;

@Builder
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UserCreateRequest {
    private String loginId;
    private String password;
    private String name;
    private String provider;
    private String profileImageUrl;
}
