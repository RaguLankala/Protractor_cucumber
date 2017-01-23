@dashboard_sys_trends
Feature: System Trends Dashboard
  Verify Add to Watchlist functionality of system trends.

  Scenario Outline: Verify whether user is able to add a tag to watchlist.
    When I click on system trends.
    And I click on button
    And I click on checkbox of <tag-name>
    And I click on button

  @beforescenario @afterscenario
  Examples:
    | tag-name           |
    | "ATT_FI41811.PV"   |
    | "ATT_PIC41801.PV"  |




