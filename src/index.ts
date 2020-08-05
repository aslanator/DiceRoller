import Dice from "./Dice";
import NumberSide from "./Side/NumberSide";
import GenesysSide from "./Side/GenesysSide";
import GenesysSuccessFailureSymbol from "./Symbol/GenesysSuccessFailureSymbol";
import NumberSymbol from "./Symbol/NumberSymbol";
import Roll from "./Roll";
import ExplodeSymbol from "./Symbol/ExplodeSymbol";
import Side from "./Side/Side";

const dice = new Dice(
    new Side(new NumberSymbol(1)),
    new Side(new NumberSymbol(1), new ExplodeSymbol()),
);
const genesysDice = new Dice(
    new GenesysSide(new GenesysSuccessFailureSymbol(1), new NumberSymbol(1), new NumberSymbol(2)),
    new GenesysSide(new GenesysSuccessFailureSymbol(2), new NumberSymbol(1), new NumberSymbol(2)),
    new GenesysSide(new GenesysSuccessFailureSymbol(-1), new NumberSymbol(2), new NumberSymbol(2)),
);

const roll = new Roll(dice, dice);

console.log(roll.roll());
