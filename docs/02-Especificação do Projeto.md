# Especificações do Projeto

A determinação exata do problema, suas personas, requisitos funcionais e não-funcionais foram acordadas em reuniões online entre os membros da equipe. Foram reunidas informações e observações e, complementarmente. Os detalhes levantados nesse processo auxiliaram na construção de personas e histórias de usuários.

## Personas

![image](https://user-images.githubusercontent.com/100412134/222991590-cb61dc0c-20e6-48ed-8e95-073aab82697b.png)
![image](https://user-images.githubusercontent.com/100412134/222991609-71843ad7-05ae-43ef-af73-fecccaeaf569.png)
![image](https://user-images.githubusercontent.com/100412134/222991624-8f91bb54-f072-4fb0-b645-7fc64fc217f4.png)
![image](https://user-images.githubusercontent.com/100412134/222991640-9c30d5f3-8062-4aeb-aa31-c429ca08b7d9.png)

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Carlos Moreira    | Cronometrar o tempo gasto para executar tarefas.| Revisar os conteúdos da prova com mais facilidade.|
|Carlos Moreira    | Ser notificado quando o tempo alocado para a execução de uma tarefa acabar.| Avançar para as próximas tarefas.  |
|Mônica Ribeiro     | Ajustar o tempo gasto em cada tarefa.  | Ter tempo livre aos finais de semana. |
|Ricardo Nunes     | Organizar e controlar tarefas por meio de listas   | Otimizar a entrega de trabalhos dentro do prazo. |
|Ricardo Nunes     | Cadastrar um perfil e acessar regularmente, por meio de login, as informações da lista.| Acompanhar e controlar sua produtividade. |
|Ângela Santos     | Marcar tarefas como concluídas.   | Controlar as tarefas cadastradas. |
|Ângela Santos     | Excluir tarefas desnecessárias.   | Não se preocupar com uma tarefa que não precisa de ser cumprida. |

## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Lidar com as tarefas do dia a dia, assim como objetivos a serem alcançados, novas necessidades e coisas a serem resolvidas que sempre surgem está cada vez mais complicado.
Fazer com que sonhos se tornem concretos, que tarefas se tornem hábitos, sem ser algo frustrante por desistir mais uma vez, tem sido algo cada dia mais difícil, em um mundo onde as coisas estão cada vez mais dinâmicas, com excesso de informação e mudança constante, tornando a organização e a conclusão do que se inicie cada vez mais desafiador.

### Descrição Geral da Proposta

Vemos a necessidade das pessoas terem a possibilidade de se organizar de forma fácil, sem que isso se torne mais uma obrigação que complique o seu dia. 
Nossa proposta é um facilitador, com o uso mais simples possível, que vai auxiliar a ter uma visão ampla do seu dia, para que possa cada vez enxergar melhor e entender o que mais te importar e assim chegar onde quer. 
Seja tendo novo hábito saudável, uma nova rotina de estudo, se organizando para ter tempo livre, o importante é apoiar e facilitar nas tarefas que fazem parte da vida.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/Pomodoro_List/blob/main/docs/img/V02_Diagrama_fluxo_as_is.png?raw=true)

### Processo Atual 1 – Sem organização para tarefas a serem realizadas.

O usuário não consegue acompanhar as tarefas que precisa realizar, seja pontualmente, ou frequentemente. 

### Processo Proposto 1 – Registro das tarefas no aplicativo Task-IT.
O usuário cadastra, de forma simples, todas as suas tarefas de acordo com a necessidade, para que consiga se organizar e acompanhar suas demandas.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/Pomodoro_List/blob/main/docs/img/V02_diagrama_fluxo_to_be.png?raw=true)

### Processo Atual 2 – Dificuldade em executar uma tarefa por causa da duração.

Tarefas de maior tempo de execução muitas vezes não são iniciadas por esse motivo, quando se pensa no tempo total, já existe um desânimo do usuário para não inicia-la.

### Processo Proposto 2 – Fracionar o tempo para tarefas longas.
Para esse tipo de tarefas, podemos realizar o método pomodoro, e assim fazer pequenas pausas para que se torne mais suave a execução e assim concluir todo o processo.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/Pomodoro_List/blob/main/docs/img/V02_diagrama_fluxo_to_be_02.png?raw=true)

## Indicadores de Desempenho

|# | Indicador | Objetivos |Descrição|Cálculo|Fonte|Perspectiva|
|--| ----------| ----------|---------|-------|-----|----------|
|01|Número de usuários cadastrados|Aumentar a taxa de crescimento do aplicativo|Avaliar quantos usuários novos cadastram-se por mês|Média do número de usuários cadastrados por mês|Banco de dados do projeto|Aumentar a taxa de crescimento em 10% ao mês| 
|02|Número de desinstalações do aplicativo|Reduzir o número de desinstalações|Avaliar as mudanças necessárias para evitar futuras desinstalações|Média do número de desinstalações realizadas por mês|Dados fornecidos pela Playstore/AppleStore|Diminuir o número de desinstalações em 20%| 
|03|Nota do Aplicativo|Aumentar a nota de satisfação do usuário|Verificar a nota exibida aos usuários|Calculada com base nas notas mais recentes|Dados fornecidos pela Playstore/AppleStore|Aumentar a nota para 5 estrelas| 
|04|Análise da frequência de uso|Aumentar a frequência de uso|Gerar relatório da atividade diária dos usuários ativos|Número de tarefas criadas/editadas/concluídas por dia|Banco de dados do projeto|Aumentar o número de usuários ativos em 10%| 
|05|Qualidade do aplicativo|Diminuir quantidade de falhas que o aplicativo apresentou|Analisar os indicadores de qualidade|Quantidade de falhas que o aplicativo apresentou por mês|Dados fornecidos pela Playstore/AppleStore|Corrigir e verificar as falhas| 

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

A tabela a seguir apresenta os requisitos do projeto, identificando a prioridade em que os mesmos devem ser entregues. 

|ID    | Descrição do Requisito  | Prioridade |
|--------|-----------------------------------------|----|
|RF-001  | O software deve apresentar um timer para o controle de tempo. | MÉDIA | 
|RF-002  | O timer deve possibilitar que o usuário ajuste o tempo no modo manual para executar uma tarefa.   | MÉDIA |
|RF-003  | O software deve notificar o usuário quando o tempo do timer acabar.   | MÉDIA |
|RF-004  | O software deve permitir que o usuário crie uma tarefa.   | ALTA |
|RF-005  | O software deve permitir que o usuário edite uma tarefa.   | MÉDIA |
|RF-006  | O software deve permitir que o usuário realize a marcação de tarefas realizadas.   | MÉDIA |
|RF-007  | O software deve permitir que o usuário exclua uma tarefa.   | ALTA |
|RF-008  | O software deve permitir que as tarefas sejam configuradas como recorrentes (diárias, semanais, mensais).   | MÉDIA |
|RF-009  | O software deve ter uma tela de login. | ALTA |
|RF-010  | O software deve ter uma tela de cadastro.   | ALTA |
|RF-011  | O software deve permitir que o usuário recupere a senha.   | MÉDIA |
|RF-012  | O software deve ocultar a senha do usuário no momento do login.   | ALTA |


### Requisitos não Funcionais

A tabela a seguir apresenta os requisitos não funcionais que o projeto deverá atender.

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação deve ser publicada em repositório público acessível na internet (Repl.it, GitHub Pages etc.).| ALTA | 
|RNF-002| Uso de design responsivo nas interfaces gráficas para diferentes tipos de telas de celular, tablet e etc. |  ALTA | 
|RNF-003| O aplicativo deve ser compatível com os principais navegadores do mercado para mobile (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari) |  ALTA | 
|RNF-004| O site não apresentará aos usuários quaisquer dados de cunho privativo e deverá atender às normas legais, tais como padrões LGPD e etc. | ALTA | 

## Restrições

As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir.

|ID| Restrição                                             |
|-----|-------------------------------------------------------|
|RE-01| O projeto necessita ser entregue até 26/06/2023, respeitando o prazo estipulado. |
|RE-02| O projeto deve ser implementado com uso de tecnologias mobile, podendo fazer uso de bibliotecas que influenciam positivamente na qualidade do software.|
|RE-03| O projeto se limita ao desenvolvimento mobile front-end utilizando as linguagens HTML, CSS, JavaScript e React, para que os usuários possam visualizar e interagir com o site na versão mobile.|

## Diagrama de Casos de Uso

O diagrama de casos de uso, ajuda a mapear o projeto, de forma clara e objetiva. Modelando os principais atributos, conexões, suas classes, operações e relações entre objetos.

![image](https://user-images.githubusercontent.com/100412134/222994022-15b2777d-3555-4cf7-b739-e65313d4992a.png)

# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo uma visão ampla do escopo do projeto. 

- Com ‘’X’’ estão os requisitos funcionais, não funcionais e o diagrama de classes 

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/Pomodoro_List/blob/main/docs/img/Matriz.png)

# Gerenciamento de Projeto

Observando o cronograma geral dos entregáveis do projeto, figura abaixo, junto aos requisitos, foi possível a criação de um plano de gestão que contempla a gestão de tempo e recursos que serão utilizados durante o projeto.

## Gerenciamento de Tempo

O prazo total para a entrega do projeto é até o dia 23/06/2023, assim seguindo o cronograma geral, foi possível elaborar uma tabela com os marcos de início e fim das tarefas planejadas, conforme abaixo:

|Projeto     | Início  |Fim |
|-------|-------------------------|----|
|Documentação com o Projeto| 20/02/23| 05/03/23 | 
|Modelagem| 10/03/23 |  02/04/23 | 
|Metodologia| 11/03/23  | 02/04/23 | 
|Projeto Interface|12/03/23 |  02/04/23 | 
|Funcionalidades| 23/03/23 | 02/04/23 |
|Programação funcionalidades| 13/04/23 | 07/05/23 |
|Testes de funcionalidades| 30/04/23 | 11/05/23 |

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![image](https://user-images.githubusercontent.com/100412134/222993378-5a1f08c5-30d5-4af9-b54c-825eda354d23.png)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados.

Para gerenciamento do projeto, utilizaremos a metodologia ágil scrum. Nossa equipe está dividida da seguinte maneira:

- Vinícius Eduardo Silva Oliveira: Desenvolvedor<br>
- Thais Munhoz Carneiro: Project owner<br>
- Thaís Malta Boscatti: Desenvolvedor<br>
- Igor Teixeira da Costa: Scrum Master<br>
- Caroline Samara Araujo da Silva: Design e desenvolvedor<br>
- Thiago henrique Silva: Design e desenvolvedor<br>
- Diego Victor Fraga: Desenvolvedor<br>

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

![image](https://user-images.githubusercontent.com/100412134/222993288-22402bb7-8e64-40d5-8fcd-3f19f05f4a4f.png)
