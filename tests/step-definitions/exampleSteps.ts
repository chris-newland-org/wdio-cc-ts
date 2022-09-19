import { Given, When, Then } from '@wdio/cucumber-framework'

import LoginPage from '../../models/pages/login.page'
import SecurePage from '../../models/pages/secure.page'

const pages = {
  login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page: keyof typeof pages) => {
  await pages[page].open()
})

When(/^I login with (\w+) and (.+)$/, async (username: string, password: string) => {
  await LoginPage.login(username, password)
})

Then(/^I should see a flash message saying (.*)$/, async message => {
  await expect(SecurePage.flashAlert).toBeExisting()
  await expect(SecurePage.flashAlert).toHaveTextContaining(message)
})
