import ISide from "./ISide";
import ISymbol from "../Symbol/ISymbol";
import NumberSymbol from "../Symbol/NumberSymbol";
import GenesysSuccessFailureSymbol from "../Symbol/GenesysSuccessFailureSymbol";

export default class GenesysSide implements ISide{
    readonly value: Array<ISymbol>

    constructor(...value: Array<GenesysSuccessFailureSymbol | NumberSymbol>) {
        this.value = value;
    }

    getValue(): Array<ISymbol> {
        return this.value;
    }
}