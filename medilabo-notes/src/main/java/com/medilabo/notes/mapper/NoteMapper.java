package com.medilabo.notes.mapper;

import com.medilabo.notes.object.entity.Note;
import com.medilabo.notes.object.entity.Notebook;
import com.medilabo.notes.object.request.NoteRequest;
import com.medilabo.notes.object.response.NoteResponse;
import com.medilabo.notes.object.response.NotebookResponse;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

public class NoteMapper {

    public NotebookResponse toNotebookResponse(Notebook notebook) {
        return NotebookResponse.builder()
                .notes(toNoteReponseList(notebook.getNotes()))
                .build();
    }

    public NoteResponse toNoteResponse(Note note){
        return NoteResponse.builder()
                .title(note.getTitle())
                .content(note.getContent())
                .createdAt(note.getCreatedAt())
                .build();
    }

    public List<NoteResponse> toNoteReponseList(List<Note> notes){
        return notes.stream()
                .map(this::toNoteResponse)
                .collect(Collectors.toList());
    }

    public Note toNote(NoteRequest noteRequest) {
        return Note.builder()
                .title(noteRequest.getTitle())
                .content(noteRequest.getContent())
                .createdAt(LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd/MM/yyyy - HH:mm:ss")))
                .build();
    }
}
