package com.medilabo.notes.object.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ErrorResponse {
    private String field;
    private String cause;
}
