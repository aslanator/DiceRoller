import ISide from "./Side/ISide";
import Random from "./Random";
import ISymbol from "./Symbol/ISymbol";

export default class Dice {
    readonly sides: ISide[]

    constructor(...sides: ISide[]) {
        this.sides = sides;
    }

    private getRandomSide(): ISide {
        return Random.getRandomFromArray(this.sides);
    }

    roll(): ISymbol[] {
        return this.getRandomSide().getValue();
    }
}