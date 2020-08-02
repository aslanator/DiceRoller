export default interface ISymbol {
    value: number;

    getKey(): string;

    plus(symbol: ISymbol): ISymbol

    toString(): string
}