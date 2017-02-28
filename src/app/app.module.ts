import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts/ng2-charts'
import { AppComponent } from './app.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { UserInfosComponent } from './user-infos/user-infos.component';
import { CostCalculatorService } from './services/cost-calculator.service';
import { LocalStorageService } from './services/localstorage.service';

@NgModule({
  declarations: [
    AppComponent,
    VehicleComponent,
    UserInfosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule
  ],
  providers: [CostCalculatorService, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
