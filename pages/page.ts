/**
 * Main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default abstract class Page {
  path = '/'

  constructor(path = '') {
    this.path = path
  }

  public async visit() {
    return await browser.url(`${this.path}`)
  }
}
