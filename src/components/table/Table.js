import {SpreadsheetComponent} from '@core/SpreadsheetComponent';
import {createTable} from '@/components/table/table.template';
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
        // 'click',
        'mousedown',
        // 'mouseup',
        // 'mousemove'
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

  // /**
  //  *
  //  * @param {MouseEvent} event
  //  */
  // onClick(event) {
  //   console.log(event.type);
  // }

  /**
   *
   * @param {MouseEvent} event
   */
  onMousedown(event) {
    console.log(event.type);
    if (event.target.dataset.resize) {
      console.log(event.target.dataset.resize);
      const $resizer = $(event.target);
      const $parent = $resizer.closest('[data-type="resizable"]');
      const coords = $parent.getCoords();

      document.onmousemove = (e) => {
        const delta = e.pageX - coords.right;
        const value = coords.width + delta;
        $parent.$el.style.width = value + 'px';
      };
      document.onmouseup = (e) => {
        document.onmousemove = null;
      };
    }
  }

  // /**
  //  *
  //  * @param {MouseEvent} event
  //  */
  // onMouseup(event) {
  //   console.log(event.type);
  // }

  // /**
  //  *
  //  * @param {MouseEvent} event
  //  */
  // onMousemove(event) {
  //   console.log(event.type);
  // }
}
