const CODES = {
  A: 65,
  Z: 90
};

/**
 * @typedef ToCell
 * @type {function}
 * @param {string} _
 * @param {number} col
 * @return {string}
 */

/**
 *
 * @param {number} row
 * @return {ToCell}
 */
const toCell = (row) => (_, col) => `
<div
  class="cell"
  contenteditable
  data-id="${row}:${col}"
  data-col="${col}"
  data-type="cell"
></div>
`;

/**
 *
 * @param {string} content
 * @param {number} index
 * @return {string}
 */
function toColumn(content, index) {
  return `
  <div class="column" data-type="resizable" data-col="${index}">
    ${content}
    <div class="col-resize" data-resize="col"></div>
  </div>
`;
}

/**
 * @param {number | null} i
 * @param {string} content
 * @return {string}
 */
function createRow(i, content) {
  return `
    <div class="row" data-type="resizable">
      <div class="row-info">
        ${i ? i : ''}
        ${i ? '<div class="row-resize" data-resize="row"></div>' : ''}
      </div>
      <div class="row-data">${content}</div>
    </div>
`;
}

/**
 *
 * @param {string} _
 * @param {number} i
 * @return {string}
 */
function toChar(_, i) {
  return String.fromCharCode(CODES.A + i);
}

/**
 * @param {number} rowCount
 * @return {string}
 */
export function createTable(rowCount = 10) {
  const colCount = CODES.Z - CODES.A + 1;
  const rows = [];
  const cols = new Array(colCount)
      .fill('')
      .map(toChar)
      .map(toColumn)
      .join('');
  rows.push(createRow(null, cols));
  for (let row = 0; row < rowCount; row++) {
    const cells = new Array(colCount)
        .fill('')
        .map(toCell(row))
        .join('');
    rows.push(createRow(row + 1, cells));
  }
  return rows.join('');
}
