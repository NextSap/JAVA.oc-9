package com.medilabo.diabetes.service;

import com.medilabo.diabetes.model.entity.Patient;
import com.medilabo.diabetes.model.entity.RiskLevel;

public interface DiabetesService {

    Patient getPatient(String patientId, String token);

    RiskLevel getRisk(String patientId, String token);

}
