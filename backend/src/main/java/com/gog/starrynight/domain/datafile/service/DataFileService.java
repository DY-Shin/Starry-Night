package com.gog.starrynight.domain.datafile.service;

import com.gog.starrynight.domain.datafile.repository.DataFileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class DataFileService {
    private final DataFileRepository dataFileRepository;
}
