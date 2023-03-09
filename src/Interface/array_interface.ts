/*
interface tecnologiaProps{
    id:string;
    nome: string;
    slug?:string[];
}

let Tecnologia1: tecnologiaProps = {
    id: '1',
    nome: 'PHP',
    slug: ['php', 'php-do-zero', 'php12']
}
*/

interface tecnologiaProps{
    id:string;
    nome: string;
    descricao?:string;
}

interface NomesProps{
    tecnologia: tecnologiaProps[];
}

let FrontEnd:NomesProps = {
    tecnologia: [
        {
            id: '1',
            nome:'Reactjs',
            descricao: 'Biblioteca para criar interfaces'
        },
        {
            id: '02',
            nome:'Vue'
        }
    ]
}