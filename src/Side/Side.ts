import ISide from "./ISide";
import ISymbol from "../Symbol/ISymbol";

export default class Side implements ISide{
    readonly value: ISymbol[]

    constructor(...value: ISymbol[]) {
        this.value = value;
    }

    getValue(): Array<ISymbol> {
        return this.value;
    }

    addSymbol(symbol: ISymbol): this {
        this.value.push(symbol);
        return this;
    }
}