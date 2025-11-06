//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
//Ecuaciones para la serie:
//f0 = 0
//f1 = 1
//fn = (fn - 1) + (fn - 2); donde n >= 2

const fibonacci = function(positionMember) {
    let posActual = 1; //f1
    let posNext = 1; //f2
    let serie = "";

    //Empiezo el for con "i" igual a f1
    for (let i = 1; i <= positionMember; i++) {
        //en la primera iteración calcula "f3" a partir de los valores de "f1" y "f2"
        posN = posActual + posNext;
        //para la siguiente iteración, el valor de la posición actual será el valor de 
        //la posición siguiente de la iteración actual
        posActual = posNext; 
        //para la siguiente iteración, la posición siguiente será el valor calculado del 
        //valor de la posición actual más el valor de la posición siguiente en la iteración actual 
        posNext = posN;
        //Se va agregando el siguiente miembro calculado en la iteración actual a la variable
        serie = serie + ", " + posNext;
    }

    //Se concatenan f0, f1 y f2 al resto de los valores anteriormente calculados de la serie
    serie = "0, 1, 1" + serie;
    //Convertimos cada elemento de la variable en un elemento de un array a través de su divisor ", "
    serie = serie.split(", ");

    //La serie de Fibonacci no funciona para números negativos
    if (positionMember < 0) {return "OOPS"}

    //Se retorna el miembro correspondiente en la posición solicitada
    return parseInt(serie[positionMember]);
};

// Do not edit below this line
module.exports = fibonacci;
