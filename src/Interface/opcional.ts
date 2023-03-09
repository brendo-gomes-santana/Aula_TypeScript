interface CadastroProps{
    nome?:string;
    email:string;
    status:boolean;
}

const _novoUsuario_: CadastroProps = {
    nome: 'Brendo',
    email: 'brendo@gmail.com',
    status: true,
}

console.log(_novoUsuario_)

function novoUSer(pro: CadastroProps){
    console.log(pro.nome)
}

