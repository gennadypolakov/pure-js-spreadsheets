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
   * @param {Dom} $root
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
    console.log('Formula: onInput', event.target.textContent.trim());
  }

  /**
   *
   * @param {any} event
   */
  onClick(event) {
    console.log('Formula: onClick', event.target.textContent.trim());
  }
}
