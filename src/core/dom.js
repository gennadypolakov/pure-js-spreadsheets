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
   * @param {HTMLElement} node
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
}

/**
 *
 * @param {string} selector
 * @return {Dom}
 */
export function $(selector) {
  return new Dom(selector);
}

$.create = (tagName, classes = '') => {
  const el = document.createElement(tagName);
  if (classes) {
    el.classList.add(classes);
  }
  return $(el);
};
