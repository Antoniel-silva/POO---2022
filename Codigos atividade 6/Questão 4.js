var Conta = /** @class */ (function () {
    function Conta(numero, saldoInicial) {
        this._numero = numero;
        this._saldo = saldoInicial;
    }
    Object.defineProperty(Conta.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Conta.prototype, "saldo", {
        get: function () {
            return this._saldo;
        },
        enumerable: false,
        configurable: true
    });
    Conta.prototype.sacar = function (valor) {
        this._saldo = this._saldo - valor;
    };
    Conta.prototype.depositar = function (valor) {
        this._saldo = this._saldo + valor;
    };
    Conta.prototype.transferir = function (contaDestino, valor) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    };
    return Conta;
}());
var Banco = /** @class */ (function () {
    function Banco() {
        this._contas = [];
    }
    Banco.prototype.inserir = function (conta) {
        var contaConsultada = this.consultar(conta.numero);
        if (contaConsultada == null) {
            this._contas.push(conta);
        }
    };
    Banco.prototype.consultar = function (numero) {
        var contaConsultada;
        for (var _i = 0, _a = this._contas; _i < _a.length; _i++) {
            var conta_1 = _a[_i];
            if (conta_1.numero == numero) {
                contaConsultada = conta_1;
                break;
            }
        }
        return contaConsultada;
    };
    Banco.prototype.consultarPorIndice = function (numero) {
        var indice = -1;
        for (var i = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero == numero) {
                indice = i;
                break;
            }
        }
        return indice;
    };
    Banco.prototype.alterar = function (conta) {
        var indice = this.consultarPorIndice(conta.numero);
        if (indice != -1) {
            this._contas[indice] = conta;
        }
    };
    Banco.prototype.excluir = function (numero) {
        var indice = this.consultarPorIndice(numero);
        if (indice != -1) {
            for (var i = indice; i < this._contas.length; i++) {
                this._contas[i] = this._contas[i + 1];
            }
            this._contas.pop();
        }
    };
    Banco.prototype.depositar = function (numero, valor) {
        var contaConsultada = this.consultar(numero);
        if (contaConsultada != null) {
            contaConsultada.depositar(valor);
        }
    };
    Banco.prototype.sacar = function (numero, valor) {
        var contaConsultada = this.consultar(numero);
        if (contaConsultada != null) {
            contaConsultada.sacar(valor);
        }
    };
    Banco.prototype.transferir = function (numeroDebito, numeroCredito, valor) {
        var contaCredito = this.consultar(numeroCredito);
        var contaDebito = this.consultar(numeroDebito);
        if (contaCredito != null && contaDebito != null) {
            contaDebito.transferir(contaCredito, valor);
        }
    };
    Banco.prototype.calcularQuantidadeContas = function () {
        return this._contas.length;
    };
    Banco.prototype.calcularTotalSaldos = function () {
        var totalSaldo = 0;
        for (var _i = 0, _a = this._contas; _i < _a.length; _i++) {
            var conta_2 = _a[_i];
            totalSaldo += conta_2.saldo;
        }
        return totalSaldo;
    };
    Banco.prototype.calcularMediaSaldos = function () {
        return this.calcularTotalSaldos() / this.calcularQuantidadeContas();
    };
    return Banco;
}());
var conta = new Conta("1", 100);
var b = new Banco();
b.inserir(conta);
b.inserir(new Conta("1", 20));
console.log(conta.saldo);
b.inserir(new Conta("2", 200));
b.transferir("1", "2", 10);
console.log(b.consultar("1").saldo);
console.log(b.consultar("2").saldo);
console.log(b.calcularQuantidadeContas());
console.log(b.calcularTotalSaldos());
console.log(b.calcularMediaSaldos());
