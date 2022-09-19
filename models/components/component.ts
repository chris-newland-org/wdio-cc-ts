/**
 * Main component object containing all methods, selectors and functionality
 * that is shared across all component objects
 */
export default abstract class Component {
  abstract name: string
  abstract selector: string

  get = () => {
    return $(this.selector)
  }

  getAll = () => {
    return $$(this.selector)
  }
}
