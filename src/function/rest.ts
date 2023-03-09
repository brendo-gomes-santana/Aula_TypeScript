/*
function totalVendas(venda1:number, venda2:number, venda3:number){
    const total = venda1 + venda2 + venda3;
    return total
}

totalVendas(10,10,10)

*/
//quando coloco ... antes do params, quer dizer que vai aceitar varios params.
function totalVendas(...vendas:number[]){
    const quantidadesVendas = vendas.length;

    console.log(`Você fez ${quantidadesVendas} vendas hoje!` )
}

totalVendas(1)

function mostrarNome(...nome:string[]){
    nome.map( nome => {
        console.log(nome);
    })
}

mostrarNome('brendo', 'matheus')