"use strict";
function totalVendas(...vendas) {
    const quantidadesVendas = vendas.length;
    console.log(`Você fez ${quantidadesVendas} vendas hoje!`);
}
totalVendas(1);
function mostrarNome(...nome) {
    nome.map(nome => {
        console.log(nome);
    });
}
mostrarNome('brendo', 'matheus');
