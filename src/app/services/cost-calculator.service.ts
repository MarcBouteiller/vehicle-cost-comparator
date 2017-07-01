import { Injectable } from '@angular/core';
import { Vehicle } from '../vehicle/shared/vehicle.model';
import { Energy } from '../vehicle/shared/energy.enum';
import { UserInfos } from '../user-infos/shared/user-infos.model';

@Injectable()
export class CostCalculatorService {

  constructor() { }

  calculateConsumption (v: Vehicle, userInfos: UserInfos){
    return userInfos.km / 100 * v.consumption * this.getEnergyPrice(v.energy, userInfos);
  }

  /**
   * Calculate cost per month for the period.
   */
  calculateCostPerMonth(globalCost: number, userInfos: UserInfos): number {
    return globalCost / userInfos.nbYears / 12;
  }

    /**
   * Calculate cost per month for the period.
   */
  calculateCostPerYear(v: Vehicle, userInfos: UserInfos): number {
      let cost = 0;
      let energyCost = this.calculateConsumption(v, userInfos);
      
      let renting = 0;
      if (v.renting) {
        renting = v.renting * 12;
      }

      if(v.maintenanceCost){
        cost += v.maintenanceCost;
      }
      if(v.feesInsurance){
        cost += v.feesInsurance;
      }
      if(energyCost){
        cost += energyCost;
      }
      cost += renting;
      return cost;
  }

  /**
   * Calculate the global cost for each year.
   */
  calculateCostsPerYear(v: Vehicle, userInfos: UserInfos): Array<number> {
    let costs: Array<number> = [];
    let cost = 0;
    if (v.price) {
      cost = v.price;
      costs.push(cost);
    }
    let costPerYear = this.calculateCostPerYear(v, userInfos);    
    for (let i = 0; i < userInfos.nbYears; i++) {
      // per year costs
      cost += costPerYear;
      costs.push(cost);
    }
    return costs;
  }

  private getEnergyPrice(e: any, userInfos: UserInfos) {
    switch (e) {
      case Energy.Diesel:
        return userInfos.gasoil;
      case Energy.Electrique:
        return userInfos.electricity;
      case Energy.SP95:
        return userInfos.sp95;
      case Energy.SP98:
        return userInfos.sp98;
      default:
        return this.getEnergyPrice(parseInt(e), userInfos);
    }
  }

}
