import {DomListener} from '@core/DomListener';

/**
 *
 */
export class SpreadsheetComponent extends DomListener {
  /**
   *
   * @type {string}
   */
  name;

  /**
   *
   * @param {Dom} $root
   * @param {{name: string, listeners: string[]}} options
   */
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
    this.prepare();
  }

  /**
   *
   */
  prepare() {}

  /**
   *
   * @return {string}
   */
  toHTML() {
    return '';
  }

  /**
   *
   */
  init() {
    this.initDOMListener();
  }

  /**
   *
   */
  destroy() {
    this.removeDOMListener();
  }
}
