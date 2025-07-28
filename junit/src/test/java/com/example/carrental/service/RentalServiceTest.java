package com.example.carrental.service;

import com.example.carrental.entity.*;
import org.junit.jupiter.api.Test;
import java.math.BigDecimal;
import java.time.LocalDate;
import static org.junit.jupiter.api.Assertions.*;

public class RentalServiceTest {

    private final RentalService rentalService = new RentalService();

    @Test
    void testCreateRentalOrder_Valid() {
        User user = new User("test@gmail.com", "pass", "Test User");
        Vehicle vehicle = new Vehicle("ABC123", new BigDecimal("500000"));
        LocalDate start = LocalDate.now();
        LocalDate end = LocalDate.now().plusDays(2);

        RentalOrder order = rentalService.createRentalOrder(user, vehicle, start, end);
        assertEquals(new BigDecimal("1000000"), order.getTotalAmount());
        assertEquals(start, order.getStartDate());
        assertEquals("test@gmail.com", order.getUser().getEmail());
    }

    @Test
    void testCreateRentalOrder_InvalidDate() {
        User user = new User("test@gmail.com", "pass", "Test User");
        Vehicle vehicle = new Vehicle("ABC123", new BigDecimal("500000"));
        LocalDate start = LocalDate.now().plusDays(2);
        LocalDate end = LocalDate.now();

        assertThrows(IllegalArgumentException.class, () ->
            rentalService.createRentalOrder(user, vehicle, start, end));
    }
}
