package com.medilabo.auth.service.impl;

import com.medilabo.auth.exception.AuthException;
import com.medilabo.auth.object.entity.User;
import com.medilabo.auth.object.request.AuthRequest;
import com.medilabo.auth.object.response.AuthResponse;
import com.medilabo.auth.repository.UserRepository;
import com.medilabo.auth.service.AuthService;
import com.medilabo.auth.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final JwtUtil jwtUtil;

    @Autowired
    public AuthServiceImpl(UserRepository userRepository, BCryptPasswordEncoder bCryptPasswordEncoder, JwtUtil jwtUtil) {
        this.userRepository = userRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
        this.jwtUtil = jwtUtil;
    }

    @Override
    public AuthResponse login(AuthRequest authRequest) {
        Optional<User> user = userRepository.findById(authRequest.getEmail());

        if (user.isEmpty())
            throw new AuthException.AuthFailedException("Auth failed");


        if (!bCryptPasswordEncoder.matches(authRequest.getPassword(), user.get().getPassword())) {
            throw new AuthException.AuthFailedException("Auth failed");
        }

        return AuthResponse.builder().token(jwtUtil.get(authRequest.getEmail(), authRequest.isRememberMe())).build();
    }

    @Override
    public boolean validate(String token) {
        return jwtUtil.verify(token, false);
    }
}
