import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
    private key:string;

    constructor() { 
        this.key = "vcc";
    }

    put(item:any){
        localStorage.setItem(this.key, JSON.stringify(item));
    }

    restore(): Array<any>{
        return JSON.parse(localStorage.getItem(this.key));
    }

}