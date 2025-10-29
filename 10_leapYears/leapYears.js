const leapYears = function(year) {
    let divByFour = Number.isInteger(year / 4);
    let divByHundred = Number.isInteger(year / 100);
    let divByFourHundred = Number.isInteger(year / 400);

    if ((divByFour && !divByHundred) || 
        (!divByHundred && divByFourHundred) || 
        (divByFour && divByFourHundred)) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
