import {Recipe} from "../recipe/Recipe.ts";
import {PartName} from "./PartName.ts";
import {Output} from "../recipe/Output.ts";

export class IronIngot implements Recipe {
    public product: PartName.IronIngot = PartName.IronIngot;

    public getOutput() {
        return new Output(this, this.product)
    }
}