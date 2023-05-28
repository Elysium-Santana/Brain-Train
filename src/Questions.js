const predefined = [
  {
    theme: 'CSS',
    questions: [
      {
        question: 'O que significa CSS?',
        options: [
          'Cascading Style Sheets',
          'Creative Style Sheets',
          'Computer Style Sheets',
          'Colorful Style Sheets',
        ],
        correctAnswer: 'Cascading Style Sheets',
        id: 1,
        points: 0,
        repeat: 0,
        date: '2023-05-12',
      },
      {
        question:
          'Qual é a sintaxe básica para selecionar um elemento usando CSS?',
        options: [
          'elemento { estilo }',
          '#elemento { estilo }',
          '.elemento { estilo }',
          '<elemento style="estilo">',
        ],
        correctAnswer: 'elemento { estilo }',
        id: 2,
        points: 0,
        repeat: 0,
        date: '2023-05-10',
      },
      {
        question: 'Como se seleciona um elemento pelo seu ID em CSS?',
        options: [
          '#elemento { estilo }',
          'elemento { estilo }',
          '.elemento { estilo }',
          '<elemento id="elemento" style="estilo">',
        ],
        correctAnswer: '#elemento { estilo }',
        id: 3,
        points: 0,
        repeat: 0,
        date: '2023-05-11',
      },
      {
        question: 'Como se seleciona um elemento pela sua classe em CSS?',
        options: [
          '.elemento { estilo }',
          'elemento { estilo }',
          '#elemento { estilo }',
          '<elemento class="elemento" style="estilo">',
        ],
        correctAnswer: '.elemento { estilo }',
        id: 4,
        points: 0,
        repeat: 3,
        date: '2023-05-02',
      },
      {
        question: 'Como definir a cor de fundo de um elemento em CSS?',
        options: ['background-color', 'color', 'font-color', 'text-color'],
        correctAnswer: 'background-color',
        id: 5,
        points: 0,
        repeat: 3,
        date: '2023-05-16',
      },
      {
        question: 'Como centralizar um elemento na tela horizontalmente?',
        options: [
          'margin: 0 auto;',
          'text-align: center;',
          'display: flex; justify-content: center;',
          'padding: 0 auto;',
        ],
        correctAnswer: 'margin: 0 auto;',
        id: 6,
        points: 0,
        repeat: 3,
        date: '2023-05-15',
      },
      {
        question: 'Como aumentar o tamanho da fonte de um elemento em CSS?',
        options: ['font-size', 'font-style', 'font-family', 'font-weight'],
        correctAnswer: 'font-size',
        id: 7,
        points: 0,
        repeat: 3,
        date: '2023-05-05',
      },
      {
        question:
          'Qual propriedade é usada para adicionar uma borda a um elemento em CSS?',
        options: ['border', 'outline', 'box-shadow', 'margin'],
        correctAnswer: 'border',
        id: 8,
        points: 0,
        repeat: 3,
        date: '2023-05-11',
      },
    ],
  },
  {
    theme: 'Javascript',
    questions: [
      {
        question:
          'Qual é a forma correta de declarar uma variável em JavaScript?',
        options: ['var x = 5;', 'variable x = 5;', 'v x = 5;', 'let x = 5;'],
        correctAnswer: 'var x = 5;',
        id: 1,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: "Qual é a função do operador '===' em JavaScript?",
        options: [
          'Comparar valores e tipos de dados',
          'Atribuir um valor a uma variável',
          'Comparar apenas valores',
          'Nenhuma das anteriores',
        ],
        correctAnswer: 'Comparar valores e tipos de dados',
        id: 2,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: "Qual é a função do método 'push' em um array em JavaScript?",
        options: [
          'Adicionar um elemento no final do array',
          'Remover um elemento do array',
          'Modificar um elemento do array',
          'Nenhuma das anteriores',
        ],
        correctAnswer: 'Adicionar um elemento no final do array',
        id: 3,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: 'O que é uma closure em JavaScript?',
        options: [
          'Uma função que retorna outra função',
          'Um objeto que contém outras funções',
          'Um bloco de código que é executado apenas se uma condição for verdadeira',
          'Uma função que tem acesso a variáveis em seu escopo léxico',
        ],
        correctAnswer:
          'Uma função que tem acesso a variáveis em seu escopo léxico',
        id: 4,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: 'O que é o DOM em JavaScript?',
        options: [
          'Uma linguagem de programação',
          'Um padrão de projeto',
          'Uma API que permite manipular elementos HTML',
          'Um sistema de gerenciamento de banco de dados',
        ],
        correctAnswer: 'Uma API que permite manipular elementos HTML',
        id: 5,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: "Qual é a função do operador '&&' em JavaScript?",
        options: [
          'Retornar o primeiro valor verdadeiro de uma série de valores',
          'Retornar o último valor verdadeiro de uma série de valores',
          'Retornar true se ambos os valores forem verdadeiros',
          'Retornar true se pelo menos um dos valores for verdadeiro',
        ],
        correctAnswer: 'Retornar true se ambos os valores forem verdadeiros',
        id: 6,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question:
          'Qual é o método utilizado para imprimir uma mensagem no console?',
        options: [
          'console.print()',
          'print.console()',
          'console.log()',
          'log.console()',
        ],
        correctAnswer: 'console.log()',
        points: 0,
        repeat: 3,
        date: '1111-11-11',
      },
      {
        question:
          'Qual é o tipo de dado que representa um número inteiro em JavaScript?',
        options: ['int', 'float', 'number', 'integer'],
        correctAnswer: 'number',
        points: 0,
        repeat: 3,
        date: '1111-11-11',
      },
      {
        question:
          'Qual é o operador utilizado para comparar valores e tipos em JavaScript?',
        options: ['===', '==', '!=', '!=='],
        correctAnswer: '===',
        points: 0,
        repeat: 3,
        date: '1111-11-11',
      },
      {
        question:
          'Qual é o método utilizado para remover o último elemento de um array?',
        options: ['pop()', 'shift()', 'slice()', 'splice()'],
        correctAnswer: 'pop()',
        points: 0,
        repeat: 3,
        date: '1111-11-11',
      },
      {
        question:
          'Qual é o método utilizado para adicionar um elemento ao final de um array?',
        options: ['push()', 'shift()', 'slice()', 'splice()'],
        correctAnswer: 'push()',
        points: 0,
        repeat: 3,
        date: '1111-11-11',
      },
      {
        question:
          'Qual é o método utilizado para transformar uma string em uma lista de substrings?',
        options: ['split()', 'join()', 'concat()', 'slice()'],
        correctAnswer: 'split()',
        points: 0,
        repeat: 3,
        date: '1111-11-11',
      },
      {
        question:
          'Qual é o método utilizado para retornar o tamanho de um array?',
        options: ['size()', 'length()', 'count()', 'sizeOf()'],
        correctAnswer: 'length()',
        points: 0,
        repeat: 3,
        date: '1111-11-11',
      },
      {
        question:
          'Qual é o operador utilizado para retornar o valor de uma variável se ela for nula ou indefinida?',
        options: ['??', '||', '&&', '??='],
        correctAnswer: '??',
        points: 0,
        repeat: 3,
        date: '1111-11-11',
      },
      {
        question:
          'Qual é o método utilizado para remover todos os elementos de um array?',
        options: ['clear()', 'removeAll()', 'deleteAll()', 'spliceAll()'],
        correctAnswer: 'spliceAll()',
        points: 0,
        repeat: 3,
        date: '1111-11-11',
      },
      {
        question:
          'Qual é o método utilizado para executar uma função após um determinado tempo em milissegundos?',
        options: ['setTimeout()', 'setInterval()', 'delay()', 'pause()'],
        correctAnswer: 'setTimeout()',
        points: 0,
        repeat: 3,
        date: '1111-11-11',
      },
    ],
  },
];
const customQuestions = [
  {
    theme: 'Conhecimentos gerais',
    questions: [
      {
        question: 'Qual é a capital do Brasil?',
        options: ['São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador'],
        correctAnswer: 'Brasília',
        id: 1,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: 'Qual é o maior animal terrestre?',
        options: ['Elefante', 'Girafa', 'Rinoceronte', 'Hipopótamo'],
        correctAnswer: 'Elefante',
        id: 2,
        points: 3,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: "Quem escreveu a obra 'Grande Sertão: Veredas'?",
        options: [
          'Clarice Lispector',
          'Guimarães Rosa',
          'Machado de Assis',
          'Jorge Amado',
        ],
        correctAnswer: 'Guimarães Rosa',
        id: 3,
        points: 1,
        repeat: 0,
        date: '1111-11-11',
      },
    ],
  },
];
export let questions = { predefined, customQuestions };
const questionsAlterated = window.localStorage.getItem('defined');
if (questionsAlterated) {
  questions = JSON.parse(questionsAlterated);
}
