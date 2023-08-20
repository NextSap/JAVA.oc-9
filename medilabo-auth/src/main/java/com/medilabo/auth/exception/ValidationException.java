package com.medilabo.auth.exception;

import com.medilabo.auth.model.response.ErrorResponse;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.stream.Collectors;

@RestControllerAdvice
public class ValidationException {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, List<ErrorResponse>>> handleValidationErrors(MethodArgumentNotValidException ex) {
        List<ErrorResponse> errors = ex.getAllErrors()
                .stream().map(error -> {
                    String[] splitViolation = Objects.requireNonNull(error.getDefaultMessage()).split(":");
                    return ErrorResponse.builder().field(splitViolation[0]).cause(splitViolation[1]).build();
                }).collect(Collectors.toList());


        return new ResponseEntity<>(getErrorsMap(errors), new HttpHeaders(), HttpStatus.BAD_REQUEST);
    }

    private Map<String, List<ErrorResponse>> getErrorsMap(List<ErrorResponse> errors) {
        Map<String, List<ErrorResponse>> errorResponse = new HashMap<>();
        errorResponse.put("validationErrors", errors);
        return errorResponse;
    }
}
