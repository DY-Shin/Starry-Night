package com.gog.starrynight.domain.datafile.controller;

import com.gog.starrynight.common.dto.ApiResponse;
import com.gog.starrynight.domain.datafile.dto.DataFileInfo;
import com.gog.starrynight.domain.datafile.dto.DataFileResource;
import com.gog.starrynight.domain.datafile.service.DataFileService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;

@Tag(name = "파일 관리")
@RestController
@RequiredArgsConstructor
public class DataFileController {
    private final DataFileService dataFileService;

    @Operation(summary = "파일 등록")
    @PostMapping("/datafiles")
    public ResponseEntity<ApiResponse<DataFileInfo>> saveDataFile(@RequestParam("file") MultipartFile multipartFile) throws IOException {
        DataFileInfo dataFileInfo = dataFileService.saveDataFile(multipartFile);
        ApiResponse<DataFileInfo> result = new ApiResponse<>(true, "파일 등록 성공", dataFileInfo);
        return new ResponseEntity<>(result, HttpStatus.CREATED);
    }

    @Operation(summary = "파일 조회")
    @GetMapping("/datafiles/{dataFileId}")
    public ResponseEntity<Resource> getDataFile(@PathVariable Long dataFileId) throws MalformedURLException {
        DataFileResource dataFileResource = dataFileService.getDataFileResource(dataFileId);

        String contentDisposition = "inline; filename=\"" + dataFileResource.getEncodedFileName() + "\"";

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(dataFileResource.getContentType()))
                .header(HttpHeaders.CONTENT_DISPOSITION, contentDisposition)
                .body(dataFileResource);
    }
}
