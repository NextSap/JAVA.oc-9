package com.medilabo.notes.object.response;

import lombok.Builder;
import lombok.Data;

import java.util.Date;

@Data
@Builder
public class NoteResponse {
    private String title;
    private String content;
    private String createdAt;
}
