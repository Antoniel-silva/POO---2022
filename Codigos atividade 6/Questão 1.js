var calculadora = /** @class */ (function () {
    function calculadora(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
    calculadora.prototype.soma = function () {
        return this.operando1 + this.operando2;
    };
    calculadora.prototype.subtracao = function () {
        return this.operando1 - this.operando2;
    };
    return calculadora;
}());
var s1 = new calculadora(6, 5);
console.log(s1);
console.log(s1.soma()); // 11
console.log(s1.subtracao()); // 1
// a execução de soma e subtração foram permitidas sem problemas
