package com.medilabo.patient.repository;

import com.medilabo.patient.model.entity.Patient;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface PatientRepository extends MongoRepository<Patient, String> {

    List<Patient> findByFirstNameAndLastName(String firstName, String lastName);
}
