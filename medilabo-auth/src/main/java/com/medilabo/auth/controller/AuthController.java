package com.medilabo.auth.controller;

import com.medilabo.auth.object.request.AuthRequest;
import com.medilabo.auth.object.response.AuthResponse;
import com.medilabo.auth.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/medilabo-auth/auth")
public class AuthController {

    private final AuthService authService;

    @Autowired
    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest authRequest) {
        AuthResponse authResponse = authService.login(authRequest);
        return ResponseEntity.status(201).body(authResponse);
    }

    @GetMapping("/validate")
    public ResponseEntity<?> validate(@RequestParam String token) {
        boolean isValidated = authService.validate(token);
        return ResponseEntity.status(200).body(isValidated);
    }
}
