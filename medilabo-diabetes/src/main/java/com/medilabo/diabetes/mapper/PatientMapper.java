package com.medilabo.diabetes.mapper;

import com.medilabo.diabetes.model.entity.Patient;
import com.medilabo.diabetes.model.shared.NoteShared;
import com.medilabo.diabetes.model.shared.NotebookShared;
import com.medilabo.diabetes.model.shared.PatientShared;
import org.joda.time.LocalDate;
import org.joda.time.Years;

public class PatientMapper {

    public Patient toPatient(PatientShared patientShared, NotebookShared notebookShared) {
        Patient patient = new Patient();

        LocalDate birthDate = new LocalDate(patientShared.getBirthdate());
        LocalDate now = new LocalDate();

        patient.setAge(Years.yearsBetween(birthDate, now).getYears());
        patient.setGender(patientShared.getGender());
        int trigger = notebookShared.getNotes().stream().filter(NoteShared::isTrigger).mapToInt(note -> 1).sum();
        patient.setTrigger(trigger);

        return patient;
    }
}