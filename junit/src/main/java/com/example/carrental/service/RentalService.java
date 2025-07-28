package com.example.carrental.service;

import com.example.carrental.entity.*;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

public class RentalService {

    public RentalOrder createRentalOrder(User user, Vehicle vehicle, LocalDate start, LocalDate end) {
        if (start.isAfter(end)) {
            throw new IllegalArgumentException("Ngày thuê không hợp lệ");
        }
        long days = ChronoUnit.DAYS.between(start, end);
        BigDecimal total = vehicle.getPricePerDay().multiply(BigDecimal.valueOf(days));
        return new RentalOrder(user, vehicle, start, end, total);
    }
}
