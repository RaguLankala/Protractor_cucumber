@asset_navigation
Feature: Asset Navigation
  Verify whether user is able to navigate into different levels of POA using asset browser.

  Background:
    Given I click on header in asset browser

  @beforescenario
  Scenario: Verify whether user is able to navigate into level 2.
    When I click on "Gas Compression"
    Then I should see "Gas Compression" page.

  Scenario Outline:
    And I click on <subSystem>
    And I click on <train>
    Then I should see <train> page.

    Examples:
      | subSystem                 | train |
      | "Booster Gas Compression" | "BC1" |
      | "Booster Gas Compression" | "BC2" |
      | "Booster Gas Compression" | "BCC" |
      | "Export Gas Compression"  | "EX1" |
      | "Export Gas Compression"  | "EX2" |
      | "Export Gas Compression"  | "EXC" |
      | "Vapor Recovery Unit"     | "VR1" |

  @afterscenario
    Examples:
      | subSystem                 | train |
      | "Vapor Recovery Unit"     | "VR2" |

