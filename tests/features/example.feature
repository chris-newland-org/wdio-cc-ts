Feature: Example feature

  Scenario: As a standard user, I can log into the site
    Given I am on the login page
    When I login as a standard user
    Then I should see inventory page
