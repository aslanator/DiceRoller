import ISymbol from "./ISymbol";
import Roll from "../Roll";
import Dice from "../Dice";
import _ from "lodash";

export default class ExplodeSymbol implements ISymbol {
    value: number;

    constructor() {
        this.value = 0;
    }

    plus(symbol: ExplodeSymbol): ExplodeSymbol {
        return this;
    }

    getKey(): string {
        return "explode";
    }

    toString(): string {
        return '';
    }

    onRolled(roll: Roll, dice: Dice, symbols: ISymbol[]): void {
        console.log('times');
        symbols.push(..._.cloneDeep(dice.roll()));
    }
}
