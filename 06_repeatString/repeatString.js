const repeatString = function(str, num) {
    let fullStr = "";

    if (num >= 0) {
        for (let i = 1; i <= num; i++) {
            fullStr = fullStr + str;
        }
        return fullStr;
    } else {
        return "ERROR";
    }
};

console.log(repeatString("", -1));

// Do not edit below this line
module.exports = repeatString;
