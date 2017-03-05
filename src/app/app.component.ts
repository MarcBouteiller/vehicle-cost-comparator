import { Component, ViewChild} from '@angular/core';
import { Operator } from 'rxjs/';

import { UserInfosComponent } from './user-infos/user-infos.component';
import { Vehicle } from "./vehicle/shared/vehicle.model";
import { UserInfos } from "./user-infos/shared/user-infos.model";
import { CostCalculatorService } from './services/cost-calculator.service';
import { LocalStorageService } from './services/localstorage.service';
import { ChartModel } from './chart.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userInfos: UserInfos = new UserInfos();  
  vehicleName: string;
  vehicles: Array<Vehicle>;

  lineChart: ChartModel;
  barChart: ChartModel;
  radarChart: ChartModel;
  isCollapsed= false;
  costsPerMonth: Array<number> = [];

  constructor(private calc : CostCalculatorService, private storage: LocalStorageService){
    this.barChart = new ChartModel('bar', true, true);
    this.lineChart = new ChartModel('line', true, true);
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
    this.generateCharts();
  }

  /**
   * Instructions when vehicle change.
   */
  onVehicleChange(vehicle: Vehicle){
    this.saveVehicles();
    this.generateCharts();
  }


  /**
   * Generate data for chart
   */
  generateCharts(){    
    this.isCollapsed = true;
    this.costsPerMonth.splice(0);

    // generate labels for lineChart
    let lineChartLabels = [];
    for(let i = 0; i <= this.userInfos.nbYears; i++){
      lineChartLabels.push(i.toString());
    }
    this.lineChart.labels = lineChartLabels;

    // generate data
    let lineData = [];
    let barLabels = ['Coût par an'];
    let barChartData = [];
    this.vehicles.forEach(v => {
      this.generateBarChartCostPerYear(barChartData, v);
      this.generateLineChart(lineData, v);
    });
    
    this.lineChart.data = lineData; 
    this.barChart.data = barChartData;
    this.barChart.labels = barLabels;

  }

  generateLineChart(lineData:any[], v:Vehicle){
    let costs = this.calc.calculateCostsPerYear(v, this.userInfos);
    lineData.push({label: v.name, data: costs, fill: false});
  }

  generateBarChartCostPerYear(barChartData: any[], v: Vehicle){
    let costPerYear = {data: [this.calc.calculateCostPerYear(v, this.userInfos)], label: v.name};
    barChartData.push(costPerYear);
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
