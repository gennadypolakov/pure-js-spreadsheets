import {SpreadsheetComponent} from '@core/SpreadsheetComponent';

/**
 *
 */
export class Header extends SpreadsheetComponent {
  /**
   *
   * @type {string}
   */
  static className = 'spreadsheet__header';

  /**
   *
   * @return {string}
   */
  toHTML() {
    return `
            <input type="text" value="Новая таблица" class="input"/>
            <div>
                <div class="button">
                    <i class="material-icons">delete</i>
                </div>
                <div class="button">
                    <i class="material-icons">exit_to_app</i>
                </div>
            </div>
`;
  }
}
