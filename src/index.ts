import Dice from "./Dice";
import NumberSide from "./Side/NumberSide";
import GenesysSide from "./Side/GenesysSide";
import GenesysSuccessFailureSymbol from "./Symbol/GenesysSuccessFailureSymbol";
import NumberSymbol from "./Symbol/NumberSymbol";
import Roll from "./Roll";

const dice = new Dice(new NumberSide(1), new NumberSide(2), new NumberSide(3), new NumberSide(4), new NumberSide(5), new NumberSide(6));
const genesysDice = new Dice(
    new GenesysSide(new GenesysSuccessFailureSymbol(1), new NumberSymbol(1), new NumberSymbol(2)),
    new GenesysSide(new GenesysSuccessFailureSymbol(2), new NumberSymbol(1), new NumberSymbol(2)),
    new GenesysSide(new GenesysSuccessFailureSymbol(-1), new NumberSymbol(2), new NumberSymbol(2)),
);

const roll = new Roll(genesysDice, genesysDice, dice);

console.log(roll.roll());
