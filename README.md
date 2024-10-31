
# Módulo 16: Automação de Tarefas com Gulp

Neste módulo, exploramos o uso do Gulp para automatizar tarefas repetitivas no desenvolvimento Front-End, otimizando tempo e aumentando a eficiência do projeto.

## Conteúdos Abordados

1. **Instalação do Gulp**
   - Aprendemos como instalar o Gulp globalmente e como dependência de um projeto.

2. **Configuração de Projeto com Gulp**
   - Configuramos um projeto do zero para usar o Gulp e preparar o ambiente de automação.

3. **Arquivos Gitignore**
   - Criamos um arquivo `.gitignore` para garantir que arquivos de build e dados sensíveis sejam protegidos.

4. **Conceito de Automação de Tarefas**
   - Entendemos a importância de automatizar tarefas para facilitar o fluxo de trabalho no desenvolvimento.

5. **Uso de Plugins no Gulp**
   - Instalamos e configuramos plugins para tarefas específicas, como compilação de SASS e compressão de imagens.

6. **Criação e Execução de Tarefas no Gulp**
   - Criamos tarefas públicas e privadas para automatizar processos repetitivos e gerenciar o desenvolvimento de forma mais eficiente.

## Explicação das Funções Criadas

1. **Função `comprimeImagens`**
   - Esta função é responsável por comprimir imagens dentro de um diretório especificado, otimizando o tamanho de arquivos para melhor performance. 
   - Para funcionar, ela depende do plugin `gulp-imagemin`, que comprime os arquivos de imagem sem perda de qualidade significativa.

2. **Função `comprimeJavascript`**
   - Esta função realiza a minificação e ofuscação de arquivos JavaScript, tornando o código menor e menos legível para proteger a lógica do projeto e melhorar o tempo de carregamento.
   - Ela usa dois plugins principais: `gulp-uglify` para minificar o código e `gulp-obfuscate` para ofuscar o JavaScript.

3. **Função `compilaSass`**
   - Esta função compila arquivos SASS para CSS, permitindo a utilização de funcionalidades avançadas do SASS e a conversão para um arquivo CSS pronto para o navegador.
   - Ela utiliza `gulp-sass` para compilar o SASS e `gulp-sourcemaps` para gerar mapas de fontes que facilitam o debugging, mapeando o CSS gerado ao código-fonte original.

## Execução das Tarefas

- A função padrão `exports.default` configura o Gulp para monitorar mudanças nos arquivos SASS, JavaScript e imagens. Quando uma alteração é detectada, a tarefa correspondente é executada automaticamente.
- Com essa automação, o fluxo de trabalho se torna mais eficiente, pois elimina a necessidade de processos manuais para cada atualização de código.

---

# Module 16: Task Automation with Gulp

In this module, we explored using Gulp to automate repetitive tasks in Front-End development, saving time and increasing project efficiency.

## Topics Covered

1. **Gulp Installation**
   - Learned how to install Gulp globally and as a project dependency.

2. **Setting Up a Gulp Project**
   - Configured a new project with Gulp and set up the automation environment.

3. **Gitignore Files**
   - Created a `.gitignore` file to protect build files and sensitive data.

4. **Task Automation Concept**
   - Understood the importance of task automation to streamline the development workflow.

5. **Using Plugins in Gulp**
   - Installed and configured plugins for specific tasks, such as SASS compilation and image compression.

6. **Creating and Running Tasks in Gulp**
   - Created public and private tasks to automate repetitive processes and manage development more efficiently.

## Explanation of Created Functions

1. **`comprimeImagens` Function**
   - This function compresses images in a specified directory, optimizing file size for better performance.
   - It requires the `gulp-imagemin` plugin, which compresses image files with minimal quality loss.

2. **`comprimeJavascript` Function**
   - This function minifies and obfuscates JavaScript files, reducing code size and making it less readable to protect project logic and improve loading time.
   - It uses two main plugins: `gulp-uglify` to minify the code and `gulp-obfuscate` to obfuscate the JavaScript.

3. **`compilaSass` Function**
   - This function compiles SASS files into CSS, enabling the use of advanced SASS features and converting them into a CSS file ready for the browser.
   - It relies on `gulp-sass` to compile SASS and `gulp-sourcemaps` to generate source maps, making debugging easier by mapping the generated CSS back to the original source code.

## Task Execution

- The default function `exports.default` sets up Gulp to watch for changes in SASS, JavaScript, and image files. When a change is detected, the corresponding task is executed automatically.
- This automation streamlines the workflow by eliminating the need for manual processing with each code update.
