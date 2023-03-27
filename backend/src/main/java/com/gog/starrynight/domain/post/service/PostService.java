package com.gog.starrynight.domain.post.service;

import com.gog.starrynight.common.exception.ResourceNotFoundException;
import com.gog.starrynight.common.util.DataFileUtil;
import com.gog.starrynight.domain.constellation.dto.ConstellationSimpleInfo;
import com.gog.starrynight.domain.constellation.entity.Constellation;
import com.gog.starrynight.domain.constellation.repository.ConstellationRepository;
import com.gog.starrynight.domain.constellation_history.entity.ConstellationHistory;
import com.gog.starrynight.domain.constellation_history.repository.ConstellationHistoryRepository;
import com.gog.starrynight.domain.datafile.entity.DataFile;
import com.gog.starrynight.domain.datafile.repository.DataFileRepository;
import com.gog.starrynight.domain.post.dto.PostCreateRequest;
import com.gog.starrynight.domain.post.dto.PostDetailInfo;
import com.gog.starrynight.domain.post.dto.PostInfo;
import com.gog.starrynight.domain.post.entity.Post;
import com.gog.starrynight.domain.post.repository.PostRepository;
import com.gog.starrynight.domain.post_image.dto.PostImageInfo;
import com.gog.starrynight.domain.post_image.entity.PostImage;
import com.gog.starrynight.domain.post_image.repository.PostImageRepository;
import com.gog.starrynight.domain.post_like.repository.PostLikeRepository;
import com.gog.starrynight.domain.user.dto.UserSimpleInfo;
import com.gog.starrynight.domain.user.entity.User;
import com.gog.starrynight.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class PostService {
    private final PostRepository postRepository;
    private final UserRepository userRepository;
    private final ConstellationRepository constellationRepository;
    private final ConstellationHistoryRepository constellationHistoryRepository;
    private final PostImageRepository postImageRepository;
    private final PostLikeRepository postLikeRepository;
    private final DataFileRepository dataFileRepository;
    private final DataFileUtil dataFileUtil;

    @Transactional
    public PostInfo createPost(PostCreateRequest dto, MultipartFile[] images, Long requesterId) throws IOException {
        User requester = userRepository.findById(requesterId)
                .orElseThrow(() -> new ResourceNotFoundException("존재하지 않는 회원입니다."));

        Post post = Post.builder()
                .title(dto.getTitle())
                .content(dto.getContent())
                .lat(dto.getLat())
                .lng(dto.getLng())
                .writer(requester)
                .build();

        postRepository.save(post);

        // 별자리를 기록했다면
        if (dto.getConstellations() != null) {
            List<ConstellationHistory> constellationHistories = new ArrayList<>();
            for (Long constellationId : dto.getConstellations()) {
                Constellation constellation = constellationRepository.findById(constellationId)
                        .orElseThrow(() -> new ResourceNotFoundException("해당 별자리가 존재하지 않습니다."));

                ConstellationHistory constellationHistory = ConstellationHistory.builder()
                        .lat(dto.getLat())
                        .lng(dto.getLng())
                        .user(requester)
                        .post(post)
                        .constellation(constellation)
                        .build();

                constellationHistories.add(constellationHistory);
            }

            constellationHistoryRepository.saveAll(constellationHistories);
            post.setConstellationHistories(constellationHistories);
        }

        // 이미지가 존재한다면
        if (images != null) {
            List<DataFile> dataFiles = new ArrayList<>();
            List<PostImage> postImages = new ArrayList<>();
            for (MultipartFile image : images) {
                DataFile dataFile = dataFileUtil.storeFile(image);

                PostImage postImage = PostImage.builder()
                        .dataFile(dataFile)
                        .post(post)
                        .build();

                dataFiles.add(dataFile);
                postImages.add(postImage);
            }

            dataFileRepository.saveAll(dataFiles);

            postImageRepository.saveAll(postImages);
            post.setPostImages(postImages);
        }

        return new PostInfo(post);
    }

    public PostDetailInfo getPostDetailInfo(Long postId, Long requesterId) {
        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new ResourceNotFoundException("존재하지 않는 게시물입니다."));

        UserSimpleInfo writer = new UserSimpleInfo(post.getWriter());
        boolean permission = (requesterId == writer.getId());
        boolean postLikePossible = (requesterId != null);
        boolean postLiked = postLikeRepository.existsPostLikeByPostIdAndUserId(postId, requesterId);

        List<PostImageInfo> images = post.getPostImages().stream()
                .map(PostImageInfo::new)
                .collect(Collectors.toList());

        List<ConstellationSimpleInfo> constellationTags = post.getConstellationHistories().stream()
                .map(constellationHistory -> {
                    Constellation constellation = constellationHistory.getConstellation();
                    return new ConstellationSimpleInfo(constellation);
                })
                .collect(Collectors.toList());

        int postLikeCount = postLikeRepository.getTotalPostLikeCountByPostId(postId);

        return new PostDetailInfo(post, writer, images, constellationTags, postLikeCount, postLikePossible, postLiked, permission);
    }
}
