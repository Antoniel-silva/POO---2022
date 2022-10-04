class Conta {
    numero: string;
    saldo: number;
    cliente: string;

    constructor(numero: string, saldo: number, cliente: string) {
        this.numero = numero;
        this.saldo = saldo;
        this.cliente = cliente;
    }

    sacar(valor: number): void {
        this.saldo = this.saldo - valor;
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    /*get nomeCliente() {
        return this.cliente;
    }*/

    transferencia(contaDestino: Conta, valor: number) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }

    equals(conta: Conta): boolean {
        return (this.numero == conta.numero && 
                this.cliente == conta.cliente);
    }
}

let c1: Conta = new Conta("1",100,"Antoniel");
let c2: Conta = new Conta("2",100,"Zuzu");
let c3: Conta;
c1 = c2;
c3 = c1;
c1.sacar(10);
c1.transferencia(c2,50);
console.log(c1.consultarSaldo());
console.log(c2.consultarSaldo());
console.log(c3.consultarSaldo());