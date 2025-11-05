const palindromes = function (myStr) {
    let myLowerStr = "";
    let myStrNoPunct = "";
    let myReversed = "";

    myLowerStr = myStr.toLowerCase();
    myStrNoPunct = myLowerStr.replace(/[.,?! ]/g, ""); //quita puntuación y espacios al texto

    //reconstruye el string original pero desde su final hasta su inicio
    for (let i = myLowerStr.length - 1; i >= 0; i--) { 
        myReversed = myReversed + myLowerStr[i];
    }

    myReversed = myReversed.replace(/[.,?! ]/g, ""); //quita puntuación y espacios al texto

    //compara si el string original (sin puntuación ni espacios)
    //es exactamente igual que el string construido al revés (sin puntuación ni espacios)
    return myReversed === myStrNoPunct ? true : false; 
    //La línea siguiente es para ver que trae cada variable de las importantes
    //return "myReversed: " + myReversed + " myStrNoPunct: " + myStrNoPunct;
};

// Do not edit below this line
module.exports = palindromes;
