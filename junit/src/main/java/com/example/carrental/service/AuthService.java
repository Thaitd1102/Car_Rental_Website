package com.example.carrental.service;

import com.example.carrental.entity.User;

public class AuthService {

    public boolean validateRegister(User user) {
        return user != null &&
               user.getEmail() != null && user.getEmail().contains("@") &&
               user.getPassword() != null && user.getPassword().length() >= 5;
    }

    public boolean authenticateUser(String email, String password) {
        return "yuwantha@gmail.com".equals(email) && "12345".equals(password);
    }

    public boolean register(User user) {
        return validateRegister(user);
    }
}
