import { Energy } from "./energy.enum";
/**
 * Représentation d'un véhicule.
 */
export class Vehicle{
    
    name: string;
    price: number;
    energy: Energy;
    feesInsurance: number;
    maintenanceCost: number;
    consumption: number;
    renting: number;

    constructor(name: string){
        this.name = name;        
        this.energy = Energy.Electrique;
    }
}