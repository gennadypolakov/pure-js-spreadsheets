/**
 *
 */
class Dom {
  /**
   * @param {string | HTMLElement} selector
   */
  constructor(selector) {
    this.selector = selector;
    this.$el = typeof selector === 'string' ?
      document.querySelector(selector) :
      selector;
  }

  /**
   * @param {string | undefined} html
   * @return {string | Dom}
   */
  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html;
      return this;
    }
    return this.$el.outerHTML.trim();
  }

  /**
   * @return {Dom}
   */
  clear() {
    this.html('');
    return this;
  }

  /**
   *
   * @param {string} eventType
   * @param {function} callback
   */
  on(eventType, callback) {
    this.$el.addEventListener(eventType, callback);
  }

  /**
   *
   * @param {string} eventType
   * @param {function} callback
   */
  off(eventType, callback) {
    this.$el.removeEventListener(eventType, callback);
  }

  /**
   *
   * @param {HTMLElement | Dom} node
   * @return {Dom}
   */
  append(node) {
    if (node instanceof Dom) {
      node = node.$el;
    }
    if (Element.prototype.append) {
      this.$el.append(node);
    } else {
      this.$el.appendChild(node);
    }
    return this;
  }

  /**
   *
   * @return {DOMStringMap}
   */
  get data() {
    return this.$el.dataset;
  }

  /**
   *
   * @param {string} selector
   * @return {Dom}
   */
  closest(selector) {
    return $(this.$el.closest(selector));
  }

  /**
   *
   * @return {DOMRect}
   */
  getCoords() {
    return this.$el.getBoundingClientRect();
  }

  /**
   *
   * @param {string} selector
   * @return {NodeListOf<*>}
   */
  findAll(selector) {
    return this.$el.querySelectorAll(selector);
  }

  /**
   *
   * @param {Object.<string, string | number>} styles
   */
  css(styles = {}) {
    Object.keys(styles).forEach((prop) => this.$el.style[prop] = styles[prop]);
  }
}

/**
 *
 * @param {string | HTMLElement | EventTarget} selector
 * @return {Dom}
 */
export function $(selector) {
  return new Dom(selector);
}

/**
 *
 * @param {string} tagName
 * @param {string} classes
 * @return {Dom}
 */
$.create = (tagName, classes = '') => {
  const el = document.createElement(tagName);
  if (classes) {
    el.classList.add(classes);
  }
  return $(el);
};
