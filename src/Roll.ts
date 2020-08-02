import Dice from "./Dice";
import ISymbol from "./Symbol/ISymbol";
import ISide from "./Side/ISide";

export default class Roll {
    private readonly dices: Dice[];

    constructor(...dice: Dice[]) {
        this.dices = dice;
    }

    roll(): string {
        const sides = this.dices.map(dice => dice.roll());
        return this.getSummedRandomValues(sides)
            .map((value: ISymbol) => value.toString())
            .filter(Boolean)
            .join(', ');
    }

    private getGroupedRandomSideValue(sides: ISide[]):  Map<string, ISymbol[]> {
        const symbols = sides.reduce((sides, side) => sides.concat(side.getValue()), [] as ISymbol[]);
        return symbols.reduce((sum: Map<string, ISymbol[]>, symbol: ISymbol) => {
            let symbols =  sum.get(symbol.getKey());
            if(symbols instanceof Array){
                symbols.push(symbol);
            }
            else{
                sum.set(symbol.getKey(), [symbol]);
            }
            return sum;
        }, new Map());
    }

    private getSummedRandomValues(sides: ISide[]): Array<ISymbol>  {
        return Array.from(this.getGroupedRandomSideValue(sides).values()).map((values: Array<ISymbol>) => {
            return values.reduce((sum: ISymbol, symbol: ISymbol) => {
                return sum.plus(symbol);
            })
        });
    }
}