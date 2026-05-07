
class Conta {

    constructor() {
        this._nomeCorrentista = "";
        this._banco = "";
        this._numero = "";
        this._saldo = 0;
    }

    get nomeCorrentista() {
        return this._nomeCorrentista;
    }

    set nomeCorrentista(valor) {
        this._nomeCorrentista = valor;
    }

    get banco() {
        return this._banco;
    }

    set banco(valor) {
        this._banco = valor;
    }

    get numero() {
        return this._numero;
    }

    set numero(valor) {
        this._numero = valor;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }
}

class Corrente extends Conta {

    constructor() {
        super();
        this._saldoEspecial = 0;
    }

    get saldoEspecial() {
        return this._saldoEspecial;
    }

    set saldoEspecial(valor) {
        this._saldoEspecial = valor;
    }
}

class Poupanca extends Conta {

    constructor() {
        super();
        this._juros = 0;
        this._vencimento = "";
    }

    get juros() {
        return this._juros;
    }

    set juros(valor) {
        this._juros = valor;
    }

    get vencimento() {
        return this._vencimento;
    }

    set vencimento(valor) {
        this._vencimento = valor;
    }
}

function mostrarDados() {

    let corrente = new Corrente();

    corrente.nome = document.getElementById("nome").value;
    corrente.banco = document.getElementById("banco").value;
    corrente.numero = document.getElementById("numero").value;
    corrente.saldo = document.getElementById("saldo").value;
    corrente.saldoEspecial = document.getElementById("saldoEspecial").value;

    let poupanca = new Poupanca();

    poupanca.nome = document.getElementById("nome").value;
    poupanca.banco = document.getElementById("banco").value;
    poupanca.numero = document.getElementById("numero").value;
    poupanca.saldo = document.getElementById("saldo").value;
    poupanca.juros = document.getElementById("juros").value;
    poupanca.vencimento = document.getElementById("vencimento").value;

    document.getElementById("resultado").innerHTML = `
        <h2>Conta Corrente</h2>
        Nome: ${corrente.nome} <br>
        Banco: ${corrente.banco} <br>
        Número: ${corrente.numero} <br>
        Saldo: R$ ${corrente.saldo} <br>
        Saldo Especial: R$ ${corrente.saldoEspecial} <br><br>

        <h2>Conta Poupança</h2>
        Nome: ${poupanca.nome} <br>
        Banco: ${poupanca.banco} <br>
        Número: ${poupanca.numero} <br>
        Saldo: R$ ${poupanca.saldo} <br>
        Juros: ${poupanca.juros}% <br>
        Data de Vencimento: ${poupanca.vencimento}
    `;
}