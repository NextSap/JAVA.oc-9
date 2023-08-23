package com.medilabo.diabetes.model.shared;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class NoteShared {
    private String title;
    private String content;
    private String createdAt;
    private int trigger;
}
