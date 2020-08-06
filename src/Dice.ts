import ISide from "./Side/ISide";
import Random from "./Random";
import ISymbol from "./Symbol/ISymbol";
import Eventable from "./Eventable/Eventable";

export default class Dice extends Eventable{
    readonly sides: ISide[]

    constructor(...sides: ISide[]) {
        super();
        this.sides = sides;
    }

    private getRandomSide(): ISide {
        return Random.getRandomFromArray(this.sides);
    }

    roll(): ISymbol[] {
        const symbols = this.getRandomSide().getValue();
        this.dispatch('roll', {symbols, dice: this});
        return symbols;
    }
}