import { Given, When, Then } from '@wdio/cucumber-framework'
import { loginPage } from '../../pages'
import { BASE_URL } from '../config'

Given(/^I am on the login page$/, async () => {
  await loginPage.visit()
})

When(/^I login as a standard user$/, async () => {
  await loginPage.login('standard_user')
})

Then(/^I should see inventory page$/, async () => {
  expect(await browser.getUrl()).toEqual(`${BASE_URL}/inventory.html`)
})
