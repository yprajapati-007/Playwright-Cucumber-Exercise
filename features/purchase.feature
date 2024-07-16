Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
    Then I will login as 'standard_user'
    Then I will add the backpack to the cart
    When Select the cart (top-right)
    And Select Checkout
    And Fill in the First Name, Last Name, and Zip/Postal Code
    #And Select Continue
    When Select Finish
    Then Validate the text as 'Thank you for your order!'