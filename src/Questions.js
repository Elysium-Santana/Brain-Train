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

  {
    theme: 'ReactJs',
    questions: [
      {
        question: 'O que é ReactJS?',
        options: [
          'Uma biblioteca de JavaScript para construção de interfaces de usuário.',
          'Uma linguagem de programação para desenvolvimento web.',
          'Um sistema operacional desenvolvido pela Facebook.',
          'Uma estrutura para criação de bancos de dados.',
        ],
        correctAnswer:
          'Uma biblioteca de JavaScript para construção de interfaces de usuário.',
        points: 2,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: 'Quais são os principais conceitos do ReactJS?',
        options: [
          'Componentes, estado (state) e propriedades (props).',
          'Variáveis, loops e condicionais.',
          'Banco de dados, autenticação e criptografia.',
          'APIs REST, GraphQL e WebSocket.',
        ],
        correctAnswer: 'Componentes, estado (state) e propriedades (props).',
        points: 3,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: 'O que é JSX no contexto do ReactJS?',
        options: [
          'Uma linguagem de marcação usada para escrever componentes React.',
          'Um formato de arquivo de configuração usado no React.',
          'Uma biblioteca para gerenciamento de estado no React.',
          'Uma abreviação para JavaScript XML.',
        ],
        correctAnswer:
          'Uma linguagem de marcação usada para escrever componentes React.',
        points: 2,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: 'Como criar um componente funcional no ReactJS?',
        options: [
          'Usando a classe `Component` do React.',
          'Usando a palavra-chave `function` e retornando JSX.',
          'Definindo uma variável com a função do componente.',
          'Importando um módulo específico do React para criação de componentes funcionais.',
        ],
        correctAnswer: 'Usando a palavra-chave `function` e retornando JSX.',
        points: 2,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: 'O que é o estado (state) em um componente ReactJS?',
        options: [
          'Uma propriedade que define a aparência visual de um componente.',
          'Uma função que manipula eventos de clique em um componente.',
          'Uma forma de persistir dados localmente em um componente.',
          'Um objeto que armazena dados específicos de um componente.',
        ],
        correctAnswer:
          'Um objeto que armazena dados específicos de um componente.',
        points: 3,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question:
          'Como passar propriedades (props) para um componente ReactJS?',
        options: [
          'Através de uma variável global no escopo do componente.',
          'Usando a sintaxe `props={...}` ao renderizar o componente.',
          'Definindo as propriedades diretamente no arquivo de configuração do React.',
          'Passando-as como argumentos ao chamar o componente.',
        ],
        correctAnswer: 'Passando-as como argumentos ao chamar o componente.',
        points: 2,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question:
          'Quais são os principais métodos do ciclo de vida de um componente ReactJS?',
        options: [
          'start(), update(), finish()',
          'componentDidMount(), componentDidUpdate(), componentWillUnmount()',
          'create(), render(), destroy()',
          'init(), execute(), cleanup()',
        ],
        correctAnswer:
          'componentDidMount(), componentDidUpdate(), componentWillUnmount()',
        points: 3,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: 'O que é o React Router e para que ele é usado?',
        options: [
          'Uma biblioteca para gerenciamento de estado no ReactJS.',
          'Uma ferramenta para realizar testes automatizados em componentes React.',
          'Um pacote que permite a criação de animações complexas em componentes React.',
          'Uma solução para o roteamento e navegação em aplicações React.',
        ],
        correctAnswer:
          'Uma solução para o roteamento e navegação em aplicações React.',
        points: 2,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question:
          'Quais são os principais métodos de renderização condicional no ReactJS?',
        options: [
          'if-else, switch-case',
          'renderIf(), renderSwitch()',
          'ifRender(), switchRender()',
          'if statement, operador ternário',
        ],
        correctAnswer: 'if statement, operador ternário',
        points: 2,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: 'Como lidar com formulários no ReactJS?',
        options: [
          'Usando somente tags de input HTML.',
          'Importando uma biblioteca externa para gerenciamento de formulários.',
          'Definindo um estado (state) separado para cada campo de formulário.',
          'Utilizando o estado (state) do componente e manipulando eventos de formulário.',
        ],
        correctAnswer:
          'Utilizando o estado (state) do componente e manipulando eventos de formulário.',
        points: 3,
        repeat: 0,
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
        points: 2,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: 'Qual é o maior animal terrestre?',
        options: ['Elefante', 'Girafa', 'Rinoceronte', 'Hipopótamo'],
        correctAnswer: 'Elefante',
        id: 2,
        points: 7,
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
        points: 4,
        repeat: 0,
        date: '1111-11-11',
      },
    ],
  },
  {
    theme: 'Github',
    questions: [
      {
        question:
          'Qual comando é usado para listar todas as branches em um repositório Git?',
        options: ['git log', 'git add', 'git branch', 'git push'],
        correctAnswer: 'git branch',
        id: 3,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: 'Qual comando é usado para criar uma nova branch no Git?',
        options: ['git branch', 'git checkout', 'git merge', 'git clone'],
        correctAnswer: 'git branch',
        id: 2,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question:
          'Qual comando é usado para trocar para uma branch específica no Git?',
        options: ['git add', 'git checkout', 'git commit', 'git push'],
        correctAnswer: 'git checkout',
        id: 4,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question:
          'Qual comando é usado para mesclar uma branch com a branch atual no Git?',
        options: ['git merge', 'git clone', 'git pull', 'git push'],
        correctAnswer: 'git merge',
        id: 5,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question:
          'Qual comando é usado para enviar alterações locais para um repositório remoto no Git?',
        options: ['git clone', 'git push', 'git pull', 'git commit'],
        correctAnswer: 'git push',
        id: 6,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question:
          'Qual comando é usado para criar uma nova branch local e alternar para ela imediatamente?',
        options: ['git branch', 'git checkout', 'git merge', 'git clone'],
        correctAnswer: 'git checkout',
        id: 7,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: 'Qual comando é usado para excluir uma branch local no Git?',
        options: ['git delete', 'git remove', 'git branch -d', 'git branch -r'],
        correctAnswer: 'git branch -d',
        id: 8,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question:
          'Qual comando é usado para criar uma nova branch local e alternar para ela imediatamente?',
        options: ['git branch', 'git checkout', 'git merge', 'git clone'],
        correctAnswer: 'git checkout',
        id: 7,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question:
          'Qual comando é usado para enviar uma nova branch para um repositório remoto no Git?',
        options: ['git branch', 'git clone', 'git push', 'git commit'],
        correctAnswer: 'git push',
        id: 9,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: 'Qual comando é usado para renomear uma branch no Git?',
        options: [
          'git rename-branch',
          'git mv',
          'git branch -m',
          'git checkout',
        ],
        correctAnswer: 'git branch -m',
        id: 10,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question:
          'Qual comando é usado para mesclar uma branch específica com a branch atual e resolver conflitos no Git?',
        options: ['git merge', 'git rebase', 'git pull', 'git commit'],
        correctAnswer: 'git merge',
        id: 11,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
    ],
  },  
  {
    theme:'P.O.O',
    questions:[
      {
        question: "Qual é a função principal da Máquina Virtual Java (JVM)?",
        options: [
          "Interpretar Bytecode e traduzi-lo para o SO",
          "Converter código Java diretamente em binário",
          "Transformar Bytecode em arquivos de texto",
          "Criar um ambiente para edição de código"
        ],
        correctAnswer: "Interpretar Bytecode e traduzi-lo para o SO",
        id: 92,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "Por que o Java é considerado uma linguagem multiplataforma?",
        options: [
          "O bytecode é interpretado por qualquer JVM",
          "A JVM usa sempre o mesmo Sistema Operacional",
          "O Java é instalado automaticamente em qualquer SO",
          "Os programas são sempre escritos em uma só versão"
        ],
        correctAnswer: "O bytecode é interpretado por qualquer JVM",
        id: 93,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "O que acontece com o código Java após ser compilado?",
        options: [
          "É transformado em .class (bytecode)",
          "É convertido diretamente em binário",
          "Torna-se um arquivo de texto simples",
          "É traduzido para outro código fonte"
        ],
        correctAnswer: "É transformado em .class (bytecode)",
        id: 95,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "O que é o Java Runtime Environment (JRE)?",
        options: [
          "É o conjunto de bibliotecas que compõe a versão do Java",
          "Um software para desenvolvimento de aplicativos Java",
          "A interface gráfica para rodar programas Java no computador",
          "É um programa que converte código Java para C++"
        ],
        correctAnswer: "É o conjunto de bibliotecas que compõe a versão do Java",
        id: 96,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "Qual a função do Garbage Collector (GC) no ambiente Java?",
        options: [
          "Desalocar memória e objetos sem referência",
          "Converter bytecode em código binário",
          "Verificar erros de compilação no código",
          "Gerar relatórios de desempenho em tempo real"
        ],
        correctAnswer: "Desalocar memória e objetos sem referência",
        id: 97,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },{
        question: "O que é o Class Loader na JVM?",
        options: [
          "Espaço utilizado para carregar bytecode e endereços",
          "Sistema que converte Java em código binário direto",
          "Ferramenta que cria interfaces gráficas para aplicativos",
          "Programa que verifica a sintaxe dos códigos em Java"
        ],
        correctAnswer: "Espaço utilizado para carregar bytecode e endereços",
        id: 98,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "Qual é um exemplo de classe presente no Java Runtime Environent?",
        options: [
          "JOptionPane",
          "FileLoader",
          "ByteManager",
          "SystemCheck"
        ],
        correctAnswer: "JOptionPane",
        id: 99,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "Qual tipo inteiro no Java é representado por 8 bits e armazena valores entre -128 e 127?",
        options: [
          "Byte",
          "Short",
          "Int",
          "Long"
        ],
        correctAnswer: "Byte",
        id: 100,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "O tipo Short no Java armazena valores entre quais limites?",
        options: [
          "-32.768 a 32.767",
          "-128 a 127",
          "-2.147.483.648 a 2.147.483.647",
          "-9223372.036.854.775.808 a 9223372.036.854.775.807"
        ],
        correctAnswer: "-32.768 a 32.767",
        id: 101,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "Quantos bits possui o tipo inteiro 'int' no Java?",
        options: [
          "32 bits (4 bytes)",
          "8 bits (1 byte)",
          "16 bits (2 bytes)",
          "64 bits (8 bytes)"
        ],
        correctAnswer: "32 bits (4 bytes)",
        id: 102,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "Qual é o intervalo de valores que o tipo 'long' pode armazenar no Java?",
        options: [
          "-9223372.036.854.775.808 a 9223372.036.854.775.807",
          "-32.768 a 32.767",
          "-128 a 127",
          "-2.147.483.648 a 2.147.483.647"
        ],
        correctAnswer: "-9223372.036.854.775.808 a 9223372.036.854.775.807",
        id: 103,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      
      
      
      
      
      
      
      
      
      
      
      
      
    ]
  },
  {
    theme:'A.P. Orientada a objetos',
    questions: [
      {
        "question": "Como é representada a relação de inclusão (`<<include>>`) entre casos de uso em UML?",
        "options": [
          "Linha sólida com seta apontando para o caso de uso que inclui.",
          "Linha tracejada com seta apontando para o caso de uso incluído e estereótipo `<<include>>`.",
          "Linha tracejada sem seta, apenas com o texto 'inclui'.",
          "Linha contínua com seta aberta e estereótipo `<<extend>>`."
        ],
        "correctAnswer": "Linha tracejada com seta apontando para o caso de uso incluído e estereótipo `<<include>>`.",
        "id": 1,
        "points": 0,
        "repeat": 0,
        "date": "1111-11-11"
      },
      {
        "question": "Como atores são representados em diagramas de caso de uso UML?",
        "options": [
          "Elipses posicionadas dentro do limite do sistema.",
          "Figuras de palito (stick figures) fora do limite do sistema.",
          "Retângulos com o nome do ator sublinhado.",
          "Ícones de usuário coloridos dentro do sistema."
        ],
        "correctAnswer": "Figuras de palito (stick figures) fora do limite do sistema.",
        "id": 2,
        "points": 0,
        "repeat": 0,
        "date": "1111-11-11"
      },
      {
        "question": "Qual elemento gráfico representa um caso de uso em UML?",
        "options": [
          "Retângulo com bordas arredondadas.",
          "Elipse com o nome da funcionalidade.",
          "Hexágono conectado a atores.",
          "Losango com estereótipo `<<use case>>`."
        ],
        "correctAnswer": "Elipse com o nome da funcionalidade.",
        "id": 3,
        "points": 0,
        "repeat": 0,
        "date": "1111-11-11"
      },
      {
        "question": "O que o retângulo em um diagrama de casos de uso simboliza?",
        "options": [
          "A interface do usuário.",
          "O banco de dados do sistema.",
          "O limite (boundary) do sistema, englobando casos de uso.",
          "Um ator genérico."
        ],
        "correctAnswer": "O limite (boundary) do sistema, englobando casos de uso.",
        "id": 4,
        "points": 0,
        "repeat": 0,
        "date": "1111-11-11"
      },
      {
        "question": "Qual linha representa a interação entre um ator e um caso de uso em UML?",
        "options": [
          "Linha tracejada com estereótipo `<<communicate>>`.",
          "Linha sólida sem seta.",
          "Linha sólida com seta unidirecional.",
          "Linha pontilhada com texto 'usa'."
        ],
        "correctAnswer": "Linha sólida sem seta.",
        "id": 5,
        "points": 0,
        "repeat": 0,
        "date": "1111-11-11"
      },      
      {
        question: "Qual modelo da análise estruturada representa entidades e seus relacionamentos?",
        options: [
          "DER (Diagrama de Entidade-Relacionamento)",
          "DFD (Diagrama de Fluxo de Dados)",
          "Modelo de Objetos",
          "Modelo de Classes"
        ],
        correctAnswer: "DER (Diagrama de Entidade-Relacionamento)",
        id: 6,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "Qual é um dos principais objetivos da análise de sistemas?",
        options: [
          "Programar o código-fonte",
          "Identificar a necessidade do usuário",
          "Testar a interface gráfica",
          "Documentar o hardware"
        ],
        correctAnswer: "Identificar a necessidade do usuário",
        id: 7,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "Durante a análise de sistemas, qual atividade avalia viabilidade?",
        options: [
          "Executar análise econômica e técnica",
          "Desenhar o banco de dados",
          "Escrever casos de teste",
          "Configurar servidores"
        ],
        correctAnswer: "Executar análise econômica e técnica",
        id: 8,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "O que a análise de sistemas deve definir entre os componentes do sistema?",
        options: [
          "Cores da interface",
          "Funções de hardware, software e pessoas",
          "Linguagem de programação",
          "Nomes de variáveis"
        ],
        correctAnswer: "Funções de hardware, software e pessoas",
        id: 9,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "Quais restrições a análise de sistemas deve estabelecer?",
        options: [
          "Restrições de prazo e custo",
          "Limites de memória RAM",
          "Número de linhas de código",
          "Tamanho do monitor"
        ],
        correctAnswer: "Restrições de prazo e custo",
        id: 10,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "Quando objetos de classes diferentes respondem de formas distintas à mesma operação, isso é chamado de:",
        options: [
          "Objeto",
          "Atributo",
          "Abstração",
          "Polimorfismo"
        ],
        correctAnswer: "Polimorfismo",
        id: 11,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "Qual afirmação melhor define o relacionamento de composição em OO?",
        options: [
          "Relação fraca onde partes sobrevivem sem o todo",
          "Reutilização de métodos de subclasses por superclasses",
          "Herança com reuso de atributos entre classes",
          "Relação forte onde partes são destruídas com o todo"
        ],
        correctAnswer: "Relação forte onde partes são destruídas com o todo",
        id: 12,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      // Questão 1 - Estados
      {
        question: "Qual diagrama de comportamento modela as mudanças de estado de um objeto?",
        options: [
          "Diagrama de Classes",
          "Diagrama de Estados",
          "Diagrama de Componentes",
          "Diagrama de Pacotes"
        ],
        correctAnswer: "Diagrama de Estados",
        id: 14,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },

      // Questão 2 - Objetos
      {
        question: "Qual diagrama mostra a interação entre objetos em tempo de execução?",
        options: [
          "Diagrama de Caso de Uso",
          "Diagrama de Objetos",
          "Diagrama de Implantação",
          "Diagrama de Atividades"
        ],
        correctAnswer: "Diagrama de Objetos",
        id: 15,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },

      // Questão 3 - Interação
      {
        question: "Qual destes é um diagrama de interação?",
        options: [
          "Diagrama de Sequência",
          "Diagrama de Estados",
          "Diagrama de Classes",
          "Diagrama de Entidade-Relacionamento"
        ],
        correctAnswer: "Diagrama de Sequência",
        id: 16,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },

      // Questão 4 - Caso de Uso
      {
        question: "Qual diagrama captura requisitos funcionais do sistema?",
        options: [
          "Diagrama de Componentes",
          "Diagrama de Caso de Uso",
          "Diagrama de Máquina de Estados",
          "Diagrama de Comunicação"
        ],
        correctAnswer: "Diagrama de Caso de Uso",
        id: 17,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      // Questão 1 (Afirmativa I)
      {
        question: "Qual é o principal objetivo do diagrama de casos de uso?",
        options: [
          "Documentar a estrutura de classes",
          "Identificar atores e funcionalidades do sistema",
          "Especificar algoritmos internos",
          "Modelar o banco de dados"
        ],
        correctAnswer: "Identificar atores e funcionalidades do sistema",
        id: 18,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },

      // Questão 2 (Afirmativa III)
      {
        question: "O que atores representam em diagramas de caso de uso?",
        options: [
          "Apenas usuários humanos",
          "Classes do sistema",
          "Humanos, sistemas ou dispositivos externos",
          "Métodos internos"
        ],
        correctAnswer: "Humanos, sistemas ou dispositivos externos",
        id: 19,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },

      // Questão 3 (Afirmativa IV)
      {
        question: "Como diagramas de caso de uso podem ser complementados?",
        options: [
          "Com diagramas de sequência detalhados",
          "Com descrições textuais das funcionalidades",
          "Com código-fonte exemplar",
          "Com modelos de dados relacionais"
        ],
        correctAnswer: "Com descrições textuais das funcionalidades",
        id: 20,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      // Questão 1 (Afirmativa I)
      {
        question: "Por que a reutilização de código é importante em POO?",
        options: [
          "É um requisito principal no desenvolvimento",
          "Aumenta a interdependência entre classes",
          "Exige mais linhas de código",
          "Limita a complexidade do sistema"
        ],
        correctAnswer: "É um requisito principal no desenvolvimento",
        id: 21,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },

      // Questão 2 (Afirmativa III)
      {
        question: "Qual vantagem da reutilização de código em POO?",
        options: [
          "Aumenta a duplicação de código",
          "Reduz linhas de código mantendo funcionalidades",
          "Exige maior acoplamento entre objetos",
          "Diminui a manutenibilidade"
        ],
        correctAnswer: "Reduz linhas de código mantendo funcionalidades",
        id: 22,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      // Questão 1 (Afirmativa I)
{
  question: "O que um diagrama de objetos representa na UML?",
  options: [
    "A estrutura estática de classes",
    "Instâncias com valores de atributos em um momento específico",
    "O fluxo de controle do sistema",
    "A hierarquia de pacotes"
  ],
  correctAnswer: "Instâncias com valores de atributos em um momento específico",
  id: 23,
  points: 0,
  repeat: 0,
  date: "1111-11-11"
},

// Questão 2 (Afirmativa II)
{
  question: "Como objetos são representados em diagramas de objetos UML?",
  options: [
    "Círculos com nome da classe",
    "Retângulos com nome da classe sublinhado",
    "Elipses com estereótipo <<objeto>>",
    "Hexágonos com atributos"
  ],
  correctAnswer: "Retângulos com nome da classe sublinhado",
  id: 24,
  points: 0,
  repeat: 0,
  date: "1111-11-11"
},

// Questão 3 (Afirmativa V)
{
  question: "Como diagramas de objetos complementam diagramas de classes?",
  options: [
    "Mostrando implementação de métodos",
    "Validando a estrutura de classes com exemplos reais",
    "Documentando interfaces gráficas",
    "Substituindo a necessidade de diagramas de sequência"
  ],
  correctAnswer: "Validando a estrutura de classes com exemplos reais",
  id: 25,
  points: 0,
  repeat: 0,
  date: "1111-11-11"
},
{
  question: "Qual afirmação sobre diagrama de estados está correta?",
  options: [
    "É obrigatório para modelar qualquer classe UML",
    "Só se aplica a classes com mais de 5 estados",
    "Modela classes com mudanças de estado definidas",
    "Representa apenas fluxos de dados entre objetos"
  ],
  correctAnswer: "Modela classes com mudanças de estado definidas",
  id: 26,
  points: 0,
  repeat: 0,
  date: "1111-11-11"
},
{
  question: "O que caracteriza classes 'candidatas' ou 'de análise'?",
  options: [
    "São estáveis e não mudam após definidas",
    "Podem ser refinadas durante o desenvolvimento",
    "Exigem implementação imediata",
    "Representam apenas interfaces"
  ],
  correctAnswer: "Podem ser refinadas durante o desenvolvimento",
  id: 27,
  points: 0,
  repeat: 0,
  date: "1111-11-11"
},
{
  question: "Quais são os 5 aspectos principais da análise de viabilidade?",
  options: [
    "Técnico, legal, autoral, temporal e econômico",
    "Técnico, legal, operacional, temporal e de custos",
    "Funcional, legal, operacional, temporal e econômico",
    "Técnico, legal, operacional, temporal e econômico"
  ],
  correctAnswer: "Técnico, legal, operacional, temporal e econômico",
  id: 28,
  points: 0,
  repeat: 0,
  date: "1111-11-11"
}



    ]

  }


];
export let questions = { predefined, customQuestions };
const questionsAlterated = window.localStorage.getItem('defined');
if (questionsAlterated) {
  questions = JSON.parse(questionsAlterated);
}
