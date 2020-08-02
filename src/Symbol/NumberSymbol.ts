import ISymbol from "./ISymbol";

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

}
