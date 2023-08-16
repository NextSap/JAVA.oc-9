package com.medilabo.patient.mapper;

import com.medilabo.patient.model.entity.Patient;
import com.medilabo.patient.model.request.PatientRequest;

import java.util.Date;

public class PatientMapper {

    public Patient toPatient(String id, PatientRequest patientRequest) {
        Patient patient = toPatient(patientRequest);
        patient.setId(id);
        return patient;
    }

    public Patient toPatient(PatientRequest patientRequest) {
        Patient patient = new Patient();
        patient.setFirstName(patientRequest.getFirstName());
        patient.setLastName(patientRequest.getLastName());
        patient.setBirthdate(new Date());
        patient.setGender(patientRequest.getGender());
        patient.setAddress(patientRequest.getAddress());
        patient.setPhoneNumber(patientRequest.getPhoneNumber());
        return patient;
    }
}
