/**
 *
 * @param {MouseEvent} event
 * @return {boolean}
 */
export const shouldResize = (event) => {
  return !!event.target.dataset.resize;
};

/**
 *
 * @param {MouseEvent} event
 * @return {boolean}
 */
export const isCell = (event) => {
  return event.target.dataset.type === 'cell';
};
