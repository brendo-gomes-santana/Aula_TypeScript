let estaAutenticado: boolean = true;

let codeStatus: number = 1;

// tudo que for diferente de zero, string vazia, underfined, será verdadeiro.
estaAutenticado = Boolean(codeStatus);

console.log(estaAutenticado);