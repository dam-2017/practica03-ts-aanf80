"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Operaciones = (function () {
    function Operaciones() {
    }
    Operaciones.prototype.suma = function (n1, n2) {
        var res;
        res = n1 + n2;
        return res;
    };
    Operaciones.prototype.resta = function (n1, n2) {
        var res;
        res = n1 - n2;
        return res;
    };
    Operaciones.prototype.factorial = function (n) {
        if (n == 0) {
            return 1;
        }
        return n * this.factorial(n - 1);
    };
    Operaciones.prototype.esPrimo = function (n) {
        var contador;
        var primo;
        contador = 2;
        primo = true;
        while ((primo) && (contador != n)) {
            if (n % contador == 0)
                primo = false;
            contador++;
        }
        return primo;
    };
    return Operaciones;
}());
exports.Operaciones = Operaciones;
