package com.medilabo.diabetes.exception;

import com.medilabo.diabetes.model.response.ErrorResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class MicroserviceException {

    @ExceptionHandler(FetchingException.class)
    public ResponseEntity<?> handleFetchingException(FetchingException e) {
        ErrorResponse errorResponse = ErrorResponse.builder().field("Diabetes Risk").cause(e.getMessage()).build();
        return ResponseEntity.status(500).body(errorResponse);
    }

    public static class FetchingException extends RuntimeException {
        public FetchingException(String message) {
            super(message);
        }
    }
}
