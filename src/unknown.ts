// tipo desconhecido -> quando vc não sabe o tipo que vai receber.
// any você pode receber qualquer valor.
let total: unknown;

total = 150;
total = '150';

total = {
    total: 150,
}
let totalPedido: unknown = 15;
let IdPedido: any = 123;
let Entregador: number = IdPedido;

let totalEntregar: any = totalPedido;
// valor do tipo unknown só podem ser atribuidos ao tipo unkown ou any.
console.log(Entregador);