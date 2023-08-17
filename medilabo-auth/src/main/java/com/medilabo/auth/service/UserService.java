package com.medilabo.auth.service;

import com.medilabo.auth.object.entity.User;

public interface UserService {
    User findByEmail(String email);

    User save(User user);

    User update(String email, User user);

    void deleteByEmail(String email);
}
