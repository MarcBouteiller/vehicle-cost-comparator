webpackJsonp([1,5],{

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Energy; });
var Energy;
(function (Energy) {
    Energy[Energy["Electrique"] = 0] = "Electrique";
    Energy[Energy["Diesel"] = 1] = "Diesel";
    Energy[Energy["SP95"] = 2] = "SP95";
    Energy[Energy["SP98"] = 3] = "SP98";
})(Energy || (Energy = {}));
//# sourceMappingURL=C:/Users/Marc/workspace/vehicle-cost-comparator/src/energy.enum.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vehicle_shared_energy_enum__ = __webpack_require__(212);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CostCalculatorService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CostCalculatorService = (function () {
    function CostCalculatorService() {
    }
    /**
     * Calculate cost per month for the period.
     */
    CostCalculatorService.prototype.calculateCostPerMonth = function (globalCost, userInfos) {
        return globalCost / userInfos.nbYears / 12;
    };
    /**
     * Calculate the global cost for each year.
     */
    CostCalculatorService.prototype.calculateCostPerYear = function (v, userInfos) {
        var costs = [];
        var cost = 0;
        if (v.price) {
            cost = v.price;
            costs.push(cost);
        }
        var energyCost = userInfos.km / 100 * v.consumption * this.getEnergysPrice(v.energy, userInfos);
        var renting = 0;
        if (v.renting) {
            renting = v.renting * 12;
        }
        for (var i = 0; i < userInfos.nbYears; i++) {
            // per year costs
            cost += v.maintenanceCost;
            cost += v.feesInsurance;
            cost += energyCost;
            cost += renting;
            costs.push(cost);
        }
        return costs;
    };
    CostCalculatorService.prototype.getEnergysPrice = function (e, userInfos) {
        switch (e) {
            case __WEBPACK_IMPORTED_MODULE_1__vehicle_shared_energy_enum__["a" /* Energy */].Diesel:
                return userInfos.gasoil;
            case __WEBPACK_IMPORTED_MODULE_1__vehicle_shared_energy_enum__["a" /* Energy */].Electrique:
                return userInfos.electricity;
            case __WEBPACK_IMPORTED_MODULE_1__vehicle_shared_energy_enum__["a" /* Energy */].SP95:
                return userInfos.sp95;
            case __WEBPACK_IMPORTED_MODULE_1__vehicle_shared_energy_enum__["a" /* Energy */].SP98:
                return userInfos.sp98;
            default:
                return this.getEnergysPrice(parseInt(e), userInfos);
        }
    };
    CostCalculatorService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], CostCalculatorService);
    return CostCalculatorService;
}());
//# sourceMappingURL=C:/Users/Marc/workspace/vehicle-cost-comparator/src/cost-calculator.service.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocalStorageService = (function () {
    function LocalStorageService() {
        this.key = "vcc";
    }
    LocalStorageService.prototype.put = function (item) {
        localStorage.setItem(this.key, JSON.stringify(item));
    };
    LocalStorageService.prototype.restore = function () {
        return JSON.parse(localStorage.getItem(this.key));
    };
    LocalStorageService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], LocalStorageService);
    return LocalStorageService;
}());
//# sourceMappingURL=C:/Users/Marc/workspace/vehicle-cost-comparator/src/localstorage.service.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfos; });
var UserInfos = (function () {
    function UserInfos() {
        this.nbYears = 5;
        this.km = 15000;
        this.electricity = 0.15;
        this.sp95 = 1.35;
        this.sp98 = 1.45;
        this.gasoil = 1.25;
    }
    return UserInfos;
}());
//# sourceMappingURL=C:/Users/Marc/workspace/vehicle-cost-comparator/src/user-infos.model.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__energy_enum__ = __webpack_require__(212);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Vehicle; });

/**
 * Représentation d'un véhicule.
 */
var Vehicle = (function () {
    function Vehicle(name) {
        this.name = name;
        this.energy = __WEBPACK_IMPORTED_MODULE_0__energy_enum__["a" /* Energy */].Electrique;
    }
    return Vehicle;
}());
//# sourceMappingURL=C:/Users/Marc/workspace/vehicle-cost-comparator/src/vehicle.model.js.map

/***/ }),

/***/ 438:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 438;


/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(548);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Marc/workspace/vehicle-cost-comparator/src/main.js.map

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vehicle_shared_vehicle_model__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_infos_shared_user_infos_model__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_cost_calculator_service__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_localstorage_service__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chart_model__ = __webpack_require__(549);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = (function () {
    function AppComponent(calc, storage) {
        this.calc = calc;
        this.storage = storage;
        this.userInfos = new __WEBPACK_IMPORTED_MODULE_2__user_infos_shared_user_infos_model__["a" /* UserInfos */]();
        this.isCollapsed = false;
        this.costsPerMonth = [];
        this.barChart = new __WEBPACK_IMPORTED_MODULE_5__chart_model__["a" /* ChartModel */]('bar', true, true);
        this.lineChart = new __WEBPACK_IMPORTED_MODULE_5__chart_model__["a" /* ChartModel */]('line', true, true);
        var storedData = this.storage.restore();
        this.vehicles = [];
        if (storedData !== null) {
            this.vehicles = storedData;
        }
    }
    /**
     * Add new vehicle in the list.
     */
    AppComponent.prototype.addVehicle = function () {
        console.log("Adding new vehicle : " + this.vehicleName);
        this.uncollapseVehicles();
        var vehicle = new __WEBPACK_IMPORTED_MODULE_1__vehicle_shared_vehicle_model__["a" /* Vehicle */](this.vehicleName);
        this.vehicles.push(vehicle);
        this.vehicleName = "";
        this.saveVehicles();
    };
    /**
     * Remove vehicle from the list.
     */
    AppComponent.prototype.removeVehicle = function (vehicle) {
        console.log("Removing vehicle " + vehicle.name);
        var index = this.vehicles.indexOf(vehicle, 0);
        this.vehicles.splice(index, 1);
        this.saveVehicles();
    };
    /**
     * Instructions when vehicle change.
     */
    AppComponent.prototype.onVehicleChange = function (vehicle) {
        this.saveVehicles();
    };
    /**
     * Generate data for chart
     */
    AppComponent.prototype.generateCharts = function () {
        var _this = this;
        this.isCollapsed = true;
        this.costsPerMonth.splice(0);
        // generate labels for lineChart
        var lineChartLabels = [];
        for (var i = 0; i <= this.userInfos.nbYears; i++) {
            lineChartLabels.push(i.toString());
        }
        this.lineChart.labels = lineChartLabels;
        // generate data
        var lineData = [];
        var barLabels = [];
        var barData = [];
        this.vehicles.forEach(function (v) {
            barLabels.push(v.name);
            var costs = _this.calc.calculateCostPerYear(v, _this.userInfos);
            var costPerMonth = _this.calc.calculateCostPerMonth(costs[costs.length - 1], _this.userInfos);
            barData.push(costPerMonth);
            lineData.push({ label: v.name, data: costs, fill: false });
        });
        this.lineChart.data = lineData;
        this.barChart.data = [{ data: barData, label: "Coût global par mois" }];
        this.barChart.labels = barLabels;
    };
    /**
     * Uncollapsed vehicles form.
     */
    AppComponent.prototype.uncollapseVehicles = function () {
        this.isCollapsed = false;
    };
    /**
     * Save vehicles in localstorage.
     */
    AppComponent.prototype.saveVehicles = function () {
        this.storage.put(this.vehicles);
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(737),
            styles: [__webpack_require__(734)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_cost_calculator_service__["a" /* CostCalculatorService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_cost_calculator_service__["a" /* CostCalculatorService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_localstorage_service__["a" /* LocalStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_localstorage_service__["a" /* LocalStorageService */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Marc/workspace/vehicle-cost-comparator/src/app.component.js.map

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts_ng2_charts__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__vehicle_vehicle_component__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_infos_user_infos_component__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_cost_calculator_service__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_localstorage_service__ = __webpack_require__(338);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__vehicle_vehicle_component__["a" /* VehicleComponent */],
                __WEBPACK_IMPORTED_MODULE_8__user_infos_user_infos_component__["a" /* UserInfosComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_charts_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap__["a" /* Ng2BootstrapModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap__["b" /* CollapseModule */].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__services_cost_calculator_service__["a" /* CostCalculatorService */], __WEBPACK_IMPORTED_MODULE_10__services_localstorage_service__["a" /* LocalStorageService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/Marc/workspace/vehicle-cost-comparator/src/app.module.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartModel; });
var ChartModel = (function () {
    function ChartModel(type, legend, responsive) {
        this.type = type;
        this.legend = legend;
        this.options = { responsive: responsive };
    }
    return ChartModel;
}());
//# sourceMappingURL=C:/Users/Marc/workspace/vehicle-cost-comparator/src/chart.model.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_user_infos_model__ = __webpack_require__(339);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserInfosComponent = (function () {
    function UserInfosComponent() {
    }
    UserInfosComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_user_infos_model__["a" /* UserInfos */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_user_infos_model__["a" /* UserInfos */]) === 'function' && _a) || Object)
    ], UserInfosComponent.prototype, "userInfos", void 0);
    UserInfosComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-infos',
            template: __webpack_require__(738),
            styles: [__webpack_require__(735)]
        }), 
        __metadata('design:paramtypes', [])
    ], UserInfosComponent);
    return UserInfosComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Marc/workspace/vehicle-cost-comparator/src/user-infos.component.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_vehicle_model__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_energy_enum__ = __webpack_require__(212);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VehicleComponent = (function () {
    function VehicleComponent() {
        this.energiesEnum = __WEBPACK_IMPORTED_MODULE_2__shared_energy_enum__["a" /* Energy */];
        this.vehicleDeleted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.energies = [__WEBPACK_IMPORTED_MODULE_2__shared_energy_enum__["a" /* Energy */].Electrique, __WEBPACK_IMPORTED_MODULE_2__shared_energy_enum__["a" /* Energy */].Diesel, __WEBPACK_IMPORTED_MODULE_2__shared_energy_enum__["a" /* Energy */].SP95, __WEBPACK_IMPORTED_MODULE_2__shared_energy_enum__["a" /* Energy */].SP98];
    }
    VehicleComponent.prototype.delete = function () {
        this.vehicleDeleted.emit(this.vehicle);
    };
    VehicleComponent.prototype.ngOnInit = function () {
    };
    VehicleComponent.prototype.ngOnChanges = function () {
    };
    VehicleComponent.prototype.modelChanged = function (value) {
        this.onChange.emit(this.vehicle);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_vehicle_model__["a" /* Vehicle */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_vehicle_model__["a" /* Vehicle */]) === 'function' && _a) || Object)
    ], VehicleComponent.prototype, "vehicle", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], VehicleComponent.prototype, "collapsed", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], VehicleComponent.prototype, "costPerMonth", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _b) || Object)
    ], VehicleComponent.prototype, "vehicleDeleted", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _c) || Object)
    ], VehicleComponent.prototype, "onChange", void 0);
    VehicleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-vehicle',
            template: __webpack_require__(739),
            styles: [__webpack_require__(736)]
        }), 
        __metadata('design:paramtypes', [])
    ], VehicleComponent);
    return VehicleComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Marc/workspace/vehicle-cost-comparator/src/vehicle.component.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/Marc/workspace/vehicle-cost-comparator/src/environment.js.map

/***/ }),

/***/ 734:
/***/ (function(module, exports) {

module.exports = "header{\r\n    text-align: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    height: 35px;\r\n    margin-bottom: 10px;\r\n    padding-top: 15px;\r\n    box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\r\n}\r\n\r\n.layout{\r\n    min-height: 100vh;\r\n}\r\n\r\n.vehicle-charts{\r\n    padding: 25px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n}\r\n\r\n.generate-btn{\r\n    padding: 20px 0px 0px 20px;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\napp-user-infos{\r\n    padding: 20px 0px 0px 20px;\r\n}\r\n\r\n.add-vehicle {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n}\r\n\r\n.chart{\r\n    border: solid 1px #aaa;\r\n    padding: 50px;\r\n    background-color: #fff;\r\n    display: block;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n    margin:1%;\r\n}\r\n\r\n.vehicles {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    margin-bottom: 30px;\r\n}\r\n\r\napp-vehicle{\r\n    margin-right: 3%;\r\n    -webkit-box-align: stretch;\r\n        -ms-flex-align: stretch;\r\n            align-items: stretch;\r\n    border: solid 1px #aaa;\r\n    border-radius: 3px;\r\n    padding: 10px;\r\n    background-color: #fff;\r\n    min-width: 185px;\r\n}"

/***/ }),

/***/ 735:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 736:
/***/ (function(module, exports) {

module.exports = ".title{        \r\n    width : 100%;\r\n    height: 35px;\r\n    padding-top: 5px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    margin-bottom: 10px;\r\n    border-radius: 3px;\r\n}"

/***/ }),

/***/ 737:
/***/ (function(module, exports) {

module.exports = "<div class=\"layout row\">\n\n    <div class=\"d-flex flex-column col-2\">\n        <app-user-infos class=\"user-infos\" [userInfos]=\"userInfos\"></app-user-infos>\n        <div class=\"generate-btn\">\n            <button (click)=\"generateCharts()\" class=\"btn btn-success \" [disabled]=\"!vehicles || !vehicles.length\">Comparer</button>\n            <br>\n            <button (click)=\"uncollapseVehicles()\" class=\"btn btn-secondary\" *ngIf=\"isCollapsed\">Ajustez vos données</button>\n        </div>\n    </div>\n\n    <div class=\"vehicle-charts col-10\">\n        <div class=\"vehicles\">\n            \n            <app-vehicle \n                *ngFor=\"let v of vehicles\" \n                [vehicle]=\"v\"\n                [collapsed]=\"isCollapsed\"\n                [costPerMonth]=\"costsPerMonth[index]\"\n                (vehicleDeleted)=\"removeVehicle($event)\"\n                (onChange)=\"onVehicleChange($event)\">\n            </app-vehicle>\n            \n            <div class=\"add-vehicle\" *ngIf=\"!vehicles || vehicles.length < 5\">        \n                <div class=\"form-group\">\n                    <small>Ajouter un vehicule</small>\n                    <input class=\"form-control\" [(ngModel)]=\"vehicleName\" placeholder=\"Nom du véhicule\">\n                </div>\n                <button \n                    [disabled]=\"!vehicleName\"\n                    class=\"btn btn-primary btn-lg\" \n                    (click)=\"addVehicle()\">\n                    +\n                </button>   \n            </div>\n        </div>\n        \n        <div class=\"d-flex\" *ngIf=\"lineChart.data && barChart.data\">\n            <div class=\"chart\">\n                <canvas baseChart\n                    [datasets]=\"lineChart.data\"\n                    [labels]=\"lineChart.labels\"\n                    [legend]=\"lineChart.legend\"\n                    [options]=\"lineChart.options\"\n                    [chartType]=\"lineChart.type\">\n                </canvas>\n            </div>\n            <div class=\"chart\">            \n                <canvas baseChart\n                    [datasets]=\"barChart.data\"\n                    [labels]=\"barChart.labels\"\n                    [options]=\"barChart.options\"\n                    [legend]=\"barChart.legend\"\n                    [chartType]=\"barChart.type\">\n                </canvas>\n            </div>\n        </div>\n\n</div>\n\n<footer>\n</footer>"

/***/ }),

/***/ 738:
/***/ (function(module, exports) {

module.exports = "<div class=\"user-informations\">\n    <strong>Informations de calcul</strong>\n    <br>\n    <small>Nombre d'années</small>\n    <div class=\"input-group\">\n        <span class=\"input-group-addon\" id=\"basic-addon1\">Années</span>\n        <input class=\"form-control\" placeholder=\"Nombre d'année\" [(ngModel)]=\"userInfos.nbYears\">\n    </div>\n    <br>\n    <small>Kilométrage annuel</small>\n    <div class=\"input-group\">\n        <span class=\"input-group-addon\" id=\"basic-addon1\">km</span>\n        <input class=\"form-control\" placeholder=\"Kilomètrage annuel\" [(ngModel)]=\"userInfos.km\">\n    </div>\n    <br>\n    <small>Sans Plomb 98</small>\n    <div class=\"input-group\">\n        <span class=\"input-group-addon\" id=\"basic-addon1\">€</span>\n        <input class=\"form-control\" placeholder=\"Prix SP98\" [(ngModel)]=\"userInfos.sp98\">\n    </div>\n    <br>\n    <small>Sans Plomb 95</small>\n    <div class=\"input-group\">\n        <span class=\"input-group-addon\" id=\"basic-addon1\">€</span>\n        <input class=\"form-control\" placeholder=\"Prix SP95\" [(ngModel)]=\"userInfos.sp95\">\n    </div>\n    <br>\n    <small>Gasoil</small>\n    <div class=\"input-group\">\n        <span class=\"input-group-addon\" id=\"basic-addon1\">€</span>\n        <input class=\"form-control\" placeholder=\"Prix Gasoil\" [(ngModel)]=\"userInfos.gasoil\">\n    </div>\n    <br>\n    <small>Electricité (prix moyen)</small>\n    <div class=\"input-group\">\n        <span class=\"input-group-addon\" id=\"basic-addon1\">€</span>\n        <input class=\"form-control\" placeholder=\"Prix Electricité HC\" [(ngModel)]=\"userInfos.electricity\">\n    </div>\n</div>"

/***/ }),

/***/ 739:
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-column\">\n  \n  <span class=\"title bg-info text-white\">{{ vehicle.name }}</span>\n\n  <div [collapse]=\"collapsed\">\n    <div class=\"input-group\">\n      <span class=\"input-group-addon\" id=\"basic-addon1\">€</span>\n      <input class=\"form-control\" placeholder=\"Prix d'achat\" [(ngModel)]=\"vehicle.price\" (ngModelChange)=\"modelChanged($event)\" type=\"number\">\n    </div>\n    <br>\n    <div class=\"input-group\">\n      <span class=\"input-group-addon\" id=\"basic-addon1\">€</span>\n      <input class=\"form-control\" placeholder=\"Location\" [(ngModel)]=\"vehicle.renting\" type=\"number\">\n    </div>\n    <br>\n    <div class=\"input-group\">\n      <span class=\"input-group-addon\" id=\"basic-addon1\">E</span>\n      <select placeholder=\"Energie\" class=\"form-control\" [(ngModel)]=\"vehicle.energy\">\n        <option *ngFor=\"let e of energies\" [value]=\"e\">{{energiesEnum[e]}}</option>\n      </select>\n    </div>\n    <br>\n    <div class=\"input-group\">\n      <span class=\"input-group-addon\" id=\"basic-addon1\" *ngIf=\"vehicle.energy != 0\">L</span>\n      <span class=\"input-group-addon\" id=\"basic-addon1\" *ngIf=\"vehicle.energy == 0\">kWh</span>\n      <input class=\"form-control\" placeholder=\"Consommation /100km\" [(ngModel)]=\"vehicle.consumption\" type=\"number\">\n    </div>\n    <br>\n    <div class=\"input-group\">\n      <span class=\"input-group-addon\" id=\"basic-addon1\">€</span>\n      <input class=\"form-control\" placeholder=\"Frais d'entretien\" [(ngModel)]=\"vehicle.maintenanceCost\" type=\"number\">\n    </div>\n    <br>\n    <div class=\"input-group\">\n      <span class=\"input-group-addon\" id=\"basic-addon1\">€</span>\n      <input class=\"form-control\" placeholder=\"Frais d'assurance\" [(ngModel)]=\"vehicle.feesInsurance\" type=\"number\">\n    </div>\n    <br>\n    <button (click)=\"delete()\" class=\"btn btn-danger\">Supprimer</button>\n  </div>\n</div>"

/***/ }),

/***/ 778:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 778;


/***/ }),

/***/ 779:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(439);


/***/ })

},[779]);
//# sourceMappingURL=main.bundle.map