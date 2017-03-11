import { Cadena } from './cadena';
import { Operaciones } from './operaciones';

var cadena: Cadena;
var ope: Operaciones;
cadena = new Cadena('anita lava la tina');
ope = new Operaciones();

console.log("Resultado de la suma: " + ope.suma(4, 6));
console.log("Resultado de la resta: " + ope.resta(7, 6));
console.log("Factorial: " + ope.factorial(4));
console.log("5 es numero primo?: " + ope.esPrimo(5));
console.log("4 es numero primo?: " + ope.esPrimo(4));

console.log(cadena.validaPalindromo());
console.log(cadena.numeroLetras());
console.log(cadena.numeroVocales());
console.log(cadena.numeroPalabras());

