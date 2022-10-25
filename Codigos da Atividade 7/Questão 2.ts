class calculadora{
    private numero1: number
    private numero2: number

    constructor(numero1: number, numero2: number){
        this.numero1 = numero1
        this.numero2 = numero2
    }

    soma(): number{
        return this.numero1 + this.numero2
    }
}

let s = new calculadora(9,6)
console.log(s.soma())