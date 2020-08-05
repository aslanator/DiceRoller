import ISide from "./ISide";
import ISymbol from "../Symbol/ISymbol";
import NumberSymbol from "../Symbol/NumberSymbol";

export default class NumberSide implements ISide{
    readonly value: Array<ISymbol>

    constructor(...value: Array<number>) {
        this.value = value.map(number => new NumberSymbol(number));
    }

    getValue(): Array<ISymbol> {
        return this.value;
    }

    addSymbol(symbol: ISymbol): this {
        this.value.push(symbol);
        return this;
    }
}