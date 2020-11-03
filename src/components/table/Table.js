import {SpreadsheetComponent} from '@core/SpreadsheetComponent';
import {createTable} from '@/components/table/table.template';
import {resizeHandler} from '@/components/table/table.resize';
import {shouldResize} from '@/components/table/table.functions';

/**
 *
 */
export class Table extends SpreadsheetComponent {
  /**
   *
   * @type {string}
   */
  static className = 'spreadsheet__table';

  /**
   *
   * @param {Dom} $root
   */
  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: [
        'mousedown'
      ]
    });
  }

  /**
   *
   * @return {string}
   */
  toHTML() {
    return createTable(20);
  }

  /**
   *
   * @param {MouseEvent} event
   */
  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event);
    }
  }
}
