import ISymbol from "./ISymbol";
import Roll from "../Roll";
import Dice from "../Dice";
import ISide from "../Side/ISide";

export default class GenesysSuccessFailureSymbol implements ISymbol {
    value: number;

    constructor(value: number) {
        this.value = value;
    }

    plus(symbol: GenesysSuccessFailureSymbol): GenesysSuccessFailureSymbol {
        this.value += symbol.value;
        return this;
    }

    getKey(): string {
        return "genesys";
    }

    toString(): string {
        if(this.value > 0)
            return `${this.value} Successes`;
        else if(this.value < 0)
            return `${-1 * this.value} Failures`;
        return '';
    }

    onRolled(roll: Roll, dice: Dice, symbols: ISymbol[]): void {}
}
