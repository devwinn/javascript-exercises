const removeFromArray = function(array, ...args) {
    finalArray = [];

    function removeArgs (arg) {
        if (!args.includes(arg)) {
            finalArray.push(arg);
        }
    };

    array.forEach((item) => removeArgs(item));
    return finalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
