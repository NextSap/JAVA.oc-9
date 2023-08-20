package com.medilabo.diabetes.controller;

import com.medilabo.diabetes.model.entity.RiskLevel;
import com.medilabo.diabetes.service.DiabetesService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.ws.rs.HeaderParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/medilabo-diabetes/risk")
public class DiabetesController {

    private final DiabetesService diabetesService;

    @Autowired
    public DiabetesController(DiabetesService diabetesService) {
        this.diabetesService = diabetesService;
    }

    @GetMapping("/{patientId}")
    public ResponseEntity<?> getRisk(@PathVariable String patientId, @RequestHeader("Authorization") String token) {
        RiskLevel riskLevel = diabetesService.getRisk(patientId, token);
        return ResponseEntity.ok(riskLevel);
    }
}
