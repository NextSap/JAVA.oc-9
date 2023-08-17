package com.medilabo.auth.object.request;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class AuthRequest {
    private String email;
    private String password;
    private boolean rememberMe;
}