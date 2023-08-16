package com.medilabo.patient.exception;

import com.medilabo.patient.model.response.ErrorResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.sql.Date;

@RestControllerAdvice
public class PatientException {

    @ExceptionHandler(PatientNotFoundException.class)
    public ResponseEntity<?> handlePatientNotFoundException(PatientNotFoundException exception) {
        ErrorResponse errorResponse = ErrorResponse.builder()
                .field("id")
                .cause(exception.getMessage())
                .build();
        return ResponseEntity.status(404).body(errorResponse);
    }

    @ExceptionHandler(PatientAlreadyExistsException.class)
    public ResponseEntity<?> handlePatientAlreadyExistsException(PatientAlreadyExistsException exception) {
        ErrorResponse errorResponse = ErrorResponse.builder()
                .field("id")
                .cause(exception.getMessage())
                .build();
        return ResponseEntity.status(409).body(errorResponse);
    }

    public static class PatientNotFoundException extends RuntimeException {
        public PatientNotFoundException(String message) {
            super(message);
        }
    }

    public static class PatientAlreadyExistsException extends RuntimeException {
        public PatientAlreadyExistsException(String message) {
            super(message);
        }
    }
}
