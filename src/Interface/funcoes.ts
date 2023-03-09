interface CursosProps{
    id:string;
    nome:string;
    preco:number;

    //definir apenas a função e o que ela deve esperar e retornar.

    promocao: (preco:number) => void;
}



const novoCurso: CursosProps = {
    id: '1',
    nome:'Ts',
    preco: 150,
    promocao: (preco:number):void => {
        console.log('preço total: ', preco)
    } 
}

console.log(novoCurso.promocao(250))