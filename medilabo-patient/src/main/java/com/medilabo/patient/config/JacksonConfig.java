package com.medilabo.patient.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.medilabo.patient.model.entity.Gender;
import com.medilabo.patient.model.entity.Patient;
import com.medilabo.patient.repository.PatientRepository;
import org.springframework.core.io.Resource;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Configuration;


import java.util.ArrayList;
import java.util.List;

@Configuration
public class JacksonConfig implements ApplicationRunner {

    private final ObjectMapper objectMapper;
    private final PatientRepository patientRepository;

    public JacksonConfig(ObjectMapper objectMapper, PatientRepository patientRepository) {
        this.objectMapper = objectMapper;
        this.patientRepository = patientRepository;
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

        List<Patient> patients = map(model);

        patientRepository.saveAll(patients);

        System.out.println("Data loaded.");
    }

    private List<Patient> map(Model model) {
        List<Patient> patients = new ArrayList<>();
        for (int i = 0; i < model.patients.length; i++) {
            PatientModel patientModel = model.patients[i];
            if (patientRepository.findByFirstNameAndLastName(patientModel.getFirstName(), patientModel.getLastName()).size() > 0)
                continue;
            Patient patient = new Patient();
            patient.setId(String.valueOf(i + 1));
            patient.setFirstName(patientModel.getFirstName());
            patient.setLastName(patientModel.getLastName());
            patient.setBirthdate(patientModel.getBirthdate());
            patient.setGender(Gender.valueOf(patientModel.getGender()));
            patient.setAddress(patientModel.getAddress());
            patient.setPhoneNumber(patientModel.getPhoneNumber());
            patients.add(patient);
        }


        return patients;
    }


    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Model {
        private PatientModel[] patients;
    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class PatientModel {
        private String firstName;
        private String lastName;
        private String birthdate;
        private String gender;
        private String address;
        private String phoneNumber;
    }
}
