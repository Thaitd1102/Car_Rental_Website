package com.example.carrental.service;

import com.example.carrental.entity.User;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class AuthServiceTest {

    private final AuthService authService = new AuthService();

    @Test
    void testValidRegistration() {
        User user = new User("yuwantha@gmail.com", "12345", "Test User");
        assertTrue(authService.register(user));

    }

    @Test
    void testInvalidEmail() {
        User user = new User("invalid", "12345", "Test User");
        assertFalse(authService.register(user));
    }

    @Test
    void testShortPassword() {
        User user = new User("test@gmail.com", "123", "Test User");
        assertFalse(authService.register(user));
    }

    @Test
    void testLoginSuccess() {
        assertTrue(authService.authenticateUser("yuwantha@gmail.com", "12345"));
    }

    @Test
    void testLoginFail() {
        assertFalse(authService.authenticateUser("wrong@gmail.com", "12345"));
    }
}
