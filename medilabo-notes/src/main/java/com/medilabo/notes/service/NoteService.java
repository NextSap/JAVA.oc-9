package com.medilabo.notes.service;

import com.medilabo.notes.model.request.NoteRequest;
import com.medilabo.notes.model.response.NoteResponse;
import com.medilabo.notes.model.response.NotebookResponse;

public interface NoteService {

    NotebookResponse getNotebook(String userId);

    NoteResponse createNote(String userId, NoteRequest noteRequest);

    NotebookResponse createNotebook(String userId);
}
