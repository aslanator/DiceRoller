import ISide from "./ISide";
import ISymbol from "../Symbol/ISymbol";
import _ from "lodash";

export default class Side implements ISide{
    readonly value: ISymbol[]

    constructor(...value: ISymbol[]) {
        this.value = value;
    }

    getValue(): Array<ISymbol> {
        return _.cloneDeep(this.value);
    }

    addSymbol(symbol: ISymbol): this {
        this.value.push(symbol);
        return this;
    }
}