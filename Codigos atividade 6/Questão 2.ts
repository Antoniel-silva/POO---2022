class hora{
    private hora: number
    private minutos: number
    private segundos: number


    constructor(hora: number, minutos: number, segundos: number){
        this.hora = hora
        this.minutos = minutos
        this.segundos = segundos
    }

    Hora(){
        return this.hora
    }

    Minutos(){
        return this.minutos
    }

    Segundos(){
        return this.segundos

    }

    horaCompleta(){
        console.log(this.hora,":",this.minutos,":",this.segundos)
    }
}



let h: hora = new hora(2,32,54)
console.log(h)

console.log(h.Hora())
console.log(h.Minutos())
console.log(h.Segundos())
console.log(h.horaCompleta())