import ISide from "./Side/ISide";
import Random from "./Random";
import ISymbol from "./Symbol/ISymbol";

export default class Dice {
    readonly sides: Array<ISide>

    constructor(...sides: Array<ISide>) {
        this.sides = sides;
    }

    roll(): ISide {
       return Random.getRandomFromArray(this.sides);
    }
}