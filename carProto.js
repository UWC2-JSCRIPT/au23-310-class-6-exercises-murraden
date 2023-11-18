$( document ).ready(function() {
/**
 * Car class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()

    class Car {
        constructor(model) {
        this.model = model;
        this.currentSpeed = 0;  
        }

        accelerate() {
            this.currentSpeed++;
        }

        brake() {
            this.currentSpeed--;
        }

        toString() {
        console.log(`${this.model} is moving at ${this.currentSpeed} miles per hour!`);
        }
    }

    const rav4 = new Car('Rav4');

    rav4.accelerate();
    rav4.accelerate();
    rav4.brake();
    rav4.toString();
/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()

    class ElectricCar extends Car {
        constructor(model) {
        super(model);
        this.motor = 'Electric';
        }

        accelerate() {
            super.accelerate();
            super.accelerate();
        }

        toString() {
            console.log(`${this.model} is moving at ${this.currentSpeed} miles per hour because it is electric!`);
        }
    }

    const volt = new ElectricCar('Volt');

    volt.accelerate();
    volt.accelerate();
    volt.brake();
    volt.toString();

});