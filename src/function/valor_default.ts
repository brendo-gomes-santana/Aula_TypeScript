// como deixar um valor por default ou deixar ele opcional.
//quando tem ?, que dizer que é opcional
// quando coloquei (nome = 'aluno'), quero dizer que vai ser opcional, só se a pessoa não colocar nada vai ter o nome de aluno.
function cadastro(email:string, senha:string, nome = 'aluno', idade?:number):void{
    let data = {email, senha, nome, idade};
    console.log(data)
}

cadastro('brendogs2021@gmail.com', '123',)

//segundo exemplo
function cadastroLoja(nome:string, email:string, status = false):boolean{
    console.log(nome, email);
    console.log(`Status atual da loja: ${status}`);
    return status;
}

cadastroLoja('brendo', 'brendo@gmail.com')