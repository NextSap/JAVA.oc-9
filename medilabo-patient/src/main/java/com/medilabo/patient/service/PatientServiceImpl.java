package com.medilabo.patient.service;

import com.medilabo.patient.exception.PatientException;
import com.medilabo.patient.mapper.PatientMapper;
import com.medilabo.patient.model.entity.Patient;
import com.medilabo.patient.model.request.PatientRequest;
import com.medilabo.patient.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class PatientServiceImpl implements PatientService {

    private final PatientRepository patientRepository;
    private final PatientMapper patientMapper;

    @Autowired
    public PatientServiceImpl(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
        this.patientMapper = new PatientMapper();
    }

    @Override
    public List<Patient> findAll() {
        return patientRepository.findAll();
    }

    @Override
    public Patient findById(String id) {
        return patientRepository.findById(id).orElseThrow(() -> new PatientException.PatientNotFoundException("Patient with id `" + id + "` not found"));
    }

    @Override
    public Patient save(PatientRequest patientRequest) {
        Patient patient = patientMapper.toPatient(patientRequest);
        return patientRepository.insert(patient);
    }

    @Override
    public Patient update(String id, PatientRequest patientRequest) {
        patientRepository.findById(id).orElseThrow(() -> new PatientException.PatientNotFoundException("Patient with id `" + id + "` not found"));
        Patient patient = patientMapper.toPatient(id, patientRequest);
        return patientRepository.save(patient);
    }

    @Override
    public void deleteById(String id) {
        patientRepository.deleteById(id);
    }
}
