package com.example;

public class Vehicle {
  int Wheels;
  float Gas;

  public Vehicle (int wheels) {
    Wheels = wheels;
    Gas = 1;

    if (Gas > 1) {
      // Very good
    }
  }

  public static Vehicle CreateSedan () {
    return new Vehicle(4)
  }

  public static string CompareVehicle (Vehicle vehicleA, Vehicle vehicleB) {
    return "nice";
  }

  public boolean HasGas() {
    return Gas > 0;
  }

  public void Refuel() {
    Gas = 1;
  }

  public void Drive() {
    Gas = 0;
  }
}
