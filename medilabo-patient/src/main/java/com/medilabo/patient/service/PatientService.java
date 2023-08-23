package com.medilabo.patient.service;

import com.medilabo.patient.model.entity.Patient;
import com.medilabo.patient.model.request.PatientRequest;

import java.util.List;
import java.util.UUID;

public interface PatientService {

    List<Patient> findAll();

    Patient findById(Long id);

    Patient save(PatientRequest patient);

    Patient update(Long id, PatientRequest patient);

    void deleteById(Long id);
}
