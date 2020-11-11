/**
 *
 */
export class TableSelection {
  /**
   *
   */
  constructor() {
    this.group = [];
  }

  /**
   * @param {Dom} $el
   */
  select($el) {
    this.group.push($el);
    $el.addClass('selected');
  }

  /**
   *
   */
  selectGroup() {}
}
