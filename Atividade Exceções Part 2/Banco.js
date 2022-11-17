var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AplicacaoError = /** @class */ (function (_super) {
    __extends(AplicacaoError, _super);
    function AplicacaoError(message) {
        return _super.call(this, message) || this;
    }
    return AplicacaoError;
}(Error));
var SaldoInsuficienteError = /** @class */ (function (_super) {
    __extends(SaldoInsuficienteError, _super);
    function SaldoInsuficienteError(message) {
        return _super.call(this, message) || this;
    }
    return SaldoInsuficienteError;
}(AplicacaoError));
var ContaInexistenteError = /** @class */ (function (_super) {
    __extends(ContaInexistenteError, _super);
    function ContaInexistenteError(message) {
        return _super.call(this, message) || this;
    }
    return ContaInexistenteError;
}(AplicacaoError));
//Resolução da 4 questão
var ValorInvalidoError = /** @class */ (function (_super) {
    __extends(ValorInvalidoError, _super);
    function ValorInvalidoError(messagem) {
        return _super.call(this, messagem) || this;
    }
    return ValorInvalidoError;
}(AplicacaoError));
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
        if (valor > this._saldo) {
            throw new Error('Seu saldo é insuficiente!');
        }
        this._saldo = this._saldo - valor;
    };
    Conta.prototype.depositar = function (valor) {
        this._saldo = this._saldo + valor;
    };
    Conta.prototype.transferir = function (contaDestino, valor) {
        this.validarValor(valor);
        this.sacar(valor);
        contaDestino.depositar(valor);
        console.log("O valor solicitado foi transferido com sucesso!");
    };
    Conta.prototype.validarValor = function (valorAtual) {
        if (valorAtual <= 0) {
            throw new ValorInvalidoError("O valor da transferencia não pode ser um valor menor ou igual a 0.");
        }
    };
    return Conta;
}());
var Banco = /** @class */ (function () {
    function Banco() {
        this._contas = [];
    }
    Banco.prototype.inserir = function (conta) {
        var contaConsultada = this.consultar1(conta.numero);
        if (contaConsultada == null) {
            this._contas.push(conta);
            console.log("A conta foi inserida com sucesso!");
        }
        else {
            console.log("Conta existente, não é possivel adicionar!");
        }
    };
    Banco.prototype.consultar1 = function (numero) {
        var contaConsultada;
        for (var _i = 0, _a = this._contas; _i < _a.length; _i++) {
            var conta = _a[_i];
            if (conta.numero == numero) {
                contaConsultada = conta;
                break;
            }
        }
        return contaConsultada;
    };
    Banco.prototype.consultar = function (numero) {
        var contaConsultada;
        for (var _i = 0, _a = this._contas; _i < _a.length; _i++) {
            var conta = _a[_i];
            if (conta.numero == numero) {
                contaConsultada = conta;
                break;
            }
        }
        if (contaConsultada == null) {
            throw new ContaInexistenteError("Conta não localizada!");
        }
        else {
            console.log("Sucesso!");
        }
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
    Banco.prototype.consultarPorIndice1 = function (numero) {
        var indice = -1;
        for (var i = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero == numero) {
                indice = i;
                break;
            }
        }
    };
    Banco.prototype.alterar = function (conta) {
        var indice = this.consultarPorIndice(conta.numero);
        this._contas[indice] = conta;
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
        contaConsultada.depositar(valor);
    };
    Banco.prototype.sacar = function (numero, valor) {
        var contaConsultada = this.consultar(numero);
        contaConsultada.sacar(valor);
    };
    Banco.prototype.transferir = function (numeroDebito, numeroCredito, valor) {
        var contaCredito = this.consultar(numeroCredito);
        var contaDebito = this.consultar(numeroDebito);
        contaDebito.transferir(contaCredito, valor);
    };
    Banco.prototype.calcularQuantidadeContas = function () {
        return this._contas.length;
    };
    Banco.prototype.calcularTotalSaldos = function () {
        var totalSaldo = 0;
        for (var _i = 0, _a = this._contas; _i < _a.length; _i++) {
            var conta = _a[_i];
            totalSaldo += conta.saldo;
        }
        return totalSaldo;
    };
    Banco.prototype.calcularMediaSaldos = function () {
        return this.calcularTotalSaldos() / this.calcularQuantidadeContas();
    };
    return Banco;
}());
var p1 = new Conta("10", 200);
var p2 = new Conta("20", 500);
var b1 = new Banco();
//b1.inserir(p1)
//b1.inserir(p2)
//b1.consultar("24")
//b1.consultar("10")
p2.transferir(p1, 2);
//console.log(b1)
