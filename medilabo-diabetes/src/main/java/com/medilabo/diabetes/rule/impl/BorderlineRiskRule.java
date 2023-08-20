package com.medilabo.diabetes.rule.impl;

import com.medilabo.diabetes.model.entity.Patient;
import com.medilabo.diabetes.model.entity.RiskLevel;
import com.medilabo.diabetes.rule.RiskCalculationRule;

public class BorderlineRiskRule implements RiskCalculationRule {
    @Override
    public RiskLevel calculateRisk(Patient patient) {
        return patient.getAge() > 30 && patient.triggerBetween(2, 5) ? RiskLevel.BORDERLINE : null;
    }
}
