package com.medilabo.auth.service;

import com.medilabo.auth.model.request.AuthRequest;
import com.medilabo.auth.model.response.AuthResponse;

public interface AuthService {

    AuthResponse login(AuthRequest authRequest);

    boolean validate(String token);
}
