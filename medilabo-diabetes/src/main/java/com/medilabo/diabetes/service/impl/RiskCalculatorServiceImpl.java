package com.medilabo.diabetes.service.impl;

import com.medilabo.diabetes.model.entity.Patient;
import com.medilabo.diabetes.model.entity.RiskLevel;
import com.medilabo.diabetes.rule.RiskCalculationRuleHandler;
import com.medilabo.diabetes.service.RiskCalculatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RiskCalculatorServiceImpl implements RiskCalculatorService {

    private RiskCalculationRuleHandler ruleHandler;

    @Autowired
    public RiskCalculatorServiceImpl(RiskCalculationRuleHandler ruleHandler) {
        this.ruleHandler = ruleHandler;
    }

    @Override
    public RiskLevel calculateRisk(Patient patient) {
        return ruleHandler.calculateRisk(patient);
    }
}
