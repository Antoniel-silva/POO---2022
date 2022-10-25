class calculadora{
    private numero1: number
    private numero2: number

    constructor(numero1: number, numero2: number){
        this.numero1 = numero1
        this.numero2 = numero2
    }

}

class calculadoraCientifica extends calculadora{
    constructor(numero1: number, numero2: number){
        super(numero1, numero2)
    }

    get exponencial(): number{
        return this.numero1 ** this.numero2
    }


}


