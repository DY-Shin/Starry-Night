package com.gog.starrynight.domain.post_image.entity;

import com.gog.starrynight.common.entity.BaseTimeEntity;
import com.gog.starrynight.domain.datafile.entity.DataFile;
import com.gog.starrynight.domain.post.entity.Post;
import lombok.*;

import javax.persistence.*;

@Entity
@Builder
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class PostImage extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_id")
    private Post post;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "data_file_id")
    private DataFile dataFile;

    public void setPost(Post post) {
        if (this.post != null) {
            this.post.getPostImages().remove(this);
        }

        this.post = post;
        this.post.getPostImages().add(this);
    }
}
