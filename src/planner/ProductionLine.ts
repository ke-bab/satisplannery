import {Recipe} from "./recipe/Recipe.ts";

export class ProductionLine {
    public output: string = '';
    public byproducts: Array<string> = [];
    public recipes: Array<Recipe> = [];

    public addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
    }
}