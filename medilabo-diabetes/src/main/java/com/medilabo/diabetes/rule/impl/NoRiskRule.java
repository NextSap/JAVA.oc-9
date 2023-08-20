package com.medilabo.diabetes.rule.impl;

import com.medilabo.diabetes.model.entity.Patient;
import com.medilabo.diabetes.model.entity.RiskLevel;
import com.medilabo.diabetes.rule.RiskCalculationRule;

public class NoRiskRule implements RiskCalculationRule {
    @Override
    public RiskLevel calculateRisk(Patient patient) {
        return patient.getTrigger() == 0 ? RiskLevel.NONE : null;
    }
}
