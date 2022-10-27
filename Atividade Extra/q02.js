"use strict";
class Pessoa {
    constructor(nome, sobrenome) {
        this._nome = nome;
        this._sobrenome = sobrenome;
    }
    get Nome() {
        return this._nome;
    }
    get Sobrenome() {
        return this._sobrenome;
    }
    sobrenome() {
        return this._nome + " " + this._sobrenome;
    }
}
let p1 = new Pessoa("Antoniel", "William");
console.log(p1.Nome, p1.Sobrenome);
console.log(p1.sobrenome());
