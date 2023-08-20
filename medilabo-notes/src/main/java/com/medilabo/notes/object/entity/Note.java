package com.medilabo.notes.object.entity;

import lombok.Builder;
import lombok.Data;

import java.util.Date;

@Data
@Builder
public class Note {
    private String title;
    private String content;
    private String createdAt;
}
