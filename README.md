## Objetivo

Exibir uma matriz **9 × 9** (81 células), desenhar a inicial **H** por meio de JavaScript e limpar a matriz por meio de outro botão. A interface usa apenas **HTML, CSS e JavaScript puro**, sem bibliotecas externas.

## Estrutura

```text
atividade-js-hudson/
├── index.html         # Estrutura da página, botões e matriz
├── style.css          # Layout responsivo, cores e células
├── script.js          # Criação, desenho e limpeza
├── README.md          # Documentação e instruções
├── diagramas-e-evidencias.pdf  # Diagramas e prints para entrega
└── evidencias/        # Capturas reais da página
```

## Como executar

1. Baixe ou clone o repositório.
2. Abra `index.html` em qualquer navegador moderno.
3. Clique em **Desenhar letra H** para preencher as células da inicial.
4. Clique em **Limpar matriz** para resetar todas as células.

Não é necessário Node.js, servidor, dependências ou instalações adicionais.

## Métodos JavaScript (documentação JSDoc no código)

| Método | Função |
| --- | --- |
| `createMatrix()` | Cria as 81 células da grade 9 × 9 e adiciona acessibilidade. |
| `isHCell(row, column)` | Retorna `true` quando a posição deve fazer parte da letra H. É função pura. |
| `paintCells(predicate)` | Percorre as células e aplica a regra recebida; também atualiza a contagem. |
| `drawInitial()` | Chama `paintCells(isHCell)` e exibe o estado desenhado. |
| `clearMatrix()` | Chama `paintCells(() => false)` e restaura o estado vazio. |

## Aplicação de programação funcional

- `isHCell` é uma **função pura**: sempre retorna o mesmo resultado para os mesmos parâmetros, sem efeitos colaterais.
- `Array.from`, `map` e `filter` manipulam listas de posições de maneira declarativa.
- `paintCells` recebe uma função (*predicate*) como argumento (função de ordem superior).
- `clearMatrix` passa uma função anônima `() => false` para selecionar nenhuma célula.

## Lógica do H

Usamos índices iniciando em zero. As colunas 1 e 7 são preenchidas de cima a baixo; a linha 4 conecta as duas. O resultado usa **23 células**: 9 + 9 + 5.

```text
· █ · · · · · █ ·
· █ · · · · · █ ·
· █ · · · · · █ ·
· █ · · · · · █ ·
· █ █ █ █ █ █ █ ·
· █ · · · · · █ ·
· █ · · · · · █ ·
· █ · · · · · █ ·
· █ · · · · · █ ·
```
