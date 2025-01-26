import {ProductionLine} from "./ProductionLine.ts";

export class Planner {
    public productionLines: Array<ProductionLine> = [];

    constructor() {
    }

    public addProductionLine(productionLine: ProductionLine) {
        this.productionLines.push(productionLine);
    }
}