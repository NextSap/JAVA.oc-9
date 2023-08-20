package com.medilabo.diabetes.rule.impl;

import com.medilabo.diabetes.model.entity.Patient;
import com.medilabo.diabetes.model.entity.RiskLevel;
import com.medilabo.diabetes.rule.RiskCalculationRule;

public class InDangerRiskRule implements RiskCalculationRule {
    @Override
    public RiskLevel calculateRisk(Patient patient) {
        switch (patient.getGender()) {
            case MALE -> {
                return patient.getAge() < 30 && patient.getTrigger() == 3 ? RiskLevel.IN_DANGER : null;
            }
            case FEMALE -> {
                return patient.getAge() < 30 && patient.getTrigger() == 4 ? RiskLevel.IN_DANGER : null;
            }
        }

        return patient.getAge() >= 30 && patient.triggerBetween(6, 7) ? RiskLevel.IN_DANGER : null;
    }
}
