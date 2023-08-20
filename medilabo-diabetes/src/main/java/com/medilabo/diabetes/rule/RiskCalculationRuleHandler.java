package com.medilabo.diabetes.rule;

import com.medilabo.diabetes.model.entity.Patient;
import com.medilabo.diabetes.model.entity.RiskLevel;
import com.medilabo.diabetes.rule.impl.BorderlineRiskRule;
import com.medilabo.diabetes.rule.impl.EarlyOnsetRiskRule;
import com.medilabo.diabetes.rule.impl.InDangerRiskRule;
import com.medilabo.diabetes.rule.impl.NoRiskRule;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class RiskCalculationRuleHandler {

    private final List<RiskCalculationRule> rules;

    public RiskCalculationRuleHandler() {
        this.rules = new ArrayList<>();
        rules.add(new NoRiskRule());
        rules.add(new BorderlineRiskRule());
        rules.add(new InDangerRiskRule());
        rules.add(new EarlyOnsetRiskRule());
    }

    public RiskLevel calculateRisk(Patient patient) {
        for (RiskCalculationRule rule : rules) {
            RiskLevel riskLevel = rule.calculateRisk(patient);
            if (riskLevel != null) {
                return riskLevel;
            }
        }
        return RiskLevel.NOT_DEFINED;
    }
}
