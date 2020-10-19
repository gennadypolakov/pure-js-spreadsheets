/**
 *
 */
export class Spreadsheet {
  /**
   *
   * @param {string} selector
   * @param {(Header | Toolbar | Formula | Table)[]} options
   */
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.components = options.components || [];
  }

  /**
   *
   * @return {HTMLDivElement}
   */
  getRoot() {
    const $root = document.createElement('div');
    this.components.forEach((Component) => {
      const component = new Component();
      $root.insertAdjacentHTML('beforeend', component.toHTML());
    });
    return $root;
  }

  /**
   *
   */
  render() {
    this.$el.insertAdjacentHTML('afterbegin', ``);
  }
}
