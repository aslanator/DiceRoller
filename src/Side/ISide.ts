import ISymbol from "../Symbol/ISymbol";

export default interface ISide {
    value: ISymbol[]

    getValue(): ISymbol[]

    addSymbol(symbol: ISymbol): this;
};