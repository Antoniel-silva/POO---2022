class Hotel {
    quantReserva : number;
    constructor(quantReserva: number) {
        this.quantReserva = quantReserva
    }
    
    adicionarReserva() : void {
        this.quantReserva++;
    }
}

//class Hotel {
//    quantReservas : number;
//    adicionarReserva() : void {
//    quantReservas++;
//    }
//    }

// Haverá um problema de compilação pois as variáveis quantReserva não foram inicializadas conforme o codigo acima (forma correta do código)