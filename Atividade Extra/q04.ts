class Professor extends Funcionario{

    _titulacao: string

    constructor(nome: string, sobrenome: string, matricula: string, salario: number, titulacao: string){
        super(nome,sobrenome,matricula,salario)
        this._titulacao = titulacao
    }
    get titulacao(): string{
        return this._titulacao
    }

    calcularSalarioPrimeiraParcela(): number {
        return this.salario * 1
    }

    calcularSalarioSegundaParcela(): number {
        return this.salario * 0
    }

    
}

