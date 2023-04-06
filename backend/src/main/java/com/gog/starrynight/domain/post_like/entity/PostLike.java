package com.gog.starrynight.domain.post_like.entity;

import com.gog.starrynight.common.entity.BaseTimeEntity;
import com.gog.starrynight.domain.post.entity.Post;
import com.gog.starrynight.domain.user.entity.User;
import lombok.*;

import javax.persistence.*;

@Entity
@Builder
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class PostLike extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_id", nullable = false)
    private Post post;

    public void setUser(User user) {
        if (this.user != null) {
            this.user.getPostLikes().remove(this);
        }

        this.user = user;
        this.user.getPostLikes().add(this);
    }

    public void setPost(Post post) {
        if (this.post != null) {
            this.post.getPostLikes().remove(this);
        }

        this.post = post;
        this.post.getPostLikes().add(this);
    }
}
