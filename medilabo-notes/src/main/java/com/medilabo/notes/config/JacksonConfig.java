package com.medilabo.notes.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.medilabo.notes.model.request.NoteRequest;
import com.medilabo.notes.repository.NoteRepository;
import com.medilabo.notes.service.NoteService;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;

@Configuration
public class JacksonConfig implements ApplicationRunner {

    private final ObjectMapper objectMapper;
    private final NoteService noteService;
    private final NoteRepository noteRepository;

    public JacksonConfig(ObjectMapper objectMapper, NoteService noteService, NoteRepository noteRepository) {
        this.objectMapper = objectMapper;
        this.noteService = noteService;
        this.noteRepository = noteRepository;
    }

    @Value("classpath:data.json")
    private Resource data;

    @Value("${feedDatabase}")
    private boolean feedDatabase;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        if (!feedDatabase) return;

        System.out.println("Loading data...");

        Model model = objectMapper.readValue(data.getInputStream(), Model.class);

        save(model);

        System.out.println("Data loaded.");
    }

    private void save(Model model) {
        for (NoteModel note : model.notes) {
            if (noteRepository.findById(note.getId()).isEmpty())
                noteService.createNotebook(note.getId());

            NoteRequest request = NoteRequest.builder()
                    .title(note.getTitle())
                    .content(note.getContent())
                    .build();

            noteService.createNote(note.getId(), request);
        }
    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Model {
        private NoteModel[] notes;
    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class NoteModel {
        private String id;
        private String title;
        private String content;
    }
}
