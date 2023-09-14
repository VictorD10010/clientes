class Clientes{


    clientes: Array<Cliente>;

    constructor() {
        this.clientes = new Array<Cliente>();
        this.clientes.push();
    }

    inserir(cliente: Cliente): void {
        this.clientes.push(cliente);
    }

    remover(cpf: string): void {
        const cpfRemover = this.pesquisar(cpf);
        if (cpfRemover) {
            const indiceCpf = this.clientes.indexOf(cpfRemover);
            if (indiceCpf > -1) {
                this.clientes.splice(indiceCpf, 1);
            }
        }
    }

    pesquisar(cpf: string): Cliente {
        return this.clientes.find(
            cliente => cliente.cpf === cpf
        );
    }

    listar(): Array<Cliente> {
        return this.clientes;
    }

}