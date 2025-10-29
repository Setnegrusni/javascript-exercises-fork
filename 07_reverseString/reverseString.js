const reverseString = function(str) {
    charQty = str.length;
    let reversedStr = "";

    for(let i = charQty; i >= 0; i--) {
        reversedStr = reversedStr + str.charAt(i);
    }

    return reversedStr;
};

//console.log(reverseString("123 ¡Hola, Mundo! 456"));

// Do not edit below this line
module.exports = reverseString;
