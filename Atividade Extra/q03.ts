class Funcionario extends Pessoa{
    private _matricula: string
    private _salario: number

    constructor(nome: string, sobrenome: string, matricula: string, salario: number){
        super(nome, sobrenome)
        this._matricula = matricula
        this._salario = salario
    }

    get matricula(){
        return this._matricula
    }

    get salario(){
        return this._salario
    }

    calcularSalarioPrimeiraParcela(): number{
        return this.salario * 0.6

    }

    calcularSalarioSegundaParcela(): number{
        return this.salario * 0.4

    }


}