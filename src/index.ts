import Dice from "./Dice";
import NumberSymbol from "./Symbol/NumberSymbol";
import Roll from "./Roll";
import ExplodeSymbol from "./Symbol/ExplodeSymbol";
import Side from "./Side/Side";

const dice = new Dice(
    new Side(new NumberSymbol(1)),
    new Side(new NumberSymbol(1), new ExplodeSymbol()),
);

const roll = new Roll(dice, dice);

console.log(roll.roll());
