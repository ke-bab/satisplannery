import {Recipe} from "../recipe/Recipe.ts";
import {PartName} from "./PartName.ts";
import {RecipeName} from "../recipe/RecipeName.ts";

export class IronRod implements Recipe {
    public name: RecipeName.IronRodDefault = RecipeName.IronRodDefault;
    public product: PartName.IronRod = PartName.IronRod;
    public input: PartName.IronIngot = PartName.IronIngot;
}