package com.medilabo.auth.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.medilabo.auth.model.entity.User;
import com.medilabo.auth.repository.UserRepository;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Configuration
public class JacksonConfig implements ApplicationRunner {

    private final ObjectMapper objectMapper;
    private final UserRepository userRepository;

    public JacksonConfig(ObjectMapper objectMapper, UserRepository userRepository) {
        this.objectMapper = objectMapper;
        this.userRepository = userRepository;
    }

    @Value("classpath:data.json")
    private Resource data;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        System.out.println("Loading data...");

        Model model = objectMapper.readValue(data.getInputStream(), Model.class);

        List<User> users = map(model);

        userRepository.insert(users);

        System.out.println("Data loaded.");
    }

    public List<User> map(Model model) {
        List<User> users = new ArrayList<>();
        for (UserModel userModel : model.users) {
            if (userRepository.findById(userModel.getEmail()).isPresent())
                continue;
            User user = User.builder().email(userModel.getEmail()).password(new BCryptPasswordEncoder().encode(userModel.getPassword())).build();
            users.add(user);
        }
        return users;
    }


    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Model {
        private UserModel[] users;
    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class UserModel {
        private String email;
        private String password;
    }
}
