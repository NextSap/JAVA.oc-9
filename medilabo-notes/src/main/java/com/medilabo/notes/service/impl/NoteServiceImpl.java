package com.medilabo.notes.service.impl;

import com.medilabo.notes.exception.NotebookException;
import com.medilabo.notes.mapper.NoteMapper;
import com.medilabo.notes.model.entity.Note;
import com.medilabo.notes.model.entity.Notebook;
import com.medilabo.notes.model.request.NoteRequest;
import com.medilabo.notes.model.response.NoteResponse;
import com.medilabo.notes.model.response.NotebookResponse;
import com.medilabo.notes.repository.NoteRepository;
import com.medilabo.notes.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class NoteServiceImpl implements NoteService {

    private final List<String> triggerTerms = List.of(
            "Hémoglobine A1C",
            "Microalbumine",
            "Taille",
            "Poids",
            "Fumeur",
            "Fumeuse",
            "Anormal",
            "Cholestérol",
            "Vertiges",
            "Rechute",
            "Réaction",
            "Anticorps"
    );

    private final NoteRepository noteRepository;
    private final NoteMapper noteMapper;

    @Autowired
    public NoteServiceImpl(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
        this.noteMapper = new NoteMapper();
    }

    @Override
    public NotebookResponse getNotebook(String userId) {
        Optional<Notebook> optionalNotebook = noteRepository.findById(userId);

        if (optionalNotebook.isEmpty())
            throw new NotebookException.NotebookNotFoundException("Notebook of user `" + userId + "` not found");

        Notebook notebook = optionalNotebook.get();

        sortNotes(notebook);

        return noteMapper.toNotebookResponse(notebook);
    }

    @Override
    public NoteResponse createNote(String userId, NoteRequest noteRequest) {
        Optional<Notebook> notebook = noteRepository.findById(userId);
        Note note = noteMapper.toNote(noteRequest, getTriggers(noteRequest));

        if (notebook.isEmpty())
            throw new NotebookException.NotebookNotFoundException("Notebook of user `" + userId + "` not found");

        notebook.get().add(note);
        noteRepository.save(notebook.get());
        return noteMapper.toNoteResponse(note);
    }

    @Override
    public NotebookResponse createNotebook(String userId) {
        Notebook newNoteBook = new Notebook();
        newNoteBook.setUserId(userId);
        newNoteBook.setNotes(new ArrayList<>());

        return noteMapper.toNotebookResponse(noteRepository.save(newNoteBook));
    }

    public int getTriggers(NoteRequest noteRequest) {
        int trigger = 0;

        for (String term : triggerTerms) {
            if (noteRequest.getContent().toLowerCase().contains(term.toLowerCase()))
                trigger++;
        }

        return trigger;
    }

    public void sortNotes(Notebook notebook) {
        notebook.getNotes().sort((note1, note2) -> note2.getCreatedAt().compareTo(note1.getCreatedAt()));
    }
}
