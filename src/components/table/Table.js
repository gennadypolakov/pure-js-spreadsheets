import {SpreadsheetComponent} from '@core/SpreadsheetComponent';
import {createTable} from '@/components/table/table.template';

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
      // listeners: [
      //   'click',
      //   'mousedown',
      //   'mouseup',
      //   'mousemove'
      // ]
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
  //
  // /**
  //  *
  //  * @param {MouseEvent} event
  //  */
  // onMousedown(event) {
  //   console.log(event.type);
  // }
  //
  // /**
  //  *
  //  * @param {MouseEvent} event
  //  */
  // onMouseup(event) {
  //   console.log(event.type);
  // }
  //
  // /**
  //  *
  //  * @param {MouseEvent} event
  //  */
  // onMousemove(event) {
  //   console.log(event.type);
  // }
}
