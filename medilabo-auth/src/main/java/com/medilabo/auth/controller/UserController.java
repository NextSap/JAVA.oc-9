package com.medilabo.auth.controller;


import com.medilabo.auth.model.entity.User;
import com.medilabo.auth.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/medilabo-auth/user")
@CrossOrigin
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity<?> saveUser(@RequestBody User user) {
        return ResponseEntity.status(201).body(userService.save(user));
    }
}
