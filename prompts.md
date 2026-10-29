# CONTEXTO DO PROJETO — GAME LIBRA

Estou desenvolvendo um site chamado **Game Libra**, uma enciclopédia/wiki de jogos. O projeto está sendo feito no Visual Studio Code utilizando HTML, CSS e JavaScript.

Quero que você entenda o que já foi desenvolvido e me ajude a continuar o projeto sem reconstruir tudo do zero.

## 1. Objetivo do site

O Game Libra será uma wiki de jogos que apresenta informações para jogadores iniciantes e experientes.

A página inicial possui cards com os nomes dos jogos e uma pequena explicação sobre cada um.

Quando o usuário clicar em um card, deverá abrir uma página de detalhes com informações mais completas sobre aquele jogo.

Não quero criar um arquivo HTML separado para cada jogo. Quero utilizar uma única estrutura de detalhes, preenchida dinamicamente pelo JavaScript conforme o jogo selecionado.

## 2. Jogos cadastrados

O projeto terá os seguintes 15 jogos:

1. Minecraft
2. Terraria
3. Undertale
4. Stardew Valley
5. Animal Crossing
6. Hollow Knight
7. Celeste
8. Hades
9. The Legend of Zelda: Breath of the Wild
10. Super Mario Odyssey
11. Dark Souls
12. Plants vs. Zombies
13. Five Nights at Freddy's
14. Among Us
15. League of Legends

## 3. Estrutura atual dos arquivos

O projeto possui três arquivos principais:

- `index.html` — estrutura do site.
- `style.css` — aparência visual.
- `script.js` — funcionalidades e interações.

Os três arquivos já estão conectados e o projeto funciona com Live Server.

## 4. O que já foi desenvolvido

### Página inicial
- Título Game Libra.
- Pequena apresentação do site.
- Campo de pesquisa com o ID `game-search`.
- Cards dos 15 jogos.
- Cada card possui a classe `game-card`.
- Cada card contém um título em `h3` e uma explicação curta em `p`.

### Página de detalhes
Foi criada uma seção no HTML com o ID `game-details`, inicialmente escondida.

Ela possui:

- Botão de voltar com ID `back-button`.
- Título do jogo com ID `game-title`.
- Descrição detalhada com ID `game-description`.
- História com ID `game-story`.
- Itens principais com ID `game-items`.
- Mobs e personagens com ID `game-mobs`.
- Curiosidades e Easter Eggs com ID `game-secrets`.

### JavaScript
Já existem seleções de elementos do HTML, incluindo:

- `searchInput`
- `gameCards`
- `gameDetails`
- `gameTitle`
- `gameDescription`
- `backButton`
- `homeSection`
- `gameStory`
- `gameItems`
- `gameMobs`
- `gameSecrets`

Também foi criado um objeto chamado `gameData`, que armazena as informações dos jogos.

Por enquanto, o Minecraft é o primeiro jogo cadastrado nesse objeto.

Os dados do Minecraft incluem:
- Descrição detalhada.
- História.
- Lista de itens principais.
- Lista de mobs.
- Lista de curiosidades e Easter Eggs.

### Funcionamento dos cards
O clique nos cards já está conectado ao JavaScript.

Quando o usuário clica em Minecraft:
- A página inicial desaparece.
- A página de detalhes aparece.
- O título e as informações do Minecraft são carregados.
- Os itens, mobs e curiosidades são exibidos automaticamente.

### Botão de voltar
O botão já funciona e retorna o usuário à página inicial.

## 5. Pesquisa

Existe um campo de pesquisa que utiliza o evento `input` para filtrar os cards.

A intenção é que, quando o usuário digitar o nome de um jogo, somente os cards correspondentes permaneçam visíveis. Os demais devem desaparecer temporariamente.

Ao apagar o texto da pesquisa, todos os cards devem voltar a aparecer.

Verifique se essa funcionalidade está funcionando corretamente antes de fazer alterações.

## 6. Como quero que o projeto continue

Quero desenvolver o projeto por etapas.

As próximas tarefas são:

1. Verificar e corrigir a pesquisa, caso necessário.
2. Garantir que todos os cards abram a página de detalhes.
3. Cadastrar os dados dos outros 14 jogos no objeto `gameData`.
4. Garantir que cada jogo exiba suas próprias informações.
5. Melhorar a organização das informações na página de detalhes.
6. Verificar se todas as funcionalidades estão funcionando.

Cada jogo deverá possuir, quando aplicável:

- Descrição detalhada.
- História e contexto.
- Itens principais (aproximadamente 5 a 8).
- Mobs, personagens ou inimigos importantes (aproximadamente 5 a 8).
- Curiosidades e Easter Eggs.

Não é necessário listar absolutamente todos os itens ou criaturas de jogos grandes como Minecraft. O objetivo é selecionar os mais importantes e interessantes.

Adapte as categorias conforme o gênero do jogo. Por exemplo, jogos que não possuem mobs podem apresentar personagens, inimigos ou elementos importantes.

## 7. INSTRUÇÕES IMPORTANTES PARA VOCÊ

Quero que você atue como um professor e assistente de programação.

- Primeiro, analise os arquivos existentes.
- Não apague nem reconstrua o projeto.
- Não substitua códigos que já estão funcionando sem necessidade.
- Não altere o design visual sem eu pedir.
- Não crie arquivos HTML separados para cada jogo.
- Evite duplicar funções.
- Preserve os IDs e classes já utilizados.
- Antes de modificar qualquer código, explique o que pretende mudar.
- Trabalhe em pequenas etapas e teste cada funcionalidade.
- Se encontrar algum erro, explique a causa e proponha uma correção.
- Não faça alterações gigantescas de uma só vez.

**IMPORTANTE:** Sou estudante e preciso aprender a programação, não apenas receber um site pronto. Explique o que cada alteração faz, por que ela é necessária e onde deve ser colocada. Quero conseguir entender e explicar o funcionamento do projeto ao meu professor.

Comece analisando os arquivos `index.html`, `style.css` e `script.js`. Depois, apresente um diagnóstico do que já está funcionando e do que ainda precisa ser feito. Não faça alterações antes de me explicar o diagnóstico.
