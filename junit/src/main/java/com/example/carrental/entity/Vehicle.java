package com.example.carrental.entity;

import java.math.BigDecimal;

public class Vehicle {
    private String licensePlate;
    private BigDecimal pricePerDay;

    public Vehicle(String licensePlate, BigDecimal pricePerDay) {
        this.licensePlate = licensePlate;
        this.pricePerDay = pricePerDay;
    }

    public BigDecimal getPricePerDay() { return pricePerDay; }
}
