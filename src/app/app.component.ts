import { Component, ViewChild} from '@angular/core';
import { Operator } from 'rxjs/';

import { UserInfosComponent } from './user-infos/user-infos.component';
import { Vehicle } from "./vehicle/shared/vehicle.model";
import { UserInfos } from "./user-infos/shared/user-infos.model";
import { CostCalculatorService } from './services/cost-calculator.service';
import { LocalStorageService } from './services/localstorage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userInfos: UserInfos = new UserInfos();  
  vehicleName: string;
  vehicles: Array<Vehicle>;
  chartType:string = 'line';
  chartData:any[] = [];
  chartLegend: boolean = true;
  chartLabels: Array<string> = [];
  chartOptions:any = { 
    responsive: true
  };
  isCollapsed= false;
  costsPerMonth: Array<number> = [];

  constructor(private calc : CostCalculatorService, private storage: LocalStorageService){
    let storedData = this.storage.restore();
    this.vehicles = [];
    if(storedData !== null){
      this.vehicles = storedData;
    }
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
    this.saveVehicles();
  }

  /**
   * Remove vehicle from the list.
   */
  removeVehicle(vehicle: Vehicle){
    console.log("Removing vehicle " + vehicle.name);
    var index = this.vehicles.indexOf(vehicle, 0);
    this.vehicles.splice(index,1);
    this.saveVehicles();
  }

  /**
   * Instructions when vehicle change.
   */
  onVehicleChange(vehicle: Vehicle){
    this.saveVehicles();
  }


  /**
   * Generate data for chart
   */
  generateChart(){    
    this.saveVehicles();
    this.isCollapsed = true;

    // generate labels
    this.chartLabels = [];
    for(let i = 0; i <= this.userInfos.nbYears; i++){
      this.chartLabels.push(i.toString());
    }

    // generate data
    this.chartData = [];
    this.costsPerMonth.splice(0);
    this.vehicles.forEach(v => {
      let costs = this.calc.calculateCostPerYear(v, this.userInfos);
      this.chartData.push({label: v.name, data: costs, fill: false});
      let costPerMonth = this.calc.calculateCostPerMonth(costs[costs.length-1], this.userInfos);
      v.costPerMonth = costPerMonth;
    }); 
  }
  
  /**
   * Uncollapsed vehicles form.
   */
  uncollapseVehicles(){
    this.isCollapsed = false;
  }

  /**
   * Save vehicles in localstorage.
   */
  private saveVehicles(){
    this.storage.put(this.vehicles);
  }
}
