# Mapa de estudo — Inteligência Artificial

Material de revisão da disciplina de Inteligência Artificial, montado a partir
dos slides das aulas. Três páginas HTML independentes, sem nenhuma dependência
externa — abrem direto no navegador, inclusive offline.

**→ [fiorio17.github.io/estudo-ia](https://fiorio17.github.io/estudo-ia/)**

## O que tem aqui

| Página | Para quê |
|---|---|
| [`guia.html`](guia.html) | A matéria inteira, do histórico da IA ao A\*, com um simulador interativo que roda os cinco algoritmos de busca passo a passo no labirinto da aula. 18 flashcards no fim. |
| [`tracado.html`](tracado.html) | Sete exercícios no formato da questão longa: executar o algoritmo à mão e preencher a tabela iteração por iteração, com correção campo a campo. |
| [`simulado.html`](simulado.html) | 35 questões objetivas com correção imediata e explicação, mais 4 discursivas com o roteiro da resposta esperada. |

O peso está em busca: **BFS, DFS, Dijkstra, busca gulosa e A\***. O restante da
matéria (agentes e PEAS, IA simbólica × baseada em dados, riscos, alucinações,
MCP, n8n) está coberto no guia e no simulado.

## Rodando local

Não tem build, servidor nem instalação:

```bash
git clone https://github.com/fiorio17/estudo-ia.git
```

Abra `index.html` no navegador. Funciona sem internet.

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
simulado.html   simulado
theme.js        alterna tema claro/escuro (compartilhado)
```

Cada página carrega o próprio CSS e JS embutidos; `theme.js` é o único arquivo
compartilhado.

## Bibliografia

RUSSELL, Stuart J.; NORVIG, Peter. *Inteligência Artificial: Uma Abordagem
Moderna*. Rio de Janeiro: GEN LTC, 2022.
