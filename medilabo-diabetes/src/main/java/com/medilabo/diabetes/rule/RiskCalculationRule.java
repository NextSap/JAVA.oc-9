package com.medilabo.diabetes.rule;

import com.medilabo.diabetes.model.entity.Patient;
import com.medilabo.diabetes.model.entity.RiskLevel;

public interface RiskCalculationRule {
    RiskLevel calculateRisk(Patient patient);
}
