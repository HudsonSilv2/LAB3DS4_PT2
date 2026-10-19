/**
 * Atividade #2 - Fundamentos de JavaScript
 * Aluno: Hudson | Outubro de 2026
 * Exibe uma matriz 9x9 e desenha a letra H com JavaScript.
 */

const GRID_SIZE = 9;
const matrixElement = document.querySelector('#matrix');
const drawButton = document.querySelector('#drawButton');
const clearButton = document.querySelector('#clearButton');
const filledCount = document.querySelector('#filledCount');
const statusText = document.querySelector('#statusText');
const statusIndicator = document.querySelector('#statusIndicator');

/**
 * Cria as 81 celulas da matriz no DOM, incluindo atributos de acessibilidade.
 * A funcao usa Array.from e map (estilo funcional) para gerar os elementos.
 * @returns {void}
 */
function createMatrix() {
  const indices = Array.from({ length: GRID_SIZE * GRID_SIZE }, (_, index) => index);
  const cells = indices.map((index) => {
    const cell = document.createElement('div');
    const row = Math.floor(index / GRID_SIZE);
    const column = index % GRID_SIZE;
    cell.className = 'cell';
    cell.setAttribute('role', 'gridcell');
    cell.setAttribute('aria-label', `Linha ${row + 1}, coluna ${column + 1}: vazia`);
    return cell;
  });
  matrixElement.replaceChildren(...cells);
}

/**
 * Calcula, sem alterar o DOM, se uma posicao integra a letra H.
 * Regra: colunas 2 e 8 inteiras e linha central 5, entre essas colunas.
 * @param {number} row - Indice da linha, de 0 a 8.
 * @param {number} column - Indice da coluna, de 0 a 8.
 * @returns {boolean} Verdadeiro quando a celula faz parte da letra H.
 */
function isHCell(row, column) {
  return column === 1 || column === 7 || (row === 4 && column >= 1 && column <= 7);
}

/**
 * Atualiza visualmente a matriz de acordo com uma funcao de selecao.
 * Separa a regra de negocio (predicate) da atualizacao visual.
 * @param {(row: number, column: number) => boolean} predicate - Regra de preenchimento.
 * @returns {number} Quantidade de celulas coloridas.
 */
function paintCells(predicate) {
  const cells = Array.from(matrixElement.children);
  const results = cells.map((cell, index) => {
    const row = Math.floor(index / GRID_SIZE);
    const column = index % GRID_SIZE;
    const shouldFill = predicate(row, column);
    cell.classList.toggle('filled', shouldFill);
    cell.setAttribute('aria-label', `Linha ${row + 1}, coluna ${column + 1}: ${shouldFill ? 'preenchida' : 'vazia'}`);
    return shouldFill;
  });
  const total = results.filter(Boolean).length;
  filledCount.textContent = `${total} de ${GRID_SIZE * GRID_SIZE} células`;
  return total;
}

/**
 * Desenha a inicial H usando a regra pura isHCell.
 * @returns {void}
 */
function drawInitial() {
  paintCells(isHCell);
  statusText.textContent = 'Letra H desenhada';
  statusIndicator.classList.add('active');
}

/**
 * Limpa todas as celulas sem destruir a grade 9x9.
 * @returns {void}
 */
function clearMatrix() {
  paintCells(() => false);
  statusText.textContent = 'Matriz limpa';
  statusIndicator.classList.remove('active');
}

createMatrix();
drawButton.addEventListener('click', drawInitial);
clearButton.addEventListener('click', clearMatrix);
