"use strict";
function login(username) {
    console.log(`Bem Vindo ${username}`);
    return true;
}
const returnoFuncao = login('brendo');
console.log(returnoFuncao);
let n1 = 10;
let n2 = '25';
let n3 = 2;
function soma(valor1, valor2) {
    let soma = valor1 + valor2;
    return soma;
}
console.log(soma(n1, n3));
function CNH(idade) {
    const permissao = 2023 - idade;
    if (permissao > 18) {
        return 'Pode tirar CNH';
    }
    else {
        return 'ainda não pode tirar cnh';
    }
}
console.log(CNH(21));
