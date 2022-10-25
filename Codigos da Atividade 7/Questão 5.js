"use strict";
class Produto {
    constructor(identificador, descrição, QtdEstoque, valorund) {
        this.identificador = identificador;
        this.descricao = descrição;
        this.QtdEstoque = QtdEstoque;
        this.valorund = valorund;
    }
    repor(a) {
        return this.QtdEstoque += a;
    }
    DaBaixa(a) {
        return this.QtdEstoque -= a;
    }
}
class ProdutoPerecivel extends Produto {
    constructor(identificador, descrição, QtdEstoque, valorund, DataValidade) {
        super(identificador, descrição, QtdEstoque, valorund);
        this.DataValidade = new Date();
        this.DataValidade = DataValidade;
    }
}
let p1 = new ProdutoPerecivel(1, "muito bom", 6, 15, (2022, 10, 6));
console.log(p1);
p1.repor(10);
console.log(p1);
p1.DaBaixa(7);
console.log(p1);
