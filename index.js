//array em JS para as perguntas
const perguntas = [
    {
        pergunta: "Qual é o principal objetivo da engenharia de materiais?",
        respostas: [
            "Desenvolver novos materiais",
            "Projetar estruturas metálicas",
            "Desenvolver novas técnicas de fabricação",
            "Estudar a resistência dos materiais"
        ],
        correta: 0
    },
    {
        pergunta: "Qual dos seguintes não é um dos principais grupos de materiais estudados na engenharia de materiais?",
        respostas: [
            "Metais",
            "Polímeros",
            "Madeira",
            "Cerâmicas"
        ],
        correta: 2
    },
    {
        pergunta: "O que é a microestrutura de um material?",
        respostas: [
            "A forma macroscópica do material",
            "A estrutura atômica do material",
            "A estrutura cristalina do material",
            "A estrutura visível a olho nu do material"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a técnica usada para modificar as propriedades de um material através do controle da temperatura e do resfriamento?",
        respostas: [
            "Forjamento",
            "Fundição",
            "Tratamento térmico",
            "Laminação"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o principal objetivo do tratamento térmico de metais?",
        respostas: [
            "Melhorar a resistência à corrosão",
            "Aumentar a dureza",
            "Diminuir a condutividade térmica",
            "Reduzir a ductilidade"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o processo de revestir um metal com outro metal por meio de um processo eletroquímico?",
        respostas: [
            "Galvanização",
            "Anodização",
            "Cromagem",
            "Eletrodeposição"
        ],
        correta: 3
    },
    {
        pergunta: "Qual é o termo usado para descrever a propriedade de um material de se deformar permanentemente sob ação de uma carga?",
        respostas: [
            "Ductilidade",
            "Elasticidade",
            "Tenacidade",
            "Resiliência"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a propriedade de um material que descreve sua capacidade de resistir a forças externas sem se deformar ou se romper?",
        respostas: [
            "Dureza",
            "Tenacidade",
            "Resistência",
            "Elasticidade"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o termo usado para descrever a capacidade de um material de absorver energia sem se romper?",
        respostas: [
            "Dureza",
            "Elasticidade",
            "Resiliência",
            "Resistência"
        ],
        correta: 2
    },
    {
        pergunta: "O que é um polímero na engenharia de materiais?",
        respostas: [
            "Um metal",
            "Um composto cerâmico",
            "Um material composto",
            "Uma macromolécula orgânica"
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


//const mostrarTotal = document.querySelector('#acertos span')
//modifica a const mostrarTotal e atribui novo valor contatenado
//mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas




// for = loop ou laço de repetição
// esse for vai transformar item para cada pergunta da minha const perguntas
for(const item of perguntas) {
  
  //clona  o template do meu HTML para a const quizItem (para 1 item apenas)
  const quizItem = template.content.cloneNode(true);
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





// LOGICA para limpar selecao dos itens individualmente para cada pergunta
// Iterar sobre cada pergunta
document.querySelectorAll('.quiz-item').forEach((item, index) => {
    // Encontrar o botão dentro da div quiz-item atual
    const resetButton = item.querySelector('.reset-button');
    
    // Adicionar um evento de clique ao botão
    resetButton.addEventListener('click', () => {
        // Encontrar todas as opções de resposta para esta pergunta
        const options = item.querySelectorAll('input[type="radio"]');
        
        // Iterar sobre todas as opções e desmarcar
        options.forEach(option => {
            option.checked = false;
        });

    });
});





// LOGICA para limpar selecao de TODOS os itens do meu quiz
// Adicionando evento de clique ao botão de limpar respostas
const limparRespostasBtn = document.getElementById('limparRespostas');
limparRespostasBtn.addEventListener('click', () => {
    // Desmarca todos os inputs de resposta
    const inputs = document.querySelectorAll('input[type="radio"]');
    inputs.forEach(input => {
        input.checked = false;
    });
    // Atualiza a exibição do total de respostas corretas
    mostrarTotal.textContent = "0 de " + totalDePerguntas;
    
});







// Selecione o botão "Enviar Respostas"
const enviarRespostasBtn = document.getElementById('enviarRespostasBtn');

// Adicione um ouvinte de evento de clique ao botão
enviarRespostasBtn.addEventListener('click', function() {
    //alert("Botão 'Enviar Respostas' clicado!"); // Mensagem para depuração

    // Selecione o elemento main que contém todo o conteúdo
    const mainElement = document.querySelector('main');

    // Verifique se o elemento main foi selecionado corretamente
    //alert(mainElement); // Mensagem para depuração

    // Oculte o elemento main
    mainElement.style.display = 'none';

    // Calcule o número de respostas corretas
    const numeroDeAcertos = corretas.size;

    // Verifique se o número de acertos está correto
    //alert(`Número de acertos: ${numeroDeAcertos}`); // Mensagem para depuração

    // Selecione o elemento que exibe o número de acertos
    const acertosElement = document.getElementById('acertosPag');

    // Verifique se o elemento de acertos foi selecionado corretamente
    ////alert(acertosElement); // Mensagem para depuração

    // Atualize o texto para mostrar o número de acertos
    //acertosElement.innerHTML = `<strong>Acertos:</strong> ${numeroDeAcertos} de 10`;
    //acertosElement.style.display = 'block';
    // Verifique se a atualização do texto foi feita corretamente
   //alert(acertosElement.innerHTML); // Mensagem para depuração


   const mostrarTotal = document.querySelector('#acertosPag span')
    //modifica a const mostrarTotal e atribui novo valor contatenado
    mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas

    acertosPag.style.display = 'block';

    obg.style.display = 'block';
});





