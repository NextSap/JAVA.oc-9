package com.medilabo.notes.model.response;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class NotebookResponse {
    private List<NoteResponse> notes;
}
