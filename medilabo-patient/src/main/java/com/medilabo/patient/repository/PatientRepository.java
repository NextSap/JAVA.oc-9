package com.medilabo.patient.repository;

import com.medilabo.patient.model.entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PatientRepository extends JpaRepository<Patient, String> {

    List<Patient> findByFirstNameAndLastName(String firstName, String lastName);
}
