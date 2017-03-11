export class Cadena {
    cad: string;
    cad2: string;
    pali: boolean;
    conta: number;
    ;

    constructor(cad: string) {
        this.cad = cad;
    }
    validaPalindromo() {
        this.cad2 = this.cad.replace(/ /g, "");
        this.pali = this.cad2.split('').reverse().join('') === this.cad2;
        if (this.pali) {
            return "Es palindromo :D";
        }
        else {
            return "No es palindromo :(";
        }
    }
    numeroLetras() {
        return "El número de letras es: " + this.cad2.length;
    }
    numeroVocales() {
        this.conta = 0;
        let list: Array<string> = this.cad.split("");
        for (let letras of list) {

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

    }
    numeroPalabras() {

        let str = this.cad.split(" ");
        return "Número de palabras "+str.length;
        

    }
}

