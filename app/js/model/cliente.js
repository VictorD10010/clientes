class Cliente {
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }
    get getNome() {
        return this.nome;
    }
    get getCpf() {
        return this.cpf;
    }
    get getConta() {
        return this._conta;
    }
    set getConta(conta) {
        this.getConta = conta;
    }
}
