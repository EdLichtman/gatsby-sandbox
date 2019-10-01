class DieRoller {
    getRandomInt = (min, max) => {
        var range = max - min;
        return Math.floor(Math.random() * Math.floor(range)) + min;
    };
    rollDie = (sidesOfDie, numberOfRolls) => {
        var result = new Array(numberOfRolls);
        for (var i = 0; i < numberOfRolls; i++) {
            result[i] = this.getRandomInt(1, sidesOfDie + 1);
        }
        return result;
    };
}

module.exports = {rollDie: DieRoller.rollDie}

