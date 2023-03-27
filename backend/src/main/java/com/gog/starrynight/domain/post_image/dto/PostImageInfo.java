package com.gog.starrynight.domain.post_image.dto;

import com.gog.starrynight.common.util.UriUtil;
import com.gog.starrynight.domain.post_image.entity.PostImage;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class PostImageInfo {
    private Long id;
    private String url;

    public PostImageInfo(PostImage postImage) {
        this.id = postImage.getId();
        Long dataFileId = postImage.getDataFile().getId();
        this.url = UriUtil.buildUri("/datafiles/" + dataFileId.toString());
    }
}
