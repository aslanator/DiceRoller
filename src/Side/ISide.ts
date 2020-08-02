import ISymbol from "../Symbol/ISymbol";

export default interface ISide {
    value: ISymbol[]

    getValue(): ISymbol[]
};