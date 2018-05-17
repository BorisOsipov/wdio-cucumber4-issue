Feature: A passing feature

    Scenario Outline: A passing scenario
        Given I visit "/index.html"
        When I click the clickable region
        Then I should get the result: <test>
        Examples:
            | test |
            | 1    |
            | 1    |
