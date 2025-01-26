import './style.css'
import {ProductionLine} from "./planner/ProductionLine.ts";
import {Planner} from "./planner/Planner.ts";
import {IronIngot} from "./planner/parts/IronIngot.ts";
import {IronRod} from "./planner/parts/IronRod.ts";
import {Render} from "./render/Render.ts";
import {Factory} from "./planner/factory/Factory.ts";

let planner = new Planner();
// добавление нового продакшена
let line = new ProductionLine();
planner.productionLines.push(line);
// создание рецепта
let ingotFactory = new Factory(new IronIngot());
let rodFactory = new Factory(new IronRod());
line.addFactory(ingotFactory);
line.addFactory(rodFactory);


// соединение двух рецептов


let productionLines = document.querySelector<HTMLDivElement>('#production-lines');
let addButton = document.querySelector<HTMLButtonElement>('#add-production-line');
let factoriesDiv = document.querySelector<HTMLDivElement>('#factories');
if (productionLines && addButton && factoriesDiv) {
    new Render(productionLines, addButton, factoriesDiv, planner);
} else {
    throw new Error("cannot find element with id #production-lines");
}





