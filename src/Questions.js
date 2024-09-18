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
        question: 'O que é um processo em termos de computação?',
        options: ['Um programa armazenado no disco', 'Um programa em execução', 'Um arquivo de sistema', 'Uma configuração do sistema operacional'],
        correctAnswer: 'Um programa em execução',
        id: 12,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: 'Como um processo é iniciado quando um arquivo é clicado duas vezes?',
        options: ['O sistema operacional ignora o clique', 'O sistema operacional solicita ao processador para iniciar o arquivo', 'O sistema operacional verifica o tipo do arquivo e inicia o programa apropriado', 'O sistema operacional abre o arquivo diretamente'],
        correctAnswer: 'O sistema operacional verifica o tipo do arquivo e inicia o programa apropriado',
        id: 13,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: 'Como um processo é iniciado quando um arquivo é clicado duas vezes?',
        options: ['O sistema operacional ignora o clique', 'O sistema operacional solicita ao processador para iniciar o arquivo', 'O sistema operacional verifica o tipo do arquivo e inicia o programa apropriado', 'O sistema operacional abre o arquivo diretamente'],
        correctAnswer: 'O sistema operacional verifica o tipo do arquivo e inicia o programa apropriado',
        id: 13,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: 'O que acontece quando você clica duas vezes em um arquivo de e-book?',
        options: ['O e-book é excluído', 'O sistema operacional abre um processador de texto para visualizar o e-book', 'O sistema operacional fecha todos os programas abertos', 'O sistema operacional instala um novo programa'],
        correctAnswer: 'O sistema operacional abre um processador de texto para visualizar o e-book',
        id: 14,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: 'Qual é o papel do sistema operacional ao iniciar um programa?',
        options: ['Desinstalar o programa', 'Verificar a integridade do arquivo', 'Consultar a lista de programas capazes de executar o arquivo e solicitar o uso do processador', 'Criar um novo arquivo'],
        correctAnswer: 'Consultar a lista de programas capazes de executar o arquivo e solicitar o uso do processador',
        id: 15,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: 'Qual é a diferença principal entre sistemas operacionais para computadores em lote e computadores pessoais?',
        options: ['Os computadores pessoais executam um processo por vez, enquanto os sistemas em lote executam vários processos ao mesmo tempo.', 'Os computadores pessoais podem executar vários processos simultaneamente, enquanto os sistemas em lote normalmente executam um processo por vez.', 'Os sistemas em lote não suportam multitarefa, enquanto os computadores pessoais suportam multitarefa.', 'Não há diferença significativa entre os dois tipos de sistemas operacionais.'],
        correctAnswer: 'Os computadores pessoais podem executar vários processos simultaneamente, enquanto os sistemas em lote normalmente executam um processo por vez.',
        id: 12,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: 'O que é mostrado na aba de processos do Gerenciador de Tarefas do Windows?',
        options: ['A lista de arquivos abertos pelo sistema', 'Os programas e processos em execução coordenados pelo sistema operacional', 'A quantidade de memória física disponível', 'O histórico de navegação na internet'],
        correctAnswer: 'Os programas e processos em execução coordenados pelo sistema operacional',
        id: 13,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: 'Qual comando é usado no Linux para listar os processos em execução?',
        options: ['ls', 'ps', 'top', 'df'],
        correctAnswer: 'ps',
        id: 14,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: 'O que caracteriza um processo em um sistema operacional?',
        options: ['Somente o código-fonte do programa', 'Somente o uso de CPU', 'A combinação de código-fonte, dados, recursos de sistema e contexto de execução', 'A quantidade de memória física utilizada'],
        correctAnswer: 'A combinação de código-fonte, dados, recursos de sistema e contexto de execução',
        id: 15,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: 'Por que os sistemas operacionais de computadores pessoais devem suportar multitarefa?',
        options: ['Para permitir que vários programas sejam executados simultaneamente, como navegação na internet e reprodução de música', 'Para reduzir o uso de memória', 'Para aumentar a complexidade do sistema', 'Para impedir que o usuário altere as configurações do sistema'],
        correctAnswer: 'Para permitir que vários programas sejam executados simultaneamente, como navegação na internet e reprodução de música',
        id: 16,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: 'Qual seção de um processo contém o código do programa, o contador do programa e o conteúdo dos registradores do processador?',
        options: ['Seção de Dados', 'Heap', 'Pilha', 'Seção de Texto'],
        correctAnswer: 'Seção de Texto',
        id: 12,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: 'Qual área de um processo é responsável por armazenar variáveis globais?',
        options: ['Seção de Texto', 'Heap', 'Pilha', 'Seção de Dados'],
        correctAnswer: 'Seção de Dados',
        id: 13,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: 'Qual área do processo representa o espaço para alocação dinâmica de memória durante a execução?',
        options: ['Seção de Dados', 'Heap', 'Pilha', 'Seção de Texto'],
        correctAnswer: 'Heap',
        id: 14,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: 'Onde são armazenados dados temporários como parâmetros de função, endereços de retorno e variáveis locais?',
        options: ['Heap', 'Seção de Dados', 'Pilha', 'Seção de Texto'],
        correctAnswer: 'Pilha',
        id: 15,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: 'Qual seção do processo pode aumentar de tamanho à medida que o processo é executado?',
        options: ['Seção de Texto', 'Seção de Dados', 'Heap e Pilha', 'Heap'],
        correctAnswer: 'Heap e Pilha',
        id: 16,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: 'Qual é uma das situações em que um processo pode ser criado, segundo Tanenbaum?',
        options: ['Início do sistema', 'Criação de um novo usuário', 'Atualização de software', 'Desligamento do sistema'],
        correctAnswer: 'Início do sistema',
        id: 12,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: 'Qual comando geralmente é usado para criar um novo processo por um processo em execução?',
        options: ['Executar', 'Start', 'Fork', 'Run'],
        correctAnswer: 'Fork',
        id: 13,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: 'O que caracteriza o término normal voluntário de um processo?',
        options: ['Erro fatal', 'Solicitação do usuário para encerrar', 'Execução de um processo em lote', 'Criação de um novo processo'],
        correctAnswer: 'Solicitação do usuário para encerrar',
        id: 14,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: 'O que é um término por erro voluntário de um processo?',
        options: ['Quando o processo cumpre sua finalidade com sucesso', 'Quando o processo informa um erro fatal e encerra', 'Quando o processo é criado por outro processo', 'Quando um processo em lote é finalizado'],
        correctAnswer: 'Quando o processo informa um erro fatal e encerra',
        id: 15,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: 'Qual situação descreve a criação de um processo mediante tarefas em lote?',
        options: ['Criação durante o início do sistema', 'Solicitação do usuário', 'Processos em lote são executados até o fim', 'Criação por outro processo em execução'],
        correctAnswer: 'Processos em lote são executados até o fim',
        id: 16,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: 'O que caracteriza um erro fatal involuntário durante a execução de um processo?',
        options: ['Instrução ilegal ou não planejada', 'Solicitação do usuário para encerrar', 'Término por erro fatal', 'Criação de um novo processo'],
        correctAnswer: 'Instrução ilegal ou não planejada',
        id: 17,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: 'Qual comando é usado no Linux para cancelar um processo involuntariamente?',
        options: ['kill', 'stop', 'end', 'remove'],
        correctAnswer: 'kill',
        id: 18,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: 'Como é chamado o término de um processo devido a um erro não tratado, que faz com que o programa trave e emita mensagens de erro?',
        options: ['Erro fatal involuntário', 'Término normal voluntário', 'Cancelamento por outro processo involuntário', 'Erro fatal voluntário'],
        correctAnswer: 'Erro fatal involuntário',
        id: 19,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: 'Qual técnica é utilizada para finalizar um programa que não responde às solicitações dos dispositivos de entrada?',
        options: ['Cancelamento por outro processo involuntário', 'Erro fatal voluntário', 'Criação de um novo processo', 'Execução de tarefas em lote'],
        correctAnswer: 'Cancelamento por outro processo involuntário',
        id: 20,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: 'Qual é a diferença entre término por erro e término por erro fatal?',
        options: ['Tratamento da exceção de erro durante o desenvolvimento', 'Finalização por outro processo', 'Erro fatal involuntário', 'Criação de um novo processo'],
        correctAnswer: 'Tratamento da exceção de erro durante o desenvolvimento',
        id: 21,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: 'Qual é o estado de um processo quando ele está aguardando uma resposta externa, como a de um dispositivo de E/S?',
        options: ['Novo', 'Em execução', 'Em espera', 'Pronto'],
        correctAnswer: 'Em espera',
        id: 17,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: 'Qual estado é atribuído a um processo quando ele está aguardando ser atribuído a um processador?',
        options: ['Novo', 'Em execução', 'Em espera', 'Pronto'],
        correctAnswer: 'Pronto',
        id: 18,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: 'Qual estado um processo está em quando suas instruções estão sendo executadas?',
        options: ['Novo', 'Em execução', 'Em espera', 'Concluído'],
        correctAnswer: 'Em execução',
        id: 19,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: 'Qual estado é atribuído a um processo que acabou de ser criado e está aguardando para ser iniciado?',
        options: ['Novo', 'Pronto', 'Em execução', 'Concluído'],
        correctAnswer: 'Novo',
        id: 20,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      {
        question: 'Quando um processo termina sua execução, qual estado ele alcança?',
        options: ['Novo', 'Em execução', 'Em espera', 'Concluído'],
        correctAnswer: 'Concluído',
        id: 21,
        points: 0,
        repeat: 0,
        date: '1111-11-11',
      },
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
              
]
  }

];
export let questions = { predefined, customQuestions };
const questionsAlterated = window.localStorage.getItem('defined');
if (questionsAlterated) {
  questions = JSON.parse(questionsAlterated);
}
