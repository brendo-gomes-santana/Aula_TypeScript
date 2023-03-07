let numero: number[]; // quando colocar [] depois do tipo, ele só vai aceitar o tipo colocando. lembrando que [] é a definição de uma array.
let letra: string[]; 
let letra_numero: (number | string)[]; // mesclando union com uma array.

numero = [1,2];
numero.push(3)
console.log(numero);


letra = ["a", "b"];
letra.push("c");
console.log(letra);

letra_numero = [ "a", 1 ];
letra_numero.push('b', 2);
console.log(letra_numero);
