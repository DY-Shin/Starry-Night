package com.gog.starrynight.domain.user.dto;

import com.gog.starrynight.common.util.UriUtil;
import com.gog.starrynight.domain.datafile.entity.DataFile;
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

        DataFile profileImage = user.getProfileImage();
        String path = null;
        if (profileImage != null) {
            path = "/datafiles/" + profileImage.getId().toString();
        } else {
            path = "/datafiles/1";
        }
        this.profileImageUrl = UriUtil.buildUri(path);
    }
}
