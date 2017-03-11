"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cadena = (function () {
    function Cadena(cad) {
        this.cad = cad;
    }
    ;
    Cadena.prototype.validaPalindromo = function () {
        this.cad2 = this.cad.replace(/ /g, "");
        this.pali = this.cad2.split('').reverse().join('') === this.cad2;
        if (this.pali) {
            return "Es palindromo :D";
        }
        else {
            return "No es palindromo :(";
        }
    };
    Cadena.prototype.numeroLetras = function () {
        return "El número de letras es: " + this.cad2.length;
    };
    Cadena.prototype.numeroVocales = function () {
        this.conta = 0;
        var list = this.cad.split("");
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var letras = list_1[_i];
            switch (letras) {
                case 'a':
                    this.conta++;
                    break;
                case 'e':
                    this.conta++;
                    break;
                case 'i':
                    this.conta++;
                    break;
                case 'o':
                    this.conta++;
                    break;
                case 'u':
                    this.conta++;
                    break;
            }
        }
        return "Número de vocales: " + this.conta;
    };
    Cadena.prototype.numeroPalabras = function () {
        var str = this.cad.split(" ");
        return "Número de palabras " + str.length;
    };
    return Cadena;
}());
exports.Cadena = Cadena;
