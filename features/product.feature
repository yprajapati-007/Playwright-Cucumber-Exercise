# Feature: Product Feature

#   Background:
#     Given I open the "https://www.saucedemo.com/" page

#   # Create a datatable to validate the Price (high to low) and Price (low to high) sort options (top-right) using a Scenario Outline
#   Scenario Outline: Validate product sort by price <sort>
#     Then I will login as 'standard_user'
#     And Sort the items by <sort>
#     And Validate all 6 items are sorted correctly by price <sort>

#     Examples:
#       | sort        |
#       | high-to-low |
#       | low-to-high |

Feature: Product Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario Outline: Validate product sort by price <sort>
    Then I will login as 'standard_user'
    When Sort the items by <sort>
    Then Validate all 6 items are sorted correctly by price <sort>
  
  Examples:
    | sort                  |
    | "Price (low to high)" |
    | "Price (high to low)" |