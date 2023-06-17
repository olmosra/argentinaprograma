const readlineSync = require('readline-sync');
let numero = readlineSync.question("Por favor ingrese un numero entero: ");
if (numero > 0 && numero % 2 === 0) {
    console.log("El número es positivo y par.");
} else if (numero > 0 && numero % 2 !== 0) {
    console.log("El número es positivo e impar.");
} else if (numero < 0) {
    console.log("El número es negativo");
} else if (numero == 0) {
    console.log(" El número es cero.")
} else {
    console.log("El valor ingresado no es un número entero.")
}