package com.medilabo.notes.repository;

import com.medilabo.notes.object.entity.Notebook;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NoteRepository extends MongoRepository<Notebook, String> {
}
