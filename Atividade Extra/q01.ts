class Empregado {
    _salario: number = 500;

    constructor(salario: number){
        this._salario = salario
    }

    calcularSalario(){
        return this._salario
    }
    

}

let s: Empregado = new Empregado(400)
//console.log(s);
console.log(s.calcularSalario())

