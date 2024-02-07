//array em JS para as perguntas
const perguntas = [
    {
        pergunta: "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
        respostas: [
            "variable x;",
            "let x;",
            "var x;",
            "const x;"
        ],
        correta: 2
    },
    {
        pergunta: "Qual método JavaScript é usado para imprimir algo no console?",
        respostas: [
            "console.log()",
            "print()",
            "log()",
            "console.print()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função JavaScript usada para converter uma string em um número inteiro?",
        respostas: [
            "parseInt()",
            "stringToNumber()",
            "toInteger()",
            "parseInteger()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual operador é usado para comparar dois valores em JavaScript?",
        respostas: [
            "==",
            "===",
            "!=",
            "="
        ],
        correta: 0
    },
    {
        pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
        respostas: [
            "removeLast()",
            "pop()",
            "deleteLast()",
            "splice()"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a maneira correta de acessar o valor de um elemento HTML por seu ID em JavaScript?",
        respostas: [
            "document.getElementByID()",
            "document.selectElementByID()",
            "document.getElementById()",
            "document.findElementByID()"
        ],
        correta: 2
    },
    {
        pergunta: "Qual função JavaScript é usada para arredondar um número para o inteiro mais próximo?",
        respostas: [
            "round()",
            "ceil()",
            "floor()",
            "toFixed()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a estrutura de controle usada para repetir um bloco de código até que uma condição seja falsa?",
        respostas: [
            "if",
            "switch",
            "for",
            "while"
        ],
        correta: 3
    },
    {
        pergunta: "Qual é o seletor CSS usado para selecionar um elemento pelo seu ID?",
        respostas: [
            "id()",
            ".",
            "*",
            "#"
        ],
        correta: 3
    },
    {
        pergunta: "Qual é a sintaxe correta para criar uma função em JavaScript?",
        respostas: [
            "function = minhaFuncao() {}",
            "myFunction() = function {}",
            "function: minhaFuncao() {}",
            "function minhaFuncao() {}"
        ],
        correta: 3
    }
];

//querySelector busca elementos de arquivo
//# indica que procura pelo id

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')


// for = loop ou laço de repetição
// esse for vai transformar item para cada pergunta da minha const perguntas
for(const item of perguntas) {
  
  //clona  o template do meu HTML para a const quizItem (para 1 item apenas)

  const quizItem = template.content.cloneNode(true)
  //busca o <h3> e modifica para cada pergunta
  quizItem.querySelector('h3').textContent = item.pergunta
    
  //um for dentro de outro for
  //esse for vai criar um loop para pegar todas as respostas
  //para cada resposta de item.reposta, faça:
  for (let resposta of item.respostas){
    //clona o modelo do <dl> e <dt> lá do meu HTML para as minhas respostas criadas no const perguntas  
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    //adiciona cada resposta em cada span do meu HTML
    dt.querySelector('span').textContent = resposta
    //atribuir name para cada uma das perguntas do meu input
    //
    dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
    //dar um value diferente para uma das nossas respostas, value indo de 0 a 3
    quizItem.querySelector('input').value = item.respostas.indexOf(resposta)


    //adicionando na tela todos os meus dl, que são minhas respostas
    quizItem.querySelector('dl').appendChild(dt)
    
  }

  //remove o ('dl dt') que corresponde ao modelo das minhas respostas, que é o 'Resposta A', junto do seu span e tudo
  quizItem.querySelector('dl dt').remove()

  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
}



