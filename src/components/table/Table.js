import {SpreadsheetComponent} from '@core/SpreadsheetComponent';
import {createTable} from '@/components/table/table.template';
import {resizeHandler} from '@/components/table/table.resize';
import {isCell, shouldResize} from '@/components/table/table.functions';
import {TableSelection} from '@/components/table/TableSelection';
import {$} from '@core/dom';

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
   */
  prepare() {
    this.selection = new TableSelection();
  }

  /**
   *
   */
  init() {
    super.init();

    this.selection = new TableSelection();
    const $cell = this.$root.find('[data-id="0:0"]');
    this.selection.select($cell);
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
    } else if (isCell(event)) {
      this.selection.select($(event.target));
    }
  }
}
