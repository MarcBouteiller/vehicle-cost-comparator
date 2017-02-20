import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Vehicle } from "./shared/vehicle.model";
import { Energy } from "./shared/energy.enum";

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  energiesEnum = Energy;
  energies: Array<Energy>;

  @Input() vehicle: Vehicle;
  @Input() collapsed: boolean;
  @Input() costPerMonth: number;
  @Output() vehicleDeleted: EventEmitter<Vehicle> = new EventEmitter<Vehicle>();

  constructor() {
    this.energies = [Energy.Electrique, Energy.Diesel, Energy.SP95, Energy.SP98];
  }

  delete() {
    this.vehicleDeleted.emit(this.vehicle);
  }

  ngOnInit() {
  }

}
