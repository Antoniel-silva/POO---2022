"use strict";
class Empregado {
    constructor(salario) {
        this._salario = 500;
        this._salario = salario;
    }
    calcularSalario() {
        return this._salario;
    }
}
let s = new Empregado(400);
//console.log(s);
console.log(s.calcularSalario());
