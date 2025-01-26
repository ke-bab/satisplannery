import {Planner} from "../planner/Planner.ts";
import {ProductionLine} from "../planner/ProductionLine.ts";
import {Factory} from "../planner/factory/Factory.ts";

export class Render {
    // @ts-ignore
    private activeProductionLine: ProductionLine | null = null;

    constructor(
        private productionLineList: HTMLDivElement,
        // @ts-ignore
        private addProductionLineBtn: HTMLButtonElement,
        private factoriesDiv: HTMLDivElement,
        private planner: Planner
    ) {
        addProductionLineBtn.addEventListener('click', () => this.addProductionLineHandler());
    }

    public addProductionLineHandler() {
        let newLine = new ProductionLine();
        this.planner.addProductionLine(newLine);
        this.productionLineList.appendChild(
            this.newProductionLineDiv(newLine)
        );
        this.updateView();
    }

    public setActive(productionLine: ProductionLine, div: HTMLDivElement) {
        this.activeProductionLine = productionLine;
        for (const child of this.productionLineList.children) {
            child.classList.remove('active');
        }
        div.classList.add('active');
        this.renderFactories(productionLine);
    }

    public updateView() {

    }

    private renderFactories(productionLine: ProductionLine) {
        this.factoriesDiv.innerText = '';
        for(const factory of productionLine.factories) {
            this.factoriesDiv.appendChild(this.newFactoryDiv(factory))
        }
    }

    private newFactoryDiv(factory: Factory) {
        let div = document.createElement('div');
        div.innerText = factory.recipe.name;

        return div;
    }


    private newProductionLineDiv(productionLine: ProductionLine) {
        let div = document.createElement('div');
        div.classList.add('production-line');
        this.setActive(productionLine, div);
        div.addEventListener('click', () => this.setActive(productionLine, div))
        div.innerText = 'новый продакшен';

        return div;
    }
}

