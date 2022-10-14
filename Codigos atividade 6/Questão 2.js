var hora = /** @class */ (function () {
    function hora(hora, minutos, segundos) {
        this.hora = hora;
        this.minutos = minutos;
        this.segundos = segundos;
    }
    hora.prototype.Hora = function () {
        return this.hora;
    };
    hora.prototype.Minutos = function () {
        return this.minutos;
    };
    hora.prototype.Segundos = function () {
        return this.segundos;
    };
    hora.prototype.horaCompleta = function () {
        console.log(this.hora, ":", this.minutos, ":", this.segundos);
    };
    return hora;
}());
var h = new hora(2, 32, 54);
console.log(h);
console.log(h.Hora());
console.log(h.Minutos());
console.log(h.Segundos());
console.log(h.horaCompleta());
