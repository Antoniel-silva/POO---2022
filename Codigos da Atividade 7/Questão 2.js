"use strict";
class calculadora {
    constructor(numero1, numero2) {
        this.numero1 = numero1;
        this.numero2 = numero2;
    }
    soma() {
        return this.numero1 + this.numero2;
    }
}
let s = new calculadora(9, 6);
console.log(s.soma());
