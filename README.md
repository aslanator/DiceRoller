# DiceRoller

# Example
    const dice = new Dice(new NumberSide(1), new NumberSide(2), new NumberSide(3), new NumberSide(4), new NumberSide(5), new NumberSide(6));
    const genesysDice = new Dice(
        new GenesysSide(new GenesysSuccessFailureSymbol(1), new NumberSymbol(1), new NumberSymbol(2)),
        new GenesysSide(new GenesysSuccessFailureSymbol(2), new NumberSymbol(1), new NumberSymbol(2)),
        new GenesysSide(new GenesysSuccessFailureSymbol(-1), new NumberSymbol(2), new NumberSymbol(2)),
    );

    const roll = new Roll(genesysDice, genesysDice, dice);
    console.log('My roll', roll.roll());
