import {Recipe} from "../recipe/Recipe.ts";
import {PartName} from "./PartName.ts";
import {Output} from "../recipe/Output.ts";
import {RecipeName} from "../recipe/RecipeName.ts";

export class IronIngot implements Recipe {
    public name: RecipeName.IronIngotDefault = RecipeName.IronIngotDefault;
    public product: PartName.IronIngot = PartName.IronIngot;

    public getOutput() {
        return new Output(this, this.product)
    }
}