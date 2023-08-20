package com.medilabo.diabetes.rule.impl;

import com.medilabo.diabetes.model.entity.Patient;
import com.medilabo.diabetes.model.entity.RiskLevel;
import com.medilabo.diabetes.rule.RiskCalculationRule;

public class EarlyOnsetRiskRule implements RiskCalculationRule {
    @Override
    public RiskLevel calculateRisk(Patient patient) {
        switch (patient.getGender()) {
            case MALE -> {
                return patient.getAge() < 30 && patient.getTrigger() >= 5 ? RiskLevel.EARLY_ONSET : null;
            }
            case FEMALE -> {
                return patient.getAge() < 30 && patient.getTrigger() >= 7 ? RiskLevel.EARLY_ONSET : null;
            }
        }

        return patient.getAge() >= 30 && patient.getTrigger() >= 8 ? RiskLevel.EARLY_ONSET : null;
    }
}
