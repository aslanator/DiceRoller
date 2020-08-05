import Roll from "../Roll";
import Dice from "../Dice";
import ISide from "../Side/ISide";

export default interface ISymbol {
    value: number;

    getKey(): string;

    plus(symbol: ISymbol): ISymbol

    toString(): string

    onRolled(roll: Roll, dice: Dice, symbols: ISymbol[]): void
}