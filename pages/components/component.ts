/**
 * Main component object containing all methods, selectors and functionality
 * that is shared across all component objects
 */
export default class Component {
  name: string
  selector: string

  constructor(name: string, selector: string) {
    this.name = name
    this.selector = selector
  }

  get = () => {
    $(this.selector).waitForExist({
      timeout: 10000,
      timeoutMsg: `${this.name} element not found in the DOM with selector: ${this.selector}`
    })
    return $(this.selector)
  }

  getAll = () => {
    $(this.selector).waitForExist({
      timeout: 10000,
      timeoutMsg: `${this.name} element not found in the DOM with selector: ${this.selector}`
    })
    return $$(this.selector)
  }
}
