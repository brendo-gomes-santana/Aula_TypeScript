interface IlojaProps{
    nome: string;
    endereco: string;
    status: boolean;
}

const BurguerK: IlojaProps = {
    nome: 'Brendo',
    endereco: 'Rua x',
    status: true,
}


function novaLoja({nome, endereco, status}: IlojaProps){
    console.log(`loja ${nome} criado com sucesso`)
    console.log(`o enderenço da loja ${endereco}`)
    console.log(`status da loja ${status}`)
 }

novaLoja({
    nome: 'brendo',
    endereco: 'videp',
    status: false,
})