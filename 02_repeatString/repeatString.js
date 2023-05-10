const repeatString = function(str, numRepeats) {
    let repeated = "";
    if (numRepeats >= 0) {
        for (let i = 0; i < numRepeats; i++) {
            repeated += str
        }
        return repeated;
    } else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = repeatString;
