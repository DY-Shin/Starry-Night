package com.gog.starrynight.domain.datafile.service;

import com.gog.starrynight.common.exception.ResourceNotFoundException;
import com.gog.starrynight.common.util.DataFileUtil;
import com.gog.starrynight.domain.datafile.dto.DataFileInfo;
import com.gog.starrynight.domain.datafile.dto.DataFileResource;
import com.gog.starrynight.domain.datafile.entity.DataFile;
import com.gog.starrynight.domain.datafile.repository.DataFileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.util.UriUtils;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.charset.StandardCharsets;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class DataFileService {
    private final DataFileRepository dataFileRepository;
    private final DataFileUtil dataFileUtil;

    @Transactional
    public DataFileInfo saveDataFile(MultipartFile multipartFile) throws IOException {
        DataFile dataFile = dataFileUtil.storeFile(multipartFile);

        dataFileRepository.save(dataFile);

        return new DataFileInfo(dataFile);
    }

    public DataFileResource getDataFileResource(Long id) throws MalformedURLException {
        DataFile dataFile = dataFileRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("존재하지 않는 파일 입니다."));

        String storeFileName = dataFile.getStoredFileName();
        String path = "file:" + dataFileUtil.getFullPath(storeFileName);
        String encodedFileName = UriUtils.encode(dataFile.getOriginalFileName(), StandardCharsets.UTF_8);
        String contentType = dataFile.getContentType();

        DataFileResource dataFileResource = new DataFileResource(path, contentType, encodedFileName);

        return dataFileResource;
    }
}
