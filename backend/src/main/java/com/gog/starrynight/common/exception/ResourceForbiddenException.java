package com.gog.starrynight.common.exception;

import com.gog.starrynight.common.dto.ApiResponse;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.FORBIDDEN)
public class ResourceForbiddenException extends RuntimeException {

    private ApiResponse apiResponse;

    public ResourceForbiddenException(String message) {
        super();
        apiResponse = new ApiResponse(false, message);
    }

    public ApiResponse getApiResponse() {
        return apiResponse;
    }

}