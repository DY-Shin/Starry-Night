package com.gog.starrynight.domain.user.dto;

import com.gog.starrynight.domain.user.entity.User;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@Data
@NoArgsConstructor
public class UserSimpleInfo {
    private Long id;
    private String name;
    private String profileImageUrl;

    public UserSimpleInfo(User user) {
        this.id = user.getId();
        this.name = user.getName();
        this.profileImageUrl = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/datafiles/")
                .path(user.getProfileImage().getId().toString())
                .toUriString();
    }
}
