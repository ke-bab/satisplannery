import {Recipe} from "../recipe/Recipe.ts";
import {PartName} from "./PartName.ts";
import {Input} from "../recipe/Input.ts";

export class IronRod implements Recipe {
    public product: PartName.IronRod = PartName.IronRod;
    public input: PartName.IronIngot = PartName.IronIngot;


    public getInput() {
        return new Input(this, this.input)
    }
}