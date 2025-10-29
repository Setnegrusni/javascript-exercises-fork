const removeFromArray = function(myArray, ...toRemove) {
    //Filtra el array original para traer aquellos elementos no incluidos en "...toRemove"
    //donde "...toRemove" es un array de argumentos
    return myArray.filter(item => !toRemove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
