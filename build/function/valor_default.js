"use strict";
function cadastro(email, senha, nome = 'aluno', idade) {
    let data = { email, senha, nome, idade };
    console.log(data);
}
cadastro('brendogs2021@gmail.com', '123');
function cadastroLoja(nome, email, status = false) {
    console.log(nome, email);
    console.log(`Status atual da loja: ${status}`);
    return status;
}
cadastroLoja('brendo', 'brendo@gmail.com');
