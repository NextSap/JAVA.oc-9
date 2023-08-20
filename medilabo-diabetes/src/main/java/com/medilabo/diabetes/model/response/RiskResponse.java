package com.medilabo.diabetes.model.response;

import com.medilabo.diabetes.model.entity.RiskLevel;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class RiskResponse {
    private RiskLevel riskLevel;
}
