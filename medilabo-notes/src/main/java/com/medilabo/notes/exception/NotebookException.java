package com.medilabo.notes.exception;

import com.medilabo.notes.object.response.ErrorResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class NotebookException {

    @ExceptionHandler(NotebookNotFoundException.class)
    public ResponseEntity<?> notebookNotFoundHandler(NotebookNotFoundException ex) {
        ErrorResponse errorResponse = ErrorResponse.builder()
                .field("userId")
                .cause(ex.getMessage())
                .build();
        return ResponseEntity.status(404).body(errorResponse);
    }

    public static class NotebookNotFoundException extends RuntimeException {
        public NotebookNotFoundException(String message) {
            super(message);
        }
    }
}
