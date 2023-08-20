package com.medilabo.notes.object.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "notebook")
public class Notebook {
    @Id
    private String userId;
    private List<Note> notes;

    public void add(Note... note) {
        notes.addAll(List.of(note));
    }
}
