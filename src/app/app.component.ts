import { Component } from '@angular/core';
import { Operator } from 'rxjs/';

import { UserInfosComponent } from './user-infos/user-infos.component';
import { Vehicle } from "./vehicle/shared/vehicle.model";
import { UserInfos } from "./user-infos/shared/user-infos.model";
import { CostCalculatorService } from './services/cost-calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userInfos: UserInfos = new UserInfos();
  
  vehicleName: string;
  vehicles: Array<Vehicle> = [];
  chartType:string = 'line';
  chartData:any[] = [];
  chartLegend: boolean = true;
  chartLabels: Array<string> = [];
  chartOptions:any = { 
    responsive: true
  };
  isCollapsed= false;
  costsPerMonth: Array<number> = [];

  constructor(private calc : CostCalculatorService){
    let v = new Vehicle("Yaris HSD");
    v.consumption = 4.5;
    v.energy = 2;
    v.price = 11500;
    v.maintenanceCost = 250;
    v.feesInsurance = 450;
    this.vehicles.push(v);

    v = new Vehicle("Renault Zoe");
    v.consumption = 15;
    v.energy = 0;
    v.price = 8500;
    v.maintenanceCost = 100;
    v.feesInsurance = 450;
    this.vehicles.push(v);

    v = new Vehicle("VW e-Up");
    v.consumption = 13;
    v.energy = 0;
    v.price = 14000;
    v.maintenanceCost = 100;
    v.feesInsurance = 450;
    this.vehicles.push(v);
  }

  /**
   * Add new vehicle in the list.
   */
  addVehicle(){
    console.log("Adding new vehicle : " + this.vehicleName);
    this.uncollapseVehicles();
    let vehicle = new Vehicle(this.vehicleName);
    this.vehicles.push(vehicle);
    this.vehicleName = "";  
  }

  /**
   * Remove vehicle from the list.
   */
  removeVehicle(vehicle: Vehicle){
    console.log("Removing vehicle " + vehicle.name);
    var index = this.vehicles.indexOf(vehicle, 0);
    this.vehicles.splice(index,1);
  }


  generateCharts(){    
    this.isCollapsed = true;

    // Génération des labels
    this.chartLabels = [];
    for(let i = 0; i <= this.userInfos.nbYears; i++){
      this.chartLabels.push(i.toString());
    }

    // Génération des données
    this.chartData.splice(0);
    this.costsPerMonth.splice(0);
    this.vehicles.forEach(v => {
      let costs = this.calc.calculateCostPerYear(v, this.userInfos);
      this.chartData.push({label: v.name, data: costs, fill: false});
      let costPerMonth = this.calc.calculateCostPerMonth(costs[costs.length-1], this.userInfos);
      v.costPerMonth = costPerMonth;
    }); 
  }
  
  uncollapseVehicles(){
    this.isCollapsed = false;
  }


}
