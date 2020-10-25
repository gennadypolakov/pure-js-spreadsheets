import {SpreadsheetComponent} from '@core/SpreadsheetComponent';

/**
 *
 */
export class Toolbar extends SpreadsheetComponent {
  /**
   *
   * @type {string}
   */
  static className = 'spreadsheet__toolbar';

  /**
   *
   * @return {string}
   */
  toHTML() {
    return `
            <div class="button">
                <i class="material-icons">format_align_left</i>
            </div>
            <div class="button">
                <i class="material-icons">format_align_center</i>
            </div>
            <div class="button">
                <i class="material-icons">format_align_right</i>
            </div>
            <div class="button">
                <i class="material-icons">format_bold </i>
            </div>
            <div class="button">
                <i class="material-icons">format_italic</i>
            </div>
            <div class="button">
                <i class="material-icons">format_underlined</i>
            </div>
    `;
  }
}
