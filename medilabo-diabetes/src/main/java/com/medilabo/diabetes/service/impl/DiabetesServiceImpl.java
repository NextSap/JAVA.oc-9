package com.medilabo.diabetes.service.impl;

import com.medilabo.diabetes.exception.MicroserviceException;
import com.medilabo.diabetes.mapper.PatientMapper;
import com.medilabo.diabetes.model.entity.Patient;
import com.medilabo.diabetes.model.entity.RiskLevel;
import com.medilabo.diabetes.model.shared.NotebookShared;
import com.medilabo.diabetes.model.shared.PatientShared;
import com.medilabo.diabetes.service.DiabetesService;
import com.medilabo.diabetes.service.RiskCalculatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Optional;

@Service
public class DiabetesServiceImpl implements DiabetesService {

    private final WebClient.Builder webClientBuilder;
    private final RiskCalculatorService riskCalculatorService;

    @Autowired
    public DiabetesServiceImpl(WebClient.Builder webClientBuilder, RiskCalculatorService riskCalculatorService) {
        this.webClientBuilder = webClientBuilder;
        this.riskCalculatorService = riskCalculatorService;
    }

    @Override
    public Patient getPatient(String patientId, String token) {
        return fetchPatient(patientId, token);
    }

    @Override
    public RiskLevel getRisk(String patientId, String token) {
        return riskCalculatorService.calculateRisk(getPatient(patientId, token));
    }

    public Patient fetchPatient(String patientId, String token) {
        Optional<PatientShared> patientShared = webClientBuilder.build().get().uri("http://localhost:9005/medilabo-patient/patient/" + patientId)
                .header("Authorization", token).retrieve().bodyToMono(PatientShared.class).blockOptional();

        Optional<NotebookShared> notebookShared = webClientBuilder.build().get().uri("http://localhost:9005/medilabo-notes/notes/" + patientId)
                .header("Authorization", token).retrieve().bodyToMono(NotebookShared.class).blockOptional();

        if (patientShared.isEmpty() || notebookShared.isEmpty())
            throw new MicroserviceException.FetchingException("Error fetching patient or notebook");

        return new PatientMapper().toPatient(patientShared.get(), notebookShared.get());
    }
}
