"use strict";
class calculadora {
    constructor(numero1, numero2) {
        this.numero1 = numero1;
        this.numero2 = numero2;
    }
}
class calculadoraCientifica extends calculadora {
    constructor(numero1, numero2) {
        super(numero1, numero2);
    }
    get exponencial() {
        return this.numero1 ** this.numero2;
    }
}
