package com.medilabo.notes.model.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class NoteRequest {
    @NotNull(message = "title:Null") @NotBlank(message = "title:Blank")
    private String title;
    @NotNull(message = "content:Null") @NotBlank(message = "content:Blank")
    private String content;
}
