// afirmando algum tipo.

let statusAtual: unknown = 1;

let mudaStatus: number = 0;

mudaStatus = statusAtual as number; // estou afirmando que o statusAtual é de fato um numero!

//outra mandeira de afirmar o tipo.
mudaStatus = <number>statusAtual;

console.log(mudaStatus);

// outro caso
let query: unknown = 'pizza';
let searchTerm: string = query as string;

console.log(searchTerm);