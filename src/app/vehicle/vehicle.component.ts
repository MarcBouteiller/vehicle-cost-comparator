import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Vehicle } from "./shared/vehicle.model";
import { Energy } from "./shared/energy.enum";

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit, OnChanges {

  energiesEnum = Energy;
  energies: Array<Energy>;

  @Input() vehicle: Vehicle;
  @Input() collapsed: boolean;
  @Input() costPerMonth: number;

  @Output() vehicleDeleted: EventEmitter<Vehicle> = new EventEmitter<Vehicle>();
  @Output() onChange: EventEmitter<Vehicle> = new EventEmitter<Vehicle>();

  constructor() {
    this.energies = [Energy.Electrique, Energy.Diesel, Energy.SP95, Energy.SP98];
  }

  delete() {
    this.vehicleDeleted.emit(this.vehicle);
  }

  ngOnInit() {
  }

  ngOnChanges(){
  }

  modelChanged(value:any){
    this.onChange.emit(this.vehicle); 
  }

}
