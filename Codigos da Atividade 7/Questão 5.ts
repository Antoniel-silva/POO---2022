class Produto{
    private identificador: number
    private descricao: string
    private QtdEstoque: number
    private valorund: number

    constructor(identificador: number,descrição: string, QtdEstoque: number, valorund: number){
        this.identificador = identificador
        this.descricao = descrição
        this.QtdEstoque = QtdEstoque
        this.valorund = valorund
    }

    repor(a: number) {
        return this.QtdEstoque += a
    }

    DaBaixa(a: number) {
        return this.QtdEstoque -= a
    }

}


class ProdutoPerecivel extends Produto{
    DataValidade: Date = new Date()
    
    constructor(identificador: number,descrição: string, QtdEstoque: number, valorund: number, DataValidade: Date){
        super(identificador, descrição, QtdEstoque, valorund)
        this.DataValidade = DataValidade
    }

    /*validade(a: number){

    }*/

}

let p1 = new ProdutoPerecivel(1, "muito bom",6,15,(2022,10,6))

console.log(p1)

p1.repor(10)
console.log(p1)

p1.DaBaixa(7)
console.log(p1)
