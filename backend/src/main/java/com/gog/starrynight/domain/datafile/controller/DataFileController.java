package com.gog.starrynight.domain.datafile.controller;

import com.gog.starrynight.domain.datafile.service.DataFileService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "데이터파일 관리")
@RestController
@RequiredArgsConstructor
public class DataFileController {
    private final DataFileService dataFileService;
}
