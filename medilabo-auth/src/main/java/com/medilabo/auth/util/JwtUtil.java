package com.medilabo.auth.util;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.medilabo.auth.exception.AuthException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.util.Date;

@Component
public class JwtUtil {

    @Value("${jwt.secret}")
    private String secret;

    private JwtUtil() {
    }

    public JwtUtil(String secret) {
        this.secret = secret;
    }

    public String get(String email, boolean rememberMe) {
        try {
            return JWT.create().withSubject(email).withIssuedAt(new Date())
                    .withExpiresAt(Instant.ofEpochSecond(new Date().getTime() + (rememberMe ? 864000000 : 7200000))).sign(Algorithm.HMAC256(secret));
        } catch (Exception e) {
            throw new AuthException.AuthFailedException("Auth failed");
        }
    }

    public String getEmail(String token, boolean throwException) {
        try {
            return JWT.require(Algorithm.HMAC256(secret)).build().verify(token.replace("Bearer ", "")).getSubject();
        } catch (Exception e) {
            if (throwException) {
                throw new AuthException.AuthFailedException("Auth failed");
            } else {
                return null;
            }
        }
    }

    public boolean verify(String token, boolean throwException) {
        return getEmail(token, throwException) != null;
    }
}
