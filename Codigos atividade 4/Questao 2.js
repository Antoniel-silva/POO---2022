var Hotel = /** @class */ (function () {
    function Hotel(quantReserva) {
        this.quantReserva = quantReserva;
    }
    Hotel.prototype.adicionarReserva = function () {
        this.quantReserva++;
    };
    return Hotel;
}());
var hotel = new Hotel(2);
console.log(hotel.quantReserva);

// foram adicionados let hotel : Hotel = new Hotel(2); console.log(hotel.quantReservas);
// ao final do codigo e teve saida 2
