package com.example;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        System.out.println( "Hello World!" );

        Vehicle car = Vehicle.CreateSedan();

        if (car.HasGas()) {
            car.Drive();
        } else {
            car.Refuel();
        }
    }
}
