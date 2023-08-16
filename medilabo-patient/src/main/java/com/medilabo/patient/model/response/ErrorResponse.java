package com.medilabo.patient.model.response;

import lombok.Builder;
import lombok.Data;

import java.sql.Timestamp;

@Data
@Builder
public class ErrorResponse {
    private String field;
    private String cause;
}
