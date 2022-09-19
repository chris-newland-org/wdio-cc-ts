/**
 * Main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default abstract class Page {
  path = ''

  visit() {
    return browser.url(`${this.path}`)
  }
}
