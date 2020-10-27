/**
 *
 */
export class DomListener {
  /**
   * @param {HTMLDivElement} $root
   * @param {any[]} listeners
   */
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('No $root provided for DomListener!');
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  /**
   *
   */
  initDOMListener() {}

  /**
   *
   */
  removeDOMListener() {}
}
