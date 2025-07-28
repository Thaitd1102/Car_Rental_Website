package com.example.carrental.entity;

import java.math.BigDecimal;
import java.time.LocalDate;

public class RentalOrder {
    private User user;
    private Vehicle vehicle;
    private LocalDate startDate;
    private LocalDate endDate;
    private BigDecimal totalAmount;

    public RentalOrder(User user, Vehicle vehicle, LocalDate startDate, LocalDate endDate, BigDecimal totalAmount) {
        this.user = user;
        this.vehicle = vehicle;
        this.startDate = startDate;
        this.endDate = endDate;
        this.totalAmount = totalAmount;
    }

    public BigDecimal getTotalAmount() { return totalAmount; }
    public LocalDate getStartDate() { return startDate; }
    public LocalDate getEndDate() { return endDate; }
    public User getUser() { return user; }
}
