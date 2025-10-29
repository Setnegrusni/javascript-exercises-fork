const sumAll = function(initial, final) {
    let sumNums = 0;

    if (initial > final) {
        let temp = initial;
        initial = final;
        final = temp;
    }
    if (initial < 0 || final < 0) return "ERROR";
    if (!Number.isInteger(initial) || !Number.isInteger(final)) return "ERROR";

    for (let i = initial; i <= final; i++) {
        sumNums = sumNums + i;
    }
    return sumNums;
};

// Do not edit below this line
module.exports = sumAll;
