export class Operaciones {


    suma(n1: number, n2: number) {
        let res: number;
        res = n1 + n2;
        return res;
    }
    resta(n1: number, n2: number) {
        let res: number;
        res = n1 - n2;
        return res;
    }

    factorial(n) {
        if (n == 0) {
            return 1;
        }
        return n * this.factorial(n - 1);
    }
    esPrimo(n: number) {
        let contador: number;
        let primo: boolean;
        contador = 2;
        primo = true;
        while ((primo) && (contador != n)) {
            if (n % contador == 0)
                primo = false;
            contador++;
        }
        return primo;
    }

}