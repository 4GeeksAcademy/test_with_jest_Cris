const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))
module.exports = { sum };

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

let oneDollarIs = {
    "JPY": 156.5, // japan yen
}

const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a yen
    let valueInYen = valueInDollar * 156.5;
    // Retornamos el valor en yen
    return valueInYen;
}

let oneYenIs = {
    "GBP": 0.87, // british pound
}

const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a pound
    let valueInPound = valueInYen * 0.87;
    // Retornamos el valor en yen
    return valueInPound;
}
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }


