class Clientes {
    constructor() {
        this.clientes = new Array();
        this.clientes.push();
    }
    inserir(cliente) {
        this.clientes.push(cliente);
    }
    remover(cpf) {
        const cpfRemover = this.pesquisar(cpf);
        if (cpfRemover) {
            const indiceCpf = this.clientes.indexOf(cpfRemover);
            if (indiceCpf > -1) {
                this.clientes.splice(indiceCpf, 1);
            }
        }
    }
    pesquisar(cpf) {
        return this.clientes.find(cliente => cliente.cpf === cpf);
    }
    listar() {
        return this.clientes;
    }
}
