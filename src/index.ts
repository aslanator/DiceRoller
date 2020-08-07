import Dice from "./Dice";
import NumberSymbol from "./Symbol/NumberSymbol";
import Roll from "./Roll";
import Side from "./Side/Side";
import ISymbol from "./Symbol/ISymbol";

const dice = new Dice(
    new Side(new NumberSymbol(1)),
    new Side(new NumberSymbol(2)),
);

const explodeCallback = ({symbols, dice}: {symbols: ISymbol[], dice: Dice}) => {
    const sum = symbols.reduce((sum, symbol) => (
        sum.plus(symbol)
    ));
    if(sum.value > 1)
        symbols.push(...dice.roll());
};

dice.addEventListener('roll', explodeCallback);

dice.removeEventListener('roll', explodeCallback);

const roll = new Roll(dice, dice);

console.log(roll.roll());
