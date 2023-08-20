package com.medilabo.notes.object.response;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class NotebookResponse {
    private List<NoteResponse> notes;
}
