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
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Optional;

@Service
public class DiabetesServiceImpl implements DiabetesService {

    private final WebClient.Builder webClientBuilder;
    private final RiskCalculatorService riskCalculatorService;

    @Value("${gateway}")
    private String gateway;

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
        Optional<PatientShared> patientShared = webClientBuilder.build().get().uri(gateway + "medilabo-patient/patient/" + patientId)
                .header("Authorization", token).retrieve().bodyToMono(PatientShared.class).blockOptional();

        Optional<NotebookShared> notebookShared = webClientBuilder.build().get().uri(gateway + "medilabo-notes/notes/" + patientId)
                .header("Authorization", token).retrieve().bodyToMono(NotebookShared.class).blockOptional();

        if (patientShared.isEmpty())
            throw new MicroserviceException.FetchingException("Error fetching patient");

        if (notebookShared.isEmpty())
            notebookShared = webClientBuilder.build().post().uri(gateway + "medilabo-notes/notebook/" + patientId)
                    .header("Authorization", token).retrieve().bodyToMono(NotebookShared.class).blockOptional();

        if (notebookShared.isEmpty())
            throw new MicroserviceException.FetchingException("Error fetching notebook");

        return new PatientMapper().toPatient(patientShared.get(), notebookShared.get());
    }
}
