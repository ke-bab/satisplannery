import {Factory} from "./factory/Factory.ts";

export class ProductionLine {
    public output: string = '';
    public byproducts: Array<string> = [];
    public factories: Array<Factory> = [];

    public addFactory(factory: Factory) {
        this.factories.push(factory);
    }
}