class Hotel {
    quantReserva : number;
    constructor(quantReserva: number) {
        this.quantReserva = quantReserva
    }
    
    adicionarReserva() : void {
        this.quantReserva++;
    }
}

let hotel : Hotel = new Hotel(2);
console.log(hotel.quantReserva);