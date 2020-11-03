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
      const type = $resizer.data.resize;

      const cells = this.$root.findAll(`[data-col="${$parent.data.col}"]`);

      document.onmousemove = (e) => {
        if (type === 'col') {
          const delta = e.pageX - coords.right;
          const value = coords.width + delta;
          $parent.css({width: value + 'px'});
          cells.forEach((el) => el.style.width = value + 'px');
        } else {
          const delta = e.pageY - coords.bottom;
          const value = coords.height + delta;
          $parent.css({height: value + 'px'});
        }
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
