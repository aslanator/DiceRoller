import Dice from "./Dice";
import NumberSymbol from "./Symbol/NumberSymbol";
import Roll from "./Roll";
import Side from "./Side/Side";
import ISymbol from "./Symbol/ISymbol";

const dice = new Dice(
    new Side(new NumberSymbol(1)),
    new Side(new NumberSymbol(2)),
);

dice.addEventListener('roll', ({symbols, dice}: {symbols: ISymbol[], dice: Dice}) => {
    const sum = symbols.reduce((sum, symbol) => (
        sum.plus(symbol)
    ));
    if(sum.value > 1)
        symbols.push(...dice.roll());
});

const roll = new Roll(dice, dice);

console.log(roll.roll());
