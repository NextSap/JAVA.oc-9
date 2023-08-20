package com.medilabo.diabetes.service;

import com.medilabo.diabetes.model.entity.Patient;
import com.medilabo.diabetes.model.entity.RiskLevel;

public interface RiskCalculatorService {
    RiskLevel calculateRisk(Patient patient);
}
