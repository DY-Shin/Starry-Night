package com.gog.starrynight.domain.datafile.service;

import com.gog.starrynight.common.util.DataFileUtil;
import com.gog.starrynight.domain.datafile.dto.DataFileInfo;
import com.gog.starrynight.domain.datafile.entity.DataFile;
import com.gog.starrynight.domain.datafile.repository.DataFileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

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
}
