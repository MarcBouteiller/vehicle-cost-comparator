import { Injectable } from '@angular/core';
import { Vehicle } from '../vehicle/shared/vehicle.model';
import { Energy } from '../vehicle/shared/energy.enum';
import { UserInfos } from '../user-infos/shared/user-infos.model';

@Injectable()
export class CostCalculatorService {

  constructor() { }

  /**
   * Calculate cost per month for the period.
   */
  calculateCostPerMonth(globalCost: number, userInfos: UserInfos): number {
    return globalCost / userInfos.nbYears / 12;
  }

  /**
   * Calculate the global cost for each year.
   */
  calculateCostPerYear(v: Vehicle, userInfos: UserInfos): Array<number> {
    let costs: Array<number> = [];
    let cost = 0;
    if (v.price) {
      cost = v.price;
      costs.push(cost);
    }
    let energyCost = userInfos.km / 100 * v.consumption * this.getEnergysPrice(v.energy, userInfos);
    let renting = 0;
    if (v.renting) {
      renting = v.renting * 12;
    }
    for (let i = 0; i < userInfos.nbYears; i++) {
      // per year costs
      cost += v.maintenanceCost;
      cost += v.feesInsurance;
      cost += energyCost;
      cost += renting;
      costs.push(cost);
    }
    return costs;
  }

  private getEnergysPrice(e: any, userInfos: UserInfos) {
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
        return this.getEnergysPrice(parseInt(e), userInfos);
    }
  }

}
