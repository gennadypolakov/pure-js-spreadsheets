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
   * @return {string}
   */
  toHTML() {
    return `
            <div class="info">fx</div>
            <div class="input" contenteditable spellcheck="false"></div>
    `;
  }
}
