interface JogoProps{
    readonly id:string;
    nome: string;
    descricao: string;
    plataforma: string[];
}

const left4dead: JogoProps = {
    id: '123',
    nome: 'Lef 4 Dead 2',
    descricao: 'Jogo de ação e tiro',
    plataforma: ['PS5', 'PC']
}

interface DLC extends JogoProps {
    jogoOrigial: JogoProps;
    novoConteudo: string[];
}

const Left4DeadDLC: DLC = {
    id: '30',
    nome: 'Left 4 Dead 2 - Novos Mapas',
    descricao: '4 novos mapas jogar online',
    plataforma: ["PS5", 'pc'],
    novoConteudo: ['Modo Coop', 'Mais 5 horas de jogo', 'Medalhas'],
    jogoOrigial: left4dead,
}