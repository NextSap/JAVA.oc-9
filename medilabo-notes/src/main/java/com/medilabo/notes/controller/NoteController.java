package com.medilabo.notes.controller;

import com.medilabo.notes.model.request.NoteRequest;
import com.medilabo.notes.model.response.NoteResponse;
import com.medilabo.notes.model.response.NotebookResponse;
import com.medilabo.notes.service.NoteService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/medilabo-notes/")
public class NoteController {

    private final NoteService noteService;

    @Autowired
    public NoteController(NoteService noteService) {
        this.noteService = noteService;
    }

    @GetMapping("/notes/{userId}")
    public ResponseEntity<?> getNotebookByUserId(@PathVariable String userId) {
        NotebookResponse notebookResponse = noteService.getNotebook(userId);
        return ResponseEntity.ok(notebookResponse);
    }

    @PostMapping("/notes/{userId}")
    public ResponseEntity<?> createNoteByUserId(@PathVariable String userId, @Valid @RequestBody NoteRequest noteRequest) {
        NoteResponse noteResponse = noteService.createNote(userId, noteRequest);
        return ResponseEntity.status(201).body(noteResponse);
    }

    @PostMapping("/notebook/{userId}")
    public ResponseEntity<?> createNotebook(@PathVariable String userId) {
        NotebookResponse notebookResponse = noteService.createNotebook(userId);
        return ResponseEntity.status(201).body(notebookResponse);
    }
}
