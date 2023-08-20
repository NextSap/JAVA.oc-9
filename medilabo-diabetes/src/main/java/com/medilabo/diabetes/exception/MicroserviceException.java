package com.medilabo.diabetes.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class MicroserviceException {

    @ExceptionHandler(FetchingException.class)
    public ResponseEntity<?> handleFetchingException(FetchingException e) {
        return ResponseEntity.status(500).body(e.getMessage());
    }

    public static class FetchingException extends RuntimeException {
        public FetchingException(String message) {
            super(message);
        }
    }
}
