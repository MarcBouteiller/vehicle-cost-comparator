export class UserInfos {
    
    km: number;
    sp95: number;
    sp98: number;
    gasoil: number;
    electricity: number;
    nbYears: number;

    constructor(){
        this.nbYears = 8;
        this.km = 15000;
        this.electricity = 0.15;
        this.sp95 = 1.35;
        this.sp98 = 1.45;
        this.gasoil = 1.25;
    }

}