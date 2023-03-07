function login(username: string /*| number*/):boolean /* | string */{ //void não vai return nada. fazer um union numa função não é uma boa praticar.
    console.log(`Bem Vindo ${username}`);
    
    //return username
    return true; // return username
}

const returnoFuncao = login('brendo')

console.log(returnoFuncao);


let n1: number = 10;
let n2: string = '25';
let n3: number = 2;

function soma(valor1:number, valor2:number):number{
    let soma = valor1 + valor2;
    return soma;
}

//console.log(soma(n1, n2)); ocorreu um erro, pq a função peder dois numeros
console.log(soma(n1,n3));



// outro modelo
function CNH(idade:number): string{
    const permissao = 2023 - idade;

    if(permissao > 18){
        return 'Pode tirar CNH'
    }else{
        return 'ainda não pode tirar cnh'
    }

}

console.log(CNH(21))