
const assert = require('assert');
const {tiMonth, fuelConsumption, electricalConsumption} = require("../calculators/environment")
const electrical_consumption = electricalConsumption()

describe("FuelEnergySelector collection", () => {
    it("gasoline case", () =>{
        assert.deepStrictEqual(fuelEnergySelector("gasoline"),{
            "fuel_price": 16700,
            "fuel_energy": 35.58,
            "emision_factor": 69.25
        });
    });
    it("diesel case", () =>{
        assert.deepStrictEqual(fuelEnergySelector("diesel"),{
            "fuel_price": 11795,
            "fuel_energy": 40.7,
            "emision_factor": 74.01
        });
    });
})
describe("Pruebas", () => {
    it("consumo electrico", () =>{
        assert.deepEqual(electrical_consumption, 0.4507777777777778)
    });
    it("costo de energia", () =>{
        assert.deepEqual(costElectricalKM(electrical_consumption, 238.25), 107.39780555555555)
    });
    it("consumo de combustible", () =>{
        assert.deepEqual(fuelConsumption(combustion_consumption, fuel_selector["fuel:energy"]), 0.04102081879859657)
        });
    });
})
    

