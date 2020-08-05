import ISymbol from "./ISymbol";
import Roll from "../Roll";
import Dice from "../Dice";
import ISide from "../Side/ISide";

export default class NumberSymbol implements ISymbol {
    value: number;

    constructor(value: number) {
        this.value = value;
    }

    plus(symbol: NumberSymbol): NumberSymbol {
        this.value += symbol.value;
        return this;
    }

    getKey(): string {
        return "number";
    }

    toString(): string {
        return this.value.toString();
    }

    onRolled(roll: Roll, dice: Dice, symbols: ISymbol[]): void {
    }
}
