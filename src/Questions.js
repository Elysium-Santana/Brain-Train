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
        question: 'O que é considerado hardware?',
        options: ['Parte física do computador', 'Parte lógica do computador', 'Arquivos de texto', 'Planilhas eletrônicas'],
        correctAnswer: 'Parte física do computador',
        id: 12,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: 'O que é software?',
        options: ['Parte física do computador', 'Parte lógica do computador', 'Teclado', 'Monitor'],
        correctAnswer: 'Parte lógica do computador',
        id: 13,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: 'Qual é o software mais importante para o bom funcionamento do computador?',
        options: ['Planilhas eletrônicas', 'Processadores de texto', 'Sistema operacional', 'Memória'],
        correctAnswer: 'Sistema operacional',
        id: 14,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: 'Em qual camada o sistema operacional atua?',
        options: ['Modo núcleo', 'Modo usuário', 'Hardware', 'Software'],
        correctAnswer: 'Modo núcleo',
        id: 15,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: 'Qual é uma das funções principais de um sistema operacional?',
        options: ['Gerenciar o uso dos componentes de hardware', 'Realizar backup de dados', 'Fazer diagnósticos automáticos', 'Desenvolver programas de software'],
        correctAnswer: 'Gerenciar o uso dos componentes de hardware',
        id: 1,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: 'Qual termo é utilizado para descrever sistemas operacionais sem interfaces gráficas?',
        options: ['Kernel', 'Driver', 'Shell', 'GUI'],
        correctAnswer: 'Shell',
        id: 2,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },      
      {
        question: 'Quando os sistemas operacionais começaram a ser utilizados nos computadores modernos?',
        options: ['Primeira geração (1945-1955)', 'Segunda geração (1955-1965)', 'Terceira geração (1965-1975)', 'Quarta geração (1975-1985)'],
        correctAnswer: 'Segunda geração (1955-1965)',
        id: 3,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: 'Que tipo de tarefas os sistemas operacionais de computadores de grande porte normalmente desempenham?',
        options: ['Tarefas gráficas', 'Tarefas em lote (batch)', 'Tarefas de navegação na web', 'Tarefas de desenvolvimento de software'],
        correctAnswer: 'Tarefas em lote (batch)',
        id: 12,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: 'Qual dos seguintes sistemas operacionais é um exemplo de sistema usado em computadores de grande porte?',
        options: ['Windows 10', 'macOS', 'OS/390', 'Ubuntu'],
        correctAnswer: 'OS/390',
        id: 13,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: 'Computadores de grande porte geralmente possuem que tipo de interface?',
        options: ['Interface gráfica', 'Modo shell', 'Interface touch', 'Nenhuma interface'],
        correctAnswer: 'Modo shell',
        id: 14,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: 'Qual dos seguintes sistemas operacionais é mais comumente utilizado em servidores?',
        options: ['Windows 10', 'Solaris', 'Android', 'MacOS'],
        correctAnswer: 'Solaris',
        id: 12,
        points: 0,
        repeat: 0,
        date: '1111-11-11'
      },
      {
        question: 'Qual sistema operacional é tipicamente usado em sistemas de tempo real, como o controle de aviões e processos industriais?',
        options: ['Windows', 'Linux', 'e-Cos', 'MacOS'],
        correctAnswer: 'e-Cos',
        id: 13,
        points: 0,
        repeat: 0,
        date: '1111-11-11'
      },
      {
        question: 'Qual dos seguintes sistemas operacionais é usado em dispositivos embarcados, como smart TVs e computadores de bordo?',
        options: ['Windows', 'QNX', 'Ubuntu', 'MacOS'],
        correctAnswer: 'QNX',
        id: 14,
        points: 0,
        repeat: 0,
        date: '1111-11-11'
      },
      {
        question: 'Qual sistema operacional é mais associado a dispositivos portáteis como smartphones e tablets?',
        options: ['FreeBSD', 'Android', 'Solaris', 'VxWorks'],
        correctAnswer: 'Android',
        id: 15,
        points: 0,
        repeat: 0,
        date: '1111-11-11'
      },
      {
        question: 'Qual sistema operacional é projetado para nós de sensores, usados por exemplo no monitoramento de perímetros?',
        options: ['TinyOS', 'Linux', 'Windows Server', 'FreeBSD'],
        correctAnswer: 'TinyOS',
        id: 16,
        points: 0,
        repeat: 0,
        date: '1111-11-11'
      },      
      {
        question: 'O que são sistemas operacionais?',
        options: ['Programas que gerenciam hardware e software, fornecendo uma interface para o usuário e gerenciando recursos', 'Aplicativos de escritório usados para criar documentos', 'Jogos de computador que operam em diversas plataformas', 'Redes sociais usadas para comunicação online'],
        correctAnswer: 'Programas que gerenciam hardware e software, fornecendo uma interface para o usuário e gerenciando recursos',
        id: 17,
        points: 0,
        repeat: 0,
        date: '1111-11-11'
      },
      {
        question: 'O Android pertence unicamente ao Google? Pesquise pelo menos três membros da OHA que você conheça.',
        options: ['Não, o Android não pertence exclusivamente ao Google. Membros da OHA incluem HTC, Samsung e Sony', 'Sim, o Android pertence exclusivamente ao Google', 'Não, o Android é um sistema operacional open-source sem membros da OHA', 'Não, o Android pertence ao Google e à Microsoft'],
        correctAnswer: 'Não, o Android não pertence exclusivamente ao Google. Membros da OHA incluem HTC, Samsung e Sony',
        id: 19,
        points: 0,
        repeat: 0,
        date: '1111-11-11'
      }





      
      
      

      
      
      
      
      
      

      
      
      
      
      
      
      
      
      

      
      
      
    ]
  },
  {
    theme:'Aula-2',
    questions:[
      {
        question: "Em que consiste a estrutura de um Sistema Operacional (SO)?",
        options: [
          "Apenas gerenciamento de memória",
          "Gerenciamento de processos e dispositivos",
          "Gerenciamento de arquivos e proteção",
          "Gerência de processador/processos, memória, dispositivos, arquivos e proteção"
        ],
        correctAnswer: "Gerência de processador/processos, memória, dispositivos, arquivos e proteção",
        id: 6,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "Como funcionavam os sistemas em lote (batch)?",
        options: [
          "Executavam múltiplos jobs ao mesmo tempo",
          "Executavam 1 job por vez",
          "Permitiam multitarefa",
          "Não utilizavam memória"
        ],
        correctAnswer: "Executavam 1 job por vez",
        id: 7,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "O que caracteriza a multiprogramação nos sistemas atuais?",
        options: [
          "Várias atividades simultâneas e processamento muito rápido",
          "Apenas uma atividade por vez",
          "Execução sequencial de tarefas",
          "Dependência de sistemas batch"
        ],
        correctAnswer: "Várias atividades simultâneas e processamento muito rápido",
        id: 8,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "O que caracteriza os sistemas monoprocessados?",
        options: [
          "Paralelismo de alta granularidade",
          "Real paralelismo",
          "Falsa sensação de paralelismo",
          "Execução simultânea de múltiplos processos"
        ],
        correctAnswer: "Falsa sensação de paralelismo",
        id: 9,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "Como os sistemas multiprocessados operam?",
        options: [
          "Falsa sensação de paralelismo",
          "Paralelismo de alta granularidade",
          "Apenas um processador",
          "Execução sequencial de tarefas"
        ],
        correctAnswer: "Paralelismo de alta granularidade",
        id: 10,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "Qual a função principal de um Sistema Operacional?",
        options: [
          "Executar um único processo",
          "Coordenar acesso a recursos e gerenciar múltiplas requisições de processos",
          "Apenas gerenciar memória",
          "Controlar o uso da rede"
        ],
        correctAnswer: "Coordenar acesso a recursos e gerenciar múltiplas requisições de processos",
        id: 11,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "De acordo com Andrew S. Tanenbaum, o que é um processo?",
        options: [
          "Um programa em execução",
          "Um programa armazenado no disco",
          "Um arquivo de dados",
          "Um dispositivo de entrada/saída"
        ],
        correctAnswer: "Um programa em execução",
        id: 12,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "O que um processo contém, de acordo com os tópicos abordados?",
        options: [
          "Endereçamento em memória, programa em execução e troca de contexto",
          "Somente identificadores",
          "Apenas o programa em execução",
          "Somente endereçamento em memória"
        ],
        correctAnswer: "Endereçamento em memória, programa em execução e troca de contexto",
        id: 13,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "Quais são as áreas principais de um processo em memória e suas funções?",
        options: [
          "Seção de texto, seção de dados, heap e pilha",
          "Somente a seção de texto e a pilha",
          "Apenas o heap e a seção de dados",
          "Somente variáveis globais e parâmetros de função"
        ],
        correctAnswer: "Seção de texto, seção de dados, heap e pilha",
        id: 14,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "Qual área de um processo em memória contém o código do programa e o contador do programa?",
        options: [
          "Seção de texto",
          "Seção de dados",
          "Heap",
          "Pilha"
        ],
        correctAnswer: "Seção de texto",
        id: 15,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "Onde são armazenadas as variáveis globais de um processo?",
        options: [
          "Seção de dados",
          "Seção de texto",
          "Heap",
          "Pilha"
        ],
        correctAnswer: "Seção de dados",
        id: 16,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "Qual área de um processo em memória é usada para alocação dinâmica de memória durante a execução?",
        options: [
          "Heap",
          "Pilha",
          "Seção de dados",
          "Seção de texto"
        ],
        correctAnswer: "Heap",
        id: 17,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "Qual área do processo contém dados temporários como parâmetros de função e variáveis locais?",
        options: [
          "Pilha",
          "Heap",
          "Seção de dados",
          "Seção de texto"
        ],
        correctAnswer: "Pilha",
        id: 18,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "O que são recursos em um sistema operacional?",
        options: [
          "Componentes necessários para a execução de um processo",
          "Apenas hardware físico",
          "Somente software",
          "Dados temporários do sistema"
        ],
        correctAnswer: "Componentes necessários para a execução de um processo",
        id: 19,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "Quais dos seguintes são exemplos de recursos necessários para a execução de um processo?",
        options: [
          "Tempo de CPU, registradores, memória, arquivos e dispositivos de entrada/saída",
          "Apenas arquivos e memória",
          "Somente tempo de CPU e registradores",
          "Somente dispositivos de entrada/saída"
        ],
        correctAnswer: "Tempo de CPU, registradores, memória, arquivos e dispositivos de entrada/saída",
        id: 20,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "Término normal voluntário, término por erro, erro fatal involuntário e cancelamento por outro processo são exemplos de:",
        options: [
          "Situações de destruição de processos",
          "Exceções de memória",
          "Gerenciamento de arquivos",
          "Recursos de sistema"
        ],
        correctAnswer: "Situações de destruição de processos",
        id: 21,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "O que é uma interrupção em um sistema operacional?",
        options: [
          "Um sinal de hardware que informa a ocorrência de um evento",
          "Um processo que está aguardando resposta externa",
          "Um erro de execução de programa",
          "Uma função de gerenciamento de memória"
        ],
        correctAnswer: "Um sinal de hardware que informa a ocorrência de um evento",
        id: 27,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "O que são threads em um processo?",
        options: [
          "Atividades (tarefas) que um processo executa",
          "Unidades de armazenamento de dados",
          "Componentes de hardware",
          "Tipos de processos"
        ],
        correctAnswer: "Atividades (tarefas) que um processo executa",
        id: 28,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "Qual é uma característica dos processos monothread?",
        options: [
          "1 batch job = 1 thread",
          "Execução simultânea de múltiplas threads",
          "Uso de múltiplos núcleos de processador",
          "Execução apenas em sistemas multithread"
        ],
        correctAnswer: "1 batch job = 1 thread",
        id: 29,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "Qual é um exemplo de processo multithread?",
        options: [
          "Computadores domésticos",
          "Sistemas de processamento em lote",
          "Batch jobs",
          "Programas de linha de comando"
        ],
        correctAnswer: "Computadores domésticos",
        id: 30,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "O que é uma condição de corrida em sistemas operacionais?",
        options: [
          "Um processo dependendo do resultado de outro para continuar",
          "Um erro de hardware",
          "Um tipo de memória volátil",
          "Uma técnica de gerenciamento de processos"
        ],
        correctAnswer: "Um processo dependendo do resultado de outro para continuar",
        id: 31,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "O que é a solução de Peterson em sistemas operacionais?",
        options: [
          "Uma fila de acessos à região crítica",
          "Uma técnica de gerenciamento de memória",
          "Um algoritmo de criptografia",
          "Uma estratégia de alocação de recursos"
        ],
        correctAnswer: "Uma fila de acessos à região crítica",
        id: 33,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "Qual é a principal desvantagem da solução de Peterson?",
        options: [
          "Espera ociosa",
          "Baixa eficiência na alocação de memória",
          "Complexidade de implementação",
          "Alto consumo de CPU"
        ],
        correctAnswer: "Espera ociosa",
        id: 34,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "O que é um escalonador em um sistema operacional?",
        options: [
          "Um algoritmo que decide qual processo deve utilizar o processador",
          "Uma unidade de hardware responsável pelo processamento",
          "Um tipo de memória usada para armazenar processos",
          "Um componente de rede que gerencia a comunicação entre processos"
        ],
        correctAnswer: "Um algoritmo que decide qual processo deve utilizar o processador",
        id: 35,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },{
        question: "Qual é a característica principal dos algoritmos de escalonamento preemptivos?",
        options: [
          "Processo executa até um tempo máximo fixado (quantum)",
          "Processo executa até que seja bloqueado ou encerre",
          "Processo é executado apenas se houver recursos suficientes",
          "Processo é escalonado com base na prioridade estática"
        ],
        correctAnswer: "Processo executa até um tempo máximo fixado (quantum)",
        id: 36,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "Qual é a característica principal dos algoritmos de escalonamento preemptivos?",
        options: [
          "Processo executa até um tempo máximo fixado (quantum)",
          "Processo executa até que seja bloqueado ou encerre",
          "Processo é executado apenas se houver recursos suficientes",
          "Processo é escalonado com base na prioridade estática"
        ],
        correctAnswer: "Processo executa até um tempo máximo fixado (quantum)",
        id: 36,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "O que caracteriza um impasse entre processos?",
        options: [
          "Processos esperando uns pelos outros",
          "Os processos estão sendo executados simultaneamente",
          "Um processo está aguardando entrada do usuário",
          "Os processos estão utilizando o processador de forma contínua"
        ],
        correctAnswer: "Processos esperando uns pelos outros",
        id: 38,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "O que é um deadlock em sistemas operacionais?",
        options: [
          "Dois processos bloqueando recursos que o outro precisa",
          "Um processo que não libera a CPU",
          "Um processo aguardando entrada do usuário",
          "Dois processos executando em paralelo"
        ],
        correctAnswer: "Dois processos bloqueando recursos que o outro precisa",
        id: 39,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "Quais são as condições necessárias para que ocorra um impasse (deadlock)?",
        options: [
          "Exclusão mútua, posse e espera, inexistência de preempção e espera circular",
          "Execução simultânea, prioridade, exclusão de CPU e bloqueio de memória",
          "Preempção de processos, espera ativa, exclusão de I/O e alocação de memória",
          "Exclusão de CPU, execução paralela, inexistência de bloqueio e espera ociosa"
        ],
        correctAnswer: "Exclusão mútua, posse e espera, inexistência de preempção e espera circular",
        id: 40,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "Qual é a solução para evitar um deadlock?",
        options: [
          "Evitar uma das quatro condições necessárias",
          "Interromper todos os processos",
          "Aumentar recursos disponíveis",
          "Dar maior prioridade aos processos bloqueados"
        ],
        correctAnswer: "Evitar uma das quatro condições necessárias",
        id: 41,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },

      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      

      
      
      
      
      
      
      
      
      

    ]
  },
  {
    theme:'Unidade 3',
    questions:[
      {
        question: "Para que um processo possa ser executado, ele deve estar:",
        options: [
          "Integralmente ou parcialmente em memória",
          "Somente no disco rígido",
          "Em espera externa",
          "Apenas no processador"
        ],
        correctAnswer: "Integralmente ou parcialmente em memória",
        id: 42,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "Quais são os níveis de memória em um sistema?",
        options: [
          "Embutida, Primária (Principal), Secundária (Externa)",
          "Cache, RAM, Disco Rígido",
          "Volátil, Não-volátil, Temporária",
          "Operacional, Auxiliar, Remota"
        ],
        correctAnswer: "Embutida, Primária (Principal), Secundária (Externa)",
        id: 43,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "Na hierarquia de memória, como a capacidade de armazenamento se relaciona com a posição na hierarquia?",
        options: [
          "Quanto mais alto na hierarquia, menor a capacidade de armazenamento",
          "Quanto mais baixo na hierarquia, menor a capacidade de armazenamento",
          "A capacidade de armazenamento é a mesma em todos os níveis",
          "A capacidade de armazenamento não é afetada pela posição na hierarquia"
        ],
        correctAnswer: "Quanto mais alto na hierarquia, menor a capacidade de armazenamento",
        id: 44,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "Qual é uma característica dos dispositivos voláteis?",
        options: [
          "Perdem seus dados quando a energia é desligada",
          "Armazenam dados permanentemente, mesmo sem energia",
          "Têm alta capacidade de armazenamento e baixa velocidade de acesso",
          "São utilizados principalmente para backup e recuperação de dados"
        ],
        correctAnswer: "Perdem seus dados quando a energia é desligada",
        id: 46,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "O que é uma MMU (Unidade de Gerenciamento de Memória)?",
        options: [
          "Gerencia mapeamento de endereços de memória virtuais para físicos",
          "Um dispositivo de armazenamento externo",
          "Um tipo de memória volátil",
          "Gerencia comunicação entre processador e dispositivos externos"
        ],
        correctAnswer: "Gerencia mapeamento de endereços de memória virtuais para físicos",
        id: 47,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "O que é fragmentação em gerenciamento de memória?",
        options: [
          "Buracos de memória não utilizados devido à alocação e desalocação de processos",
          "Processos que não conseguem acessar a memória",
          "Aumento na velocidade de acesso à memória",
          "Alocação contínua de memória para todos os processos"
        ],
        correctAnswer: "Buracos de memória não utilizados devido à alocação e desalocação de processos",
        id: 48,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "Qual é a função da memória principal (RAM) em um SO?",
        options: [
          "Armazenar dados de processos de usuário e do SO",
          "Servir como armazenamento permanente",
          "Gerenciar dispositivos de entrada e saída",
          "Executar programas do disco rígido"
        ],
        correctAnswer: "Armazenar dados de processos de usuário e do SO",
        id: 49,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "Quais são as estratégias comuns de alocação de memória?",
        options: [
          "Alocação contígua, alocação por segmentos, alocação paginada",
          "Alocação dinâmica, alocação estática, alocação virtual",
          "Alocação de disco, alocação de cache, alocação de RAM",
          "Alocação sequencial, alocação aleatória, alocação circular"
        ],
        correctAnswer: "Alocação contígua, alocação por segmentos, alocação paginada",
        id: 50,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "Como a alocação contígua divide a memória?",
        options: [
          "Em duas partições: uma para o SO e outra para processos de usuário",
          "Em várias partições para diferentes tipos de dados",
          "Em partições dinâmicas baseadas em necessidade",
          "Em uma única partição para todos os processos"
        ],
        correctAnswer: "Em duas partições: uma para o SO e outra para processos de usuário",
        id: 51,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "O que caracteriza a alocação por segmentos na memória?",
        options: [
          "Memória fracionada em segmentos de tamanhos variados",
          "Uso exclusivo de uma partição fixa",
          "Alocação contígua de memória para todos os processos",
          "Armazenamento de dados em uma única seção"
        ],
        correctAnswer: "Memória fracionada em segmentos de tamanhos variados",
        id: 52,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      
      {
        question: "Qual é a desvantagem da alocação por segmentos?",
        options: [
          "Fragmentação externa",
          "Alocação ineficiente de memória",
          "Dificuldade na execução de processos",
          "Impossibilidade de alocação dinâmica"
        ],
        correctAnswer: "Fragmentação externa",
        id: 53,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "O que caracteriza a alocação paginada na memória?",
        options: [
          "Endereços divididos em blocos chamados páginas",
          "Uso exclusivo de partições fixas",
          "Memória alocada de forma contígua",
          "Segmentos de tamanhos variados"
        ],
        correctAnswer: "Endereços divididos em blocos chamados páginas",
        id: 54,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "Qual técnica é utilizada na alocação paginada?",
        options: [
          "Tabela de páginas para associação página-quadro",
          "Memória contígua para todos os processos",
          "Alocação estática de memória",
          "Segmentação dinâmica de processos"
        ],
        correctAnswer: "Tabela de páginas para associação página-quadro",
        id: 55,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "O que é memória virtual?",
        options: [
          "Uma extensão da memória primária utilizando memória secundária",
          "Um tipo de memória apenas para armazenamento permanente",
          "Memória exclusiva para o sistema operacional",
          "Memória utilizada apenas durante a inicialização do sistema"
        ],
        correctAnswer: "Uma extensão da memória primária utilizando memória secundária",
        id: 56,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "Qual é a função do algoritmo de swapping na memória virtual?",
        options: [
          "Escolher dados para remover da memória primária e recuperar espaço",
          "Aumentar a velocidade de acesso à memória",
          "Armazenar permanentemente dados no disco rígido",
          "Gerenciar a alocação de memória em tempo real"
        ],
        correctAnswer: "Escolher dados para remover da memória primária e recuperar espaço",
        id: 57,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "O que são partições em um sistema operacional?",
        options: [
          "Regiões com setores onde o SO é instalado",
          "Divisões de memória RAM para processos",
          "Unidades de armazenamento externo",
          "Segmentos de código em um programa"
        ],
        correctAnswer: "Regiões com setores onde o SO é instalado",
        id: 56,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "Qual é a função do Master Boot Record (MBR) em um sistema?",
        options: [
          "Primeira partição acessada na inicialização",
          "Formato de arquivo para partições",
          "Área de memória para armazenamento temporário",
          "Um tipo de sistema de arquivos"
        ],
        correctAnswer: "Primeira partição acessada na inicialização",
        id: 57,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "Qual é a principal característica da alocação contígua de arquivos?",
        options: [
          "Armazena os blocos lado a lado",
          "Blocos de arquivo são armazenados em locais aleatórios",
          "Armazena os blocos em segmentos de tamanhos variados",
          "Divide o arquivo em várias partes independentes"
        ],
        correctAnswer: "Armazena os blocos lado a lado",
        id: 56,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },{
        question: "Qual é uma vantagem da alocação contígua de arquivos?",
        options: [
          "Acesso e pesquisa rápidos com leitura em um único acesso sequencial",
          "Reduz completamente a fragmentação de memória",
          "Permite a alocação de blocos de forma dinâmica",
          "Não necessita de um desfragmentador"
        ],
        correctAnswer: "Acesso e pesquisa rápidos com leitura em um único acesso sequencial",
        id: 57,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "Qual é a desvantagem da alocação contígua de arquivos?",
        options: [
          "Está sujeita à fragmentação externa",
          "Requer mais processamento para localizar os arquivos",
          "Os arquivos são armazenados de forma não sequencial",
          "Necessita de mais espaço de armazenamento para cada arquivo"
        ],
        correctAnswer: "Está sujeita à fragmentação externa",
        id: 58,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },{
        question: "O que caracteriza a alocação encadeada de arquivos?",
        options: [
          "Blocos são alocados onde for possível e cada bloco aponta para o próximo",
          "Blocos são alocados de forma contígua",
          "Todos os blocos são alocados em sequência no início do disco",
          "A alocação só ocorre quando todos os blocos estão disponíveis"
        ],
        correctAnswer: "Blocos são alocados onde for possível e cada bloco aponta para o próximo",
        id: 56,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "Qual é uma desvantagem da alocação encadeada de arquivos?",
        options: [
          "Perda de desempenho devido aos arquivos ficarem espalhados no disco",
          "Necessidade de blocos contínuos de memória",
          "Fragmentação externa causada pela disposição dos blocos",
          "Impossibilidade de alocação de grandes arquivos"
        ],
        correctAnswer: "Perda de desempenho devido aos arquivos ficarem espalhados no disco",
        id: 57,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "Qual é uma desvantagem da técnica de File Allocation Table (FAT)?",
        options: [
          "Pode ocupar muito espaço",
          "Causa fragmentação externa",
          "Não permite rastrear blocos alocados",
          "Os blocos devem ser contíguos"
        ],
        correctAnswer: "Pode ocupar muito espaço",
        id: 58,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "O que caracteriza a alocação indexada (i-nodes) em sistemas de arquivos?",
        options: [
          "Nó-índice que relaciona atributos e endereços dos blocos",
          "Estrutura de dados que usa FAT para relacionar arquivos e diretórios",
          "Tabela de endereços contínua para todos os arquivos",
          "Memória segmentada para arquivos grandes"
        ],
        correctAnswer: "Nó-índice que relaciona atributos e endereços dos blocos",
        id: 56,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "Qual é uma vantagem da alocação indexada (i-nodes) em sistemas de arquivos?",
        options: [
          "O nó-índice é carregado apenas quando o arquivo é aberto",
          "É mais rápida para acesso a arquivos grandes",
          "Elimina completamente a fragmentação de arquivos",
          "Permite acesso simultâneo a múltiplos arquivos sem overhead"
        ],
        correctAnswer: "O nó-índice é carregado apenas quando o arquivo é aberto",
        id: 57,
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
        question: "O que caracteriza um dispositivo de bloco?",
        options: [
          "Armazena dados em blocos de tamanho fixo, como HD e pen drive",
          "Envia ou recebe cadeias de dados em fluxo contínuo",
          "Realiza a leitura de dados em tempo real",
          "Controla dispositivos de entrada como mouse e teclado"
        ],
        correctAnswer: "Armazena dados em blocos de tamanho fixo, como HD e pen drive",
        id: 56,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "O que caracteriza um dispositivo de caractere?",
        options: [
          "Fluxo contínuo de dados, como mouse e teclado",
          "Armazena dados em blocos de tamanho fixo",
          "Lê dados armazenados de forma permanente",
          "Utiliza uma tabela de blocos para transferência de dados"
        ],
        correctAnswer: "Fluxo contínuo de dados, como mouse e teclado",
        id: 57,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "Qual é a função do relógio como dispositivo de entrada/saída?",
        options: [
          "Fornecer impulsos de interrupção para organizar os processos",
          "Armazenar dados em blocos de tamanho fixo",
          "Gerenciar o fluxo de dados entre dispositivos de armazenamento",
          "Enviar cadeias de dados em fluxo contínuo"
        ],
        correctAnswer: "Fornecer impulsos de interrupção para organizar os processos",
        id: 58,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "Qual componente de hardware manipula streams e blocos de dados, realiza a correção de erros (checksum), faz a bufferização e a interface entre o dispositivo e o barramento?",
        options: [
          "Registradores",
          "Memória RAM",
          "Controladores",
          "Processadores"
        ],
        correctAnswer: "Controladores",
        id: 61,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "Qual componente de hardware é utilizado pelo sistema operacional para passar comandos, ligar/desligar dispositivos e controlar o estado dos dispositivos?",
        options: [
          "Controladores",
          "Cache",
          "Registradores",
          "Disco rígido"
        ],
        correctAnswer: "Registradores",
        id: 62,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "O que caracteriza um mainframe?",
        options: [
          "Computador de grande porte",
          "Dispositivo utilizado exclusivamente para redes sem fio",
          "Equipamento especializado em processamento gráfico",
          "Servidor de pequeno porte para tarefas simples"
        ],
        correctAnswer: "Computador de grande porte",
        id: 64,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "Qual é a função do barramento em um sistema de hardware?",
        options: [
          "Conectar e transferir dados entre componentes de hardware",
          "Gerenciar o tempo de execução dos processos",
          "Armazenar dados temporários durante a execução do programa",
          "Controlar o uso de memória e CPU"
        ],
        correctAnswer: "Conectar e transferir dados entre componentes de hardware",
        id: 63,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "Qual é uma das vantagens do uso de Thin Clients?",
        options: [
          "Melhor gerenciamento de arquivos e programas",
          "Maior capacidade de processamento local",
          "Autonomia para rodar sistemas operacionais sem servidor",
          "Aumento no uso de recursos de hardware"
        ],
        correctAnswer: "Melhor gerenciamento de arquivos e programas",
        id: 66,
        points: 0,
        repeat: 0,
        date: "1111-11-11"
      },
      {
        question: "Qual é uma desvantagem do uso de Thin Clients?",
        options: [
          "Compartilhamento de recursos, perda de desempenho",
          "Maior consumo de energia",
          "Necessidade de hardware de alto custo",
          "Impossibilidade de acessar servidores remotos"
        ],
        correctAnswer: "Compartilhamento de recursos, perda de desempenho",
        id: 67,
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
