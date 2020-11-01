const CODES = {
  A: 65,
  Z: 90
};

/**
 *
 * @param {string} content
 * @param {number} i
 * @return {string}
 */
function toCell(content, i) {
  return `
  <div class="cell" contenteditable>${content}</div>
`;
}

/**
 *
 * @param {string} content
 * @return {string}
 */
function toColumn(content) {
  return `
  <div class="column">
    ${content}
    <div class="col-resize"></div>
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
    <div class="row">
      <div class="row-info">
        ${i ? i : ''}
        ${i ? '<div class="row-resize"></div>' : ''}
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
  for (let i = 0; i < rowCount; i++) {
    const cells = new Array(colCount)
        .fill('')
        .map(toCell)
        .join('');
    rows.push(createRow(i + 1, cells));
  }
  return rows.join('');
}