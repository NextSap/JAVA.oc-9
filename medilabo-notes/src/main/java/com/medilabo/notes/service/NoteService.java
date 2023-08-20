package com.medilabo.notes.service;

import com.medilabo.notes.object.request.NoteRequest;
import com.medilabo.notes.object.response.NoteResponse;
import com.medilabo.notes.object.response.NotebookResponse;

public interface NoteService {

    NotebookResponse getNotebook(String userId);

    NoteResponse createNote(String userId, NoteRequest noteRequest);
}
