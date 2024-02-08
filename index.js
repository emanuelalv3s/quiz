//array em JS para as perguntas
const perguntas = [
    {
        pergunta: "Qual é a principal área de atuação da engenharia civil?",
        respostas: [
            "Construção de veículos",
            "Desenvolvimento de softwares",
            "Projeto e construção de infraestruturas",
            "Produção de alimentos"
        ],
        correta: 2
    },
    {
        pergunta: "O que um engenheiro civil estuda em relação aos solos?",
        respostas: [
            "Agricultura",
            "Climatologia",
            "Geotecnia",
            "Astronomia"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a principal função de um arquiteto dentro do campo da engenharia civil?",
        respostas: [
            "Projeto estrutural de edifícios",
            "Desenvolvimento de novos materiais de construção",
            "Design estético e funcional de espaços e edifícios",
            "Planejamento urbano e gestão de recursos hídricos"
        ],
        correta: 2
    },
    {
        pergunta: "O que um engenheiro civil estuda em relação às estruturas?",
        respostas: [
            "Comportamento mecânico dos materiais",
            "Métodos de agricultura sustentável",
            "Impacto ambiental das construções",
            "Cálculo e projeto de fundações, pilares, lajes e vigas"
        ],
        correta: 3
    },
    {
        pergunta: "O que é o CREA (Conselho Regional de Engenharia e Agronomia) e qual é a sua importância para os engenheiros civis?",
        respostas: [
            "É uma norma internacional que regulamenta a construção civil",
            "É uma instituição que oferece cursos de capacitação para engenheiros",
            "É um órgão responsável pela regulamentação e fiscalização das atividades profissionais da área de engenharia",
            "É um prêmio concedido aos engenheiros mais destacados"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a etapa inicial de um projeto de engenharia civil?",
        respostas: [
            "Execução",
            "Planejamento",
            "Controle de qualidade",
            "Manutenção"
        ],
        correta: 1
    },
    {
        pergunta: "O que é o concreto armado?",
        respostas: [
            "Um tipo de madeira resistente à umidade",
            "Um material composto por cimento, areia, brita e água reforçado com barras de aço",
            "Um tipo de aço utilizado em construções",
            "Um método de construção sustentável"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função de uma estaca em uma construção civil?",
        respostas: [
            "Apoiar a estrutura de um edifício",
            "Proteger a obra contra incêndios",
            "Fornecer iluminação para o canteiro de obras",
            "Controlar a temperatura dentro do edifício"
        ],
        correta: 0
    },
    {
        pergunta: "O que significa a sigla 'ABNT' em relação à engenharia civil?",
        respostas: [
            "Associação Brasileira de Normas Técnicas",
            "Agência Brasileira de Normas e Testes",
            "Associação Brasileira de Novas Tecnologias",
            "Agência Brasileira de Normas e Tecnologias"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o objetivo da norma NBR 6118 em relação à engenharia civil?",
        respostas: [
            "Padronizar as dimensões dos tijolos cerâmicos",
            "Estabelecer critérios para a fabricação de cabos de aço",
            "Regulamentar o uso de vidros em construções",
            "Definir os requisitos para o projeto e execução de estruturas de concreto armado"
        ],
        correta: 3
    }
];

//querySelector busca elementos de arquivo
//# indica que procura pelo id

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

//new é para criação de coisas novas, Set() é usado para adicionar ou tirar sem nunca repetir
const corretas = new Set()
// cria uma const e atribui o valor do total das perguntas, o .length faz a conta de quantos itens existem no array perguntas
const totalDePerguntas = perguntas.length
//cria uma cons para pegar o id acertos e o span lá do HTML
const mostrarTotal = document.querySelector('#acertos span')
//modifica a const mostrarTotal e atribui novo valor contatenado
mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas

// for = loop ou laço de repetição
// esse for vai transformar item para cada pergunta da minha const perguntas
for(const item of perguntas) {
  
  //clona  o template do meu HTML para a const quizItem (para 1 item apenas)

  const quizItem = template.content.cloneNode(true)
  //busca o <h3> e modifica para cada pergunta
  quizItem.querySelector('h3').textContent = item.pergunta
    
  //um for dentro de outro for
  //esse for vai criar um loop para pegar todas as respostas
  //para cada resposta de item.resposta, faça:
  for (let resposta of item.respostas){
    //clona o modelo do <dl> e <dt> lá do meu HTML para as minhas respostas criadas no const perguntas  
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    //adiciona cada resposta em cada span do meu HTML
    dt.querySelector('span').textContent = resposta
    //atribuir name para cada uma das perguntas do meu input
    //
    dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
    //dar um value diferente para uma das nossas respostas, value indo de 0 a 3
    dt.querySelector('input').value = item.respostas.indexOf(resposta)

    //evento de mudança de input na tela, digamos que executa um novo comando quando clicar - input
    //onchange necessita de uma função quando estiver usando (arrow function)
    //event vai ser a nossa mudança quando eu clicar, mudar o input
    dt.querySelector('input').onchange = (event) => {
       //criando constante estaCorreta e comparando se meu clique é == ao item correto (item.correta), retorno booleam (false ou true)
       //operador == serve para comparação de valores sem considerar o tipo
       //operador === serve para comparação estrita de valores considerando o tipo
       const estaCorreta = event.target.value == item.correta
       
       corretas.delete(item)
       
       //cria uma condição, só entra no código estaCorreta caso voce acerte o item correto
       if (estaCorreta) {
        corretas.add(item)
       }

       //modifica a const mostrarTotal e atribui novo valor contatenado
        mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas
    }
    //adicionando na tela todos os meus dl, que são minhas respostas
    quizItem.querySelector('dl').appendChild(dt)
    
  }

  //remove o ('dl dt') que corresponde ao modelo das minhas respostas, que é o 'Resposta A', junto do seu span e tudo
  quizItem.querySelector('dl dt').remove()

  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
}



