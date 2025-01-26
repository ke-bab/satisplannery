import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import {setupCounter} from './counter.ts'
import {ProductionLine} from "./planner/ProductionLine.ts";
import {Planner} from "./planner/Planner.ts";
import {IronIngot} from "./planner/parts/IronIngot.ts";
import {ConnectionList} from "./planner/connection/ConnectionList.ts";
import {Connection} from "./planner/connection/Connection.ts";
import {IronRod} from "./planner/parts/IronRod.ts";

let planner = new Planner();
let connectionList = new ConnectionList();
// добавление нового продакшена
let line = new ProductionLine();
planner.productionLines.push(line);
// создание рецепта
let ingot = new IronIngot();
let rod = new IronRod();
line.addRecipe(ingot);
line.addRecipe(rod);


// соединение двух рецептов
connectionList.addConnection(
    new Connection(
        ingot.getOutput(),
        rod.getInput(),
    )
)

console.log(ingot.product);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

