import {SpreadsheetComponent} from '@core/SpreadsheetComponent';

/**
 *
 */
export class Formula extends SpreadsheetComponent {
  /**
   *
   * @type {string}
   */
  static className = 'spreadsheet__formula';

  /**
   *
   * @param {any} $root
   */
  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input']
    });
  }

  /**
   *
   * @return {string}
   */
  toHTML() {
    return `
            <div class="info">fx</div>
            <div class="input" contenteditable spellcheck="false"></div>
    `;
  }

  /**
   *
   * @param {any} event
   */
  onInput(event) {
    console.log('Formula: onInput', event);
  }
}
