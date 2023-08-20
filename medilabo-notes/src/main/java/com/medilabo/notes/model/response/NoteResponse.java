package com.medilabo.notes.model.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class NoteResponse {
    private String title;
    private String content;
    private String createdAt;
    private boolean trigger;
}
