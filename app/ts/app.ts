let contaController = new ContaController();
let clienteController = new ClienteController();

contaController.listar();
clienteController.listar();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);


const cli1= new Cliente('João Victor','111.222.333-44');

console.log('Cliente: ' + cli1.nome);

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);
