"use strict";
const novoCurso = {
    id: '1',
    nome: 'Ts',
    preco: 150,
    promocao: (preco) => {
        console.log('preço total: ', preco);
    }
};
console.log(novoCurso.promocao(250));
