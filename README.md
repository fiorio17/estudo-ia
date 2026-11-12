# Mapa de estudo — Inteligência Artificial

Material de revisão da disciplina de Inteligência Artificial, montado a partir
dos slides das aulas. Páginas HTML independentes, sem nenhuma dependência
externa — abrem direto no navegador, inclusive offline.

**→ [fiorio17.github.io/estudo-ia](https://fiorio17.github.io/estudo-ia/)**

## O que tem aqui

| Página | Para quê |
|---|---|
| [`guia.html`](guia.html) | A matéria inteira, do histórico da IA ao A\*, com um simulador interativo que roda os cinco algoritmos de busca passo a passo no labirinto da aula. 18 flashcards no fim. |
| [`tracado.html`](tracado.html) | Sete exercícios no formato da questão longa: executar o algoritmo à mão e preencher a tabela iteração por iteração, com correção campo a campo. |
| [`simulado.html`](simulado.html) | 35 questões objetivas com correção imediata e explicação, mais 4 discursivas com o roteiro da resposta esperada. |
| [`genetico.html`](genetico.html) | Aula 11. Ciclo do AG, fitness, seleção, crossover, mutação, TSP. Laboratórios: simulação de 4 bits (x²), AG completo no caixeiro viajante, PMX/OX passo a passo, mutações swap/insertion/inversion, calculadora de força bruta. |
| [`pln.html`](pln.html) | Aulas 12 e PLN II. Pipeline, stopwords, stemming × lematização, BoW, TF-IDF, embeddings, similaridade de cosseno, Word2Vec, Transformers, atenção (Q, K, V, softmax), máscara causal, LLMs e RAG. Calculadoras para as contas dos slides. |
| [`visao.html`](visao.html) | Aula 15. Pixels, RGB/BGR, cinza, Canny (5 etapas), HSV, máscaras, centro por momentos e o jogo com webcam. Roda sobre imagem de teste, foto sua ou webcam, tudo local. |
| [`simulado2.html`](simulado2.html) | 73 questões objetivas sobre genéticos, PLN e visão, com correção imediata e explicação, mais 4 discursivas. |

O peso está em busca: **BFS, DFS, Dijkstra, busca gulosa e A\***. O restante da
matéria (agentes e PEAS, IA simbólica × baseada em dados, riscos, alucinações,
MCP, n8n) está coberto no guia e no simulado.

## Rodando local

Não tem build, servidor nem instalação:

```bash
git clone https://github.com/fiorio17/estudo-ia.git
```

Abra `index.html` no navegador. Funciona sem internet. (O modo webcam do jogo em
`visao.html` exige `https` ou `localhost`, por restrição dos navegadores.)

## Sobre as páginas novas

Onde os slides trazem números ilustrativos ou pequenos deslizes, as páginas
avisam em vez de copiar:

- Genéticos: os rótulos de "3 saltos" e "4 saltos" nos filhos do crossover do
  grafo estão trocados no slide; 9! é 362 880 (a tabela escreve 365 880).
- PLN: os pesos de atenção do slide (0,05 / 0,55 / ...) são ilustrativos e não
  saem exatamente do softmax das compatibilidades; o laboratório calcula o
  softmax de verdade.
- Os resultados do PMX e do OX foram conferidos contra os exemplos dos slides.

## Sobre os gabaritos

Todos os traços de execução foram gerados rodando os algoritmos de verdade e
conferidos contra uma segunda implementação independente. Onde o material usa o
labirinto e os grafos das próprias aulas, o resultado bate com os slides.

Dois pontos divergem do que está projetado em aula, de propósito, e estão
explicados dentro do guia:

- No grafo do Dijkstra, a distância mínima de A até **E é 8** (por `A → C → E`),
  não 6 — o 6 é a distância até D.
- As células de lama do labirinto são uma escolha própria, já que os slides não
  deixam legível quais são.

Há ainda uma diferença de convenção que muda a contagem de iterações: as aulas
testam o objetivo **ao gerar** o vizinho (a BFS fecha em 17 iterações), enquanto
Dijkstra e A\* aqui testam **ao expandir**, que é a forma que preserva a garantia
de otimalidade. Está detalhado no guia.

## Estrutura

```
index.html      página inicial
guia.html       guia + simulador de busca
tracado.html    exercícios de traçado
simulado.html   simulado (busca e fundamentos)
genetico.html   algoritmos genéticos (aula 11)
pln.html        processamento de linguagem natural (aulas 12 e PLN II)
visao.html      visão computacional (aula 15)
simulado2.html  simulado das aulas novas
base.css        estilo das páginas novas
comum.js        utilidades das páginas novas (flashcards, sliders)
theme.js        alterna tema claro/escuro (compartilhado)
```

`guia.html`, `tracado.html` e `simulado.html` carregam CSS e JS embutidos; as
páginas novas compartilham `base.css` e `comum.js`.

## Bibliografia

RUSSELL, Stuart J.; NORVIG, Peter. *Inteligência Artificial: Uma Abordagem
Moderna*. Rio de Janeiro: GEN LTC, 2022.
