import { Given, When, Then } from '@wdio/cucumber-framework'

Given(/^I am on the login page"$/, () => {
  console.log('I am on the login page')
})

When(/^I login as a standard user"$/, user => {
  console.log('test')
})

Then(/^I should see inventory page"$/, title => {
  expect(browser).toHaveTitle(title)
})
