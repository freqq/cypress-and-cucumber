Feature: Example Feature

    Background: 
        Given I have access to Google website
    Scenario: Visit Google website
        When I visit this page
        And I search for results
        Then Results are available
