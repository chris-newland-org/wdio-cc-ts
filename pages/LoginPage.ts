import Component from './components/component'
import Page from './page'

export class LoginPage extends Page {
  path = '/'

  get usernameInput() {
    return new Component('Username Input', '#user-name').get()
  }

  get passwordInput() {
    return new Component('Password Input', '#password').get()
  }

  get loginButton() {
    return new Component('Login Button', '#login-button').get()
  }

  login = async (user: string) => {
    await this.usernameInput.setValue(user)
    await this.passwordInput.setValue('secret_sauce')
    await this.loginButton.click()
  }
}
