class calculadora{
    private operando1: number
    private operando2: number

    constructor(operando1: number, operando2: number){
        this.operando1 = operando1 
        this.operando2 = operando2
    }

    soma(){
        return this.operando1 + this.operando2
    }

    subtracao(){
        return this.operando1 - this.operando2
    }

}

let s1: calculadora = new calculadora(6,5)
console.log(s1)

console.log(s1.soma()) // 11
console.log(s1.subtracao()) // 1

// a execução de soma e subtração foram permitidas sem problemas