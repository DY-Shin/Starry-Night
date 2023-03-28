package com.gog.starrynight.domain.post.service;

import com.gog.starrynight.common.dto.AreaRange;
import com.gog.starrynight.common.dto.PagedResult;
import com.gog.starrynight.common.exception.ResourceForbiddenException;
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
import com.gog.starrynight.domain.post.dto.PostSearchRequest;
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
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
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

        return convertPostToPostDetailInfo(post, requesterId);
    }

    public PagedResult<PostDetailInfo> searchPost(PostSearchRequest dto, Long requesterId) {
        Sort.Direction direction = dto.getDirection().equals("asc") ? Sort.Direction.ASC : Sort.Direction.DESC;
        Sort sort = Sort.by(direction, dto.getSort());
        Pageable pageable = PageRequest.of(dto.getPage(), dto.getSize(), sort);

        boolean searchByTitle = (dto.getTitle() != null);
        boolean searchByContent = (dto.getContent() != null);
        boolean searchByLocation = (dto.getPointA() != null && dto.getPointB() != null && dto.getPointA().length == 2 && dto.getPointB().length == 2);

        Page<Post> queryResult = null;

        // 위치 데이터 포함
        if (searchByLocation) {
            AreaRange areaRange = calculateAreaRange(dto.getPointA(), dto.getPointB());

            // 제목 및 내용 포함
            if (searchByTitle && searchByContent) {
                queryResult = postRepository.findAllByTitleContainingAndContentContainingAndLatBetweenAndLngBetween(pageable, dto.getTitle(), dto.getContent(), areaRange.getMinLat(), areaRange.getMaxLat(), areaRange.getMinLng(), areaRange.getMaxLng());
            } else if (searchByTitle) { // 제목 포함
                queryResult = postRepository.findAllByTitleContainingAndLatBetweenAndLngBetween(pageable, dto.getTitle(), areaRange.getMinLat(), areaRange.getMaxLat(), areaRange.getMinLng(), areaRange.getMaxLng());
            } else if (searchByContent) { // 내용 포함
                queryResult = postRepository.findAllByContentContainingAndLatBetweenAndLngBetween(pageable, dto.getContent(), areaRange.getMinLat(), areaRange.getMaxLat(), areaRange.getMinLng(), areaRange.getMaxLng());
            } else {
                queryResult = postRepository.findAllByLatBetweenAndLngBetween(pageable, areaRange.getMinLat(), areaRange.getMaxLat(), areaRange.getMinLng(), areaRange.getMaxLng());
            }
        } else { // 위치 데이터 미포함
            // 제목 및 내용 포함
            if (searchByTitle && searchByContent) {
                queryResult = postRepository.findAllByTitleContainingAndContentContaining(pageable, dto.getTitle(), dto.getContent());
            } else if (searchByTitle) { // 제목 포함
                queryResult = postRepository.findAllByTitleContaining(pageable, dto.getTitle());
            } else if (searchByContent) { // 내용 포함
                queryResult = postRepository.findAllByContentContaining(pageable, dto.getContent());
            } else {
                queryResult = postRepository.findAll(pageable);
            }
        }

        Page<PostDetailInfo> processedResult = queryResult.map(post -> convertPostToPostDetailInfo(post, requesterId));

        return new PagedResult<>(processedResult);
    }

    @Transactional
    public void deletePost(Long postId, Long requesterId) {
        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new ResourceNotFoundException("존재하지 않는 게시물입니다."));

        if (!post.getWriter().getId().equals(requesterId)) {
            throw new ResourceForbiddenException("자신이 작성한 게시물만 삭제할 수 있습니다.");
        }

        List<PostImage> postImages = post.getPostImages();

        for (PostImage postImage : postImages) {
            DataFile dataFile = postImage.getDataFile();
            String filePath = dataFileUtil.getFullPath(dataFile.getStoredFileName());
            dataFileUtil.deleteFile(filePath);
        }

        List<ConstellationHistory> constellationHistories = post.getConstellationHistories();
        for (int i = constellationHistories.size() - 1; i >= 0; i--) {
            constellationHistories.get(i).setPost(null);
        }

        postRepository.delete(post);
    }

    public PostDetailInfo convertPostToPostDetailInfo(Post post, Long requesterId) {
        UserSimpleInfo writer = new UserSimpleInfo(post.getWriter());
        boolean permission = (writer.getId().equals(requesterId));
        boolean postLikePossible = (requesterId != null);
        boolean postLiked = postLikeRepository.existsPostLikeByPostIdAndUserId(post.getId(), requesterId);

        List<PostImageInfo> images = post.getPostImages().stream()
                .map(PostImageInfo::new)
                .collect(Collectors.toList());

        List<ConstellationSimpleInfo> constellationTags = post.getConstellationHistories().stream()
                .map(constellationHistory -> {
                    Constellation constellation = constellationHistory.getConstellation();
                    return new ConstellationSimpleInfo(constellation);
                })
                .collect(Collectors.toList());

        int postLikeCount = postLikeRepository.getTotalPostLikeCountByPostId(post.getId());

        return new PostDetailInfo(post, writer, images, constellationTags, postLikeCount, postLikePossible, postLiked, permission);
    }

    public AreaRange calculateAreaRange(double[] pointA, double[] pointB) {
        double minLat = 0;
        double maxLat = 0;
        double minLng = 0;
        double maxLng = 0;

        if (pointA[0] > pointB[0]) {
            minLat = pointB[0];
            maxLat = pointA[0];
        } else {
            minLat = pointA[0];
            maxLat = pointB[0];
        }

        if (pointA[1] > pointB[1]) {
            minLng = pointB[1];
            maxLng = pointA[1];
        } else {
            minLng = pointA[1];
            maxLng = pointB[1];
        }

        return new AreaRange(minLat, maxLat, minLng, maxLng);
    }

}
