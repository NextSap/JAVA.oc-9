package com.medilabo.notes.model.entity;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Note {
    private String title;
    private String content;
    private String createdAt;
    private int trigger;
}
