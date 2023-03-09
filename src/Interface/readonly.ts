//readonly que dizer que não pode ter alteração
interface ProdutoProps{
    readonly id: string;
    nome:string;
    descricao?:string;
}

let produto1: ProdutoProps = {
    id:'1',
    nome: 'tenis descolado',
    descricao: 'tenis bom e legal'
}