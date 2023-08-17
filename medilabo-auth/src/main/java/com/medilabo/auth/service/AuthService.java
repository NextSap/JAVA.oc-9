package com.medilabo.auth.service;

import com.medilabo.auth.object.request.AuthRequest;
import com.medilabo.auth.object.response.AuthResponse;

public interface AuthService {

    AuthResponse login(AuthRequest authRequest);

    boolean validate(String token);
}
