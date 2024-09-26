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
    theme:'Aula-1',
    questions:[
      {
        question: "O que é um Sistema Gerenciador de Banco de Dados (SGBD)?",
        options: [
          "Programas que gerenciam dados com o sistema operacional",
          "Um software para criar interfaces gráficas",
          "Um sistema para gerenciar redes de computadores",
          "Um conjunto de ferramentas para desenvolvimento de aplicativos"
        ],
        correctAnswer: "Programas que gerenciam dados com o sistema operacional",
        id: 71,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "Qual é uma das principais funções de um SGBD?",
        options: [
          "Processar, armazenar e gerenciar dados",
          "Monitorar o desempenho de hardware",
          "Criar documentos de texto",
          "Gerenciar o uso da memória RAM"
        ],
        correctAnswer: "Processar, armazenar e gerenciar dados",
        id: 72,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "O que é uma transação no contexto de banco de dados?",
        options: [
          "Unidade de execução que acessa e atualiza dados",
          "Um comando para criar tabelas",
          "Um processo que faz backup de dados",
          "Uma ação para monitorar o sistema operacional"
        ],
        correctAnswer: "Unidade de execução que acessa e atualiza dados",
        id: 73,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "Quais são as propriedades que uma transação deve garantir para manter a integridade dos dados?",
        options: [
          "Atomicidade, Consistência, Isolamento e Durabilidade",
          "Acessibilidade, Controle, Inclusão e Durabilidade",
          "Autenticação, Consistência, Inclusão e Dependência",
          "Alocação, Controle, Identificação e Dinamismo"
        ],
        correctAnswer: "Atomicidade, Consistência, Isolamento e Durabilidade",
        id: 74,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "O que significa a propriedade de atomicidade em uma transação de banco de dados?",
        options: [
          "Todas as operações são refletidas ou nenhuma delas",
          "Os dados são sempre consistentes",
          "As operações podem ser parcialmente realizadas",
          "Os dados são replicados automaticamente"
        ],
        correctAnswer: "Todas as operações são refletidas ou nenhuma delas",
        id: 75,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "O que significa a propriedade de consistência em uma transação de banco de dados?",
        options: [
          "A transação mantém a consistência do banco de dados",
          "A transação pode alterar valores aleatoriamente",
          "A transação sempre faz backup dos dados",
          "A transação replica os dados em vários servidores"
        ],
        correctAnswer: "A transação mantém a consistência do banco de dados",
        id: 76,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "O que significa a propriedade de isolamento em uma transação de banco de dados?",
        options: [
          "Resultados finais equivalentes, mesmo com operações simultâneas",
          "Transações podem interferir umas nas outras",
          "Transações devem ser executadas em sequência",
          "Transações não precisam ser confirmadas"
        ],
        correctAnswer: "Resultados finais equivalentes, mesmo com operações simultâneas",
        id: 78,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "O que significa a propriedade de durabilidade em uma transação de banco de dados?",
        options: [
          "Atualizações são persistidas após a transação bem-sucedida",
          "Atualizações podem ser perdidas se o sistema falhar",
          "Transação deve ser revertida em caso de erro",
          "Atualizações são temporárias até o próximo backup"
        ],
        correctAnswer: "Atualizações são persistidas após a transação bem-sucedida",
        id: 77,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },

      
      
      
      
      
      
      
      
      

    ]
  },
  {
    theme:'Aula-2',
    questions:[
      {
        question: "O que é um atributo simples em um modelo relacional?",
        options: [
          "Contém um único valor para cada elemento da entidade",
          "Contém vários valores para a mesma entidade",
          "Identifica um item da entidade de forma única",
          "Pode ser dividido em outros atributos"
        ],
        correctAnswer: "Contém um único valor para cada elemento da entidade",
        id: 78,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "O que é um atributo multivalorado em um modelo relacional?",
        options: [
          "Contém um único valor para cada elemento da entidade",
          "Contém diversos valores para o mesmo elemento da entidade",
          "Identifica um item da entidade de forma única",
          "Pode ser dividido em outros atributos"
        ],
        correctAnswer: "Contém diversos valores para o mesmo elemento da entidade",
        id: 79,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "Qual é a função de um atributo chave em um modelo relacional?",
        options: [
          "Contém um único valor para cada elemento da entidade",
          "Contém diversos valores para o mesmo elemento da entidade",
          "Identifica um item da entidade de maneira única",
          "Pode ser dividido em outros atributos"
        ],
        correctAnswer: "Identifica um item da entidade de maneira única",
        id: 80,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "O que caracteriza um atributo composto em um modelo relacional?",
        options: [
          "Contém um único valor para cada elemento da entidade",
          "Contém diversos valores para o mesmo elemento da entidade",
          "Identifica um item da entidade de maneira única",
          "Pode ser dividido em outros atributos"
        ],
        correctAnswer: "Pode ser dividido em outros atributos",
        id: 81,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "O que é uma chave estrangeira em um modelo relacional?",
        options: [
          "Um atributo que aponta para a chave primária de outra tabela",
          "Um identificador único de uma tabela",
          "Um atributo que não pode ser nulo",
          "Um atributo que contém vários valores"
        ],
        correctAnswer: "Um atributo que aponta para a chave primária de outra tabela",
        id: 82,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
  question: "O que caracteriza a linguagem SQL (Structured Query Language)?",
  options: [
    "É uma linguagem declarativa onde definimos o que queremos como resultado",
    "É uma linguagem procedural onde especificamos passo a passo o que será feito",
    "É uma linguagem orientada a objetos para manipulação de dados",
    "É uma linguagem para criação de estruturas de dados em memória"
  ],
  correctAnswer: "É uma linguagem declarativa onde definimos o que queremos como resultado",
  id: 83,
  points: 0,
  repeat: 0,
  date: "1111-11-11"
},
{
  question: "O que é um esquema (schema) em um banco de dados?",
  options: [
    "Uma área que reúne tabelas relacionadas para atender a um contexto de negócio",
    "Uma tabela que contém os dados de uma entidade específica",
    "Uma instrução SQL para criar uma tabela",
    "Um procedimento armazenado para manipular dados"
  ],
  correctAnswer: "Uma área que reúne tabelas relacionadas para atender a um contexto de negócio",
  id: 84,
  points: 0,
  repeat: 0,
  date: "1111-11-11"
}


      
      
      
      
      
    ] },
  {
    theme:'Unidade 3',
    questions:[
      {
        question: "Como se define uma chave primária com um único atributo em SQL?",
        options: [
          "id INT PRIMARY KEY",
          "id PRIMARY CREATE KEY",
          "id DEFAULT PRIMARY SET",
          "id UNIQUE CREATE PRIMARY"
        ],
        correctAnswer: "id INT PRIMARY KEY",
        id: 86,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "Como se define uma chave primária com mais de um atributo em SQL?",
        options: [
          "PRIMARY KEY (grupo fk, contato fk)",
          "CREATE PRIMARY (grupo, contato fk)",
          "PRIMARY KEY UNIQUE (grupo contato)",
          "DEFINE PRIMARY (grupo fk, contato fk)"
        ],
        correctAnswer: "PRIMARY KEY (grupo fk, contato fk)",
        id: 87,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },

      
      

    ]
  },
  {
    theme:'UNIDADE 4',
    questions:[
      {
        question: "O que são consultas aninhadas em SQL?",
        options: [
          "Consultas que utilizam o resultado de outra consulta",
          "Consultas que não retornam resultados válidos",
          "Consultas que são executadas simultaneamente",
          "Consultas que não podem ser combinadas"
        ],
        correctAnswer: "Consultas que utilizam o resultado de outra consulta",
        id: 92,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "Como são chamadas as consultas dentro de outras consultas?",
        options: [
          "Subqueries ou consultas aninhadas",
          "Joins ou agrupamentos de dados",
          "Views ou tabelas virtuais",
          "Triggers ou procedimentos automáticos"
        ],
        correctAnswer: "Subqueries ou consultas aninhadas",
        id: 93,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      
      
      
    ]
  },
  {
    theme:'Unidade 5',
    questions:[
      
    ]
  }

];
export let questions = { predefined, customQuestions };
const questionsAlterated = window.localStorage.getItem('defined');
if (questionsAlterated) {
  questions = JSON.parse(questionsAlterated);
}
