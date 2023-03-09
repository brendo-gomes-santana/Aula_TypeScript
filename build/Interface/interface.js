"use strict";
const BurguerK = {
    nome: 'Brendo',
    endereco: 'Rua x',
    status: true,
};
function novaLoja({ nome, endereco, status }) {
    console.log(`loja ${nome} criado com sucesso`);
    console.log(`o enderenço da loja ${endereco}`);
    console.log(`status da loja ${status}`);
}
novaLoja({
    nome: 'brendo',
    endereco: 'videp',
    status: false,
});
