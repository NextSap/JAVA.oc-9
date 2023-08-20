package com.medilabo.notes.service.impl;

import com.medilabo.notes.exception.NotebookException;
import com.medilabo.notes.mapper.NoteMapper;
import com.medilabo.notes.object.entity.Note;
import com.medilabo.notes.object.entity.Notebook;
import com.medilabo.notes.object.request.NoteRequest;
import com.medilabo.notes.object.response.NoteResponse;
import com.medilabo.notes.object.response.NotebookResponse;
import com.medilabo.notes.repository.NoteRepository;
import com.medilabo.notes.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class NoteServiceImpl implements NoteService {
    private final NoteRepository noteRepository;
    private final NoteMapper noteMapper;

    @Autowired
    public NoteServiceImpl(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
        this.noteMapper = new NoteMapper();
    }

    @Override
    public NotebookResponse getNotebook(String userId) {
        Optional<Notebook> notebook = noteRepository.findById(userId);

        if (notebook.isEmpty())
            throw new NotebookException.NotebookNotFoundException("Notebook of user `"+userId+"` not found");

        return noteMapper.toNotebookResponse(notebook.get());
    }

    @Override
    public NoteResponse createNote(String userId, NoteRequest noteRequest) {
        Optional<Notebook> notebook = noteRepository.findById(userId);
        Note note = noteMapper.toNote(noteRequest);

        if (notebook.isPresent()) {
            notebook.get().add(note);
            noteRepository.save(notebook.get());
            return noteMapper.toNoteResponse(note);
        }

        Notebook newNoteBook = new Notebook();
        newNoteBook.setUserId(userId);
        newNoteBook.setNotes(new ArrayList<>());
        newNoteBook.add(note);
        noteRepository.save(newNoteBook);
        return noteMapper.toNoteResponse(note);
    }

    private void evaluateDiabetesRisk(Note note) {}
}
