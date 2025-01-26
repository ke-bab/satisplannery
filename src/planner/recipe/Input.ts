import {Recipe} from "./Recipe.ts";
import {PartName} from "../parts/PartName.ts";

export class Input {
    public recipe: Recipe;
    public part: PartName;

    constructor(recipe: Recipe, part: PartName) {
        this.recipe = recipe;
        this.part = part;
    }
}