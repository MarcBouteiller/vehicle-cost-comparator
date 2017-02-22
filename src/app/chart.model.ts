export class ChartModel {

    type: string;
    data: any;
    legend: boolean;
    labels: Array<string>;
    options: any;

    constructor(type: string, legend: boolean, responsive: boolean) {
        this.type = type;
        this.legend = legend;
        this.options = { responsive: responsive};
    }

}