import {DomListener} from '@core/DomListener';

/**
 *
 */
export class SpreadsheetComponent extends DomListener {
  /**
   *
   * @param {any} $root
   * @param {any} options
   */
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
  }

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
}
