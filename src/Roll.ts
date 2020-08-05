import Dice from "./Dice";
import ISymbol from "./Symbol/ISymbol";
import Side from "./Side/Side";

export default class Roll {
    private readonly dices: Dice[];

    constructor(...dice: Dice[]) {
        this.dices = dice;
    }

    roll(): string {
        const symbols = this.dices.map(this.getDiceRoll.bind(this)).flat();
        return this.getSummedRandomValues(symbols)
            .map((value: ISymbol) => value.toString())
            .filter(Boolean)
            .join(', ');
    }

    private getGroupedRandomSideValue(symbols: ISymbol[]):  Map<string, ISymbol[]> {
        return symbols.reduce((sum, symbol) => {
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

    private getSummedRandomValues(symbols: ISymbol[]): ISymbol[]  {
        return Array.from(this.getGroupedRandomSideValue(symbols).values()).map((values: ISymbol[]) => {
            return values.reduce((sum: ISymbol, symbol: ISymbol) => {
                return sum.plus(symbol);
            })
        });
    }

    private getDiceRoll(dice: Dice): ISymbol[] {
        const roll = [...dice.roll()];
        for(const symbol of roll) {
            symbol.onRolled(this, dice, roll);
        }
        return roll;
    };
}