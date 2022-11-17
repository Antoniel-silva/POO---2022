class AplicacaoError extends Error{
    constructor(message: string){
        super(message)
    }
}

class SaldoInsuficienteError extends AplicacaoError{
    constructor(message: string){
        super(message)
    }
}

class ContaInexistenteError extends AplicacaoError{
    constructor(message: string){
        super(message)
    }
}



class ValorInvalidoError extends AplicacaoError{
    constructor(messagem: string){
        super(messagem)
    }
}


class Conta {
	private _numero: string;
	private _saldo: number;

    constructor(numero: string, saldoInicial: number) {
		this._numero = numero;
		this._saldo = saldoInicial;
	}
	
	get numero(): string {
		return this._numero;
        
	}

	get saldo(): number {
		return this._saldo;
	}
	
	
	sacar(valor: number): void {
        if (valor > this._saldo) {
            throw new Error('Seu saldo é insuficiente!')
        }
		this._saldo = this._saldo - valor;
	}

	depositar(valor: number): void {
        this.validarValor(valor)
		this._saldo = this._saldo + valor;
	}

	transferir(contaDestino: Conta, valor: number): void {
        this.validarValor(valor)
		this.sacar(valor);
		contaDestino.depositar(valor);
		console.log("O valor solicitado foi transferido com sucesso!")
	}

    private validarValor(valorAtual: number): void{
        if(valorAtual <= 0){
            throw new ValorInvalidoError("O valor solicitado não pode ser um valor menor ou igual a 0.")
        }
    }


}


class Banco {
	private _contas: Conta[] = [];
	
	inserir(conta: Conta): void {
        let contaConsultada = this.consultar1(conta.numero);

        if (contaConsultada == null) {
		    this._contas.push(conta);
            console.log("A conta foi inserida com sucesso!")
        }else{
            console.log("Conta existente, não é possivel adicionar!")
        }
	}

	private consultar1(numero: String): Conta {
		let contaConsultada!: Conta;
		for (let conta of this._contas) {
			if (conta.numero == numero) {
				contaConsultada = conta;
				break;
			}
            
        }
		return contaConsultada;
	}


    consultar(numero: String): Conta {
		let contaConsultada!: Conta;
		for (let conta of this._contas) {
			if (conta.numero == numero) {
				contaConsultada = conta;
				break;
			}
            
        }
        if(contaConsultada == null){
            throw new ContaInexistenteError("Conta não localizada!")
        }else{
            console.log("Sucesso!")
		
	}



	private consultarPorIndice(numero: String): number {
		let indice: number = -1;
		for (let i: number = 0; i < this._contas.length; i++) {
			if (this._contas[i].numero == numero) {
				indice = i;
				break;
			}
		}
		return indice;
	}


    private consultarPorIndice1(numero: String): void {
		let indice: number = -1;
		for (let i: number = 0; i < this._contas.length; i++) {
			if (this._contas[i].numero == numero) {
				indice = i;
				break;
			}
		}
		
	}

	alterar(conta: Conta): void {
		let indice: number = this.consultarPorIndice(conta.numero);
			this._contas[indice] = conta;
		
	}

	excluir(numero: string): void {
		let indice: number = this.consultarPorIndice(numero);
		
		if (indice != -1) {
			for (let i: number = indice; i < this._contas.length; i++) {
				this._contas[i] = this._contas[i+1];
			}

			this._contas.pop();
		} 
	}

	depositar(numero: String, valor: number): void {
		let contaConsultada = this.consultar(numero);
		contaConsultada.depositar(valor);
		
	}

    sacar(numero: String, valor: number): void {
        let contaConsultada = this.consultar(numero);
            contaConsultada.sacar(valor)
    }

    transferir(numeroDebito: string, numeroCredito: string, valor: number){
        let contaCredito: Conta = this.consultar(numeroCredito);
        let contaDebito: Conta = this.consultar(numeroDebito);

        contaDebito.transferir(contaCredito, valor);
        
    }

    calcularQuantidadeContas(): number {
        return this._contas.length;
    }

    calcularTotalSaldos(): number {
        let totalSaldo: number = 0;
        for (let conta of this._contas) {
            totalSaldo += conta.saldo;
        }

        return totalSaldo;
    }

    calcularMediaSaldos() {
        return this.calcularTotalSaldos()/this.calcularQuantidadeContas();
    }

}

let p1: Conta = new Conta("10",200)
let p2: Conta = new Conta("20",500)
let b1: Banco = new Banco()

//b1.inserir(p1)
//b1.inserir(p2)
//b1.consultar("24")
//b1.consultar("10")

//console.log(b1)
