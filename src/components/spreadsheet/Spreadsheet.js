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
    this.$el = document.querySelector(selector);
    this.components = options.components || [];
  }

  /**
   *
   * @return {HTMLDivElement}
   */
  getRoot() {
    const $root = $.create('div', 'spreadsheet');

    this.components.forEach((Component) => {
      const $el = $.create('div', Component.className);
      const component = new Component($el);
      $el.innerHTML = component.toHTML();
      $root.append($el);
    });

    return $root;
  }

  /**
   *
   */
  render() {
    this.$el.append(this.getRoot());
  }
}
