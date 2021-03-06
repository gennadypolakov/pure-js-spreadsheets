import {$} from '@core/dom';

/**
 *
 */
export class Spreadsheet {
  /**
   *
   * @param {string} selector
   * @param {{components: (Header | Toolbar | Formula | Table)[]}} options
   */
  constructor(selector, options) {
    this.$el = $(selector);
    this.components = options.components || [];
  }

  /**
   *
   * @return {Dom}
   */
  getRoot() {
    const $root = $.create('div', 'spreadsheet');

    this.components = this.components.map((Component) => {
      const $el = $.create('div', Component.className);
      const component = new Component($el);
      $el.html(component.toHTML());
      $root.append($el);
      return component;
    });

    return $root;
  }

  /**
   *
   */
  render() {
    this.$el.append(this.getRoot());
    this.components.forEach((component) => component.init());
  }
}
