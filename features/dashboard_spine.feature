
Feature: Spine Dashboard
  Verify the functionality of spine on the dashboard.

  Scenario Outline: Verify the count of excursions, anomalies and cases on spine at Atlantis
    Given I hover on <KPI> with <severity>
    Then the count of <KPI> with <severity> should be equal to displayed count

    Examples:
      | KPI         | severity    |
      | "excursion" | "severity1" |

    Examples:
      | KPI         | severity    |
      | "excursion" | "severity2" |
      | "anomalies" | "severity1" |
      | "anomalies" | "severity2" |
      | "anomalies" | "severity3" |
      | "cases"     | "severity1" |
      | "cases"     | "severity2" |
      | "cases"     | "severity3" |


  Scenario Outline: Verify user is able to see the number of Excursions, Anomalies and open cases are grouped by severity for the
            associated asset hierarchy level alongside the appropriate icon on the spine.
    Given I hover on <KPI> with <severity>
    Then count displayed on <KPI> with <severity> should be equal to <valid KPI> images in hover result.

    Examples:
      | KPI         | severity    | valid KPI  |
      | "anomalies" | "severity1" | "Anmls_Hi" |
      | "anomalies" | "severity2" | "Anmls_Med"|


    Examples:
      | KPI         | severity    | valid KPI  |
      | "anomalies" | "severity3" | "Anmls_low"|


  Scenario Outline: Verify user is able to click on an item in the the hover over list to open a detailed view associated inbox pre-filtered
            with the details view.
    Given I hover on <KPI> with <severity>
    When I click on first link in hover result of <KPI> with <severity>.

    Examples:
      | KPI         | severity    |
      | "anomalies" | "severity1" |
      | "cases"     | "severity3" |

  @dashboard_spine @beforescenario @afterscenario
  Scenario Outline: Verify whether the count on spine changes as statuses for the associated KPI's change

    Given I hover on <KPI> with <severity>
    And I hover on <KPI> with <severity> and get the hover result count
    When I click on first link in hover result of <KPI> with <severity>.
    And I click on status dropdown
    And I select <option>
    And I see a case closure modal dialogue
    And I click on No Action Needed checkbox
    And I click on <button>
    And I click <Nav Item> in Navigation Item.
    Then the count of <KPI> with <severity> should be decreased by one.

    Examples:
      | KPI         | severity    | option   | button       | Nav Item    |
      | "cases"     | "severity2" | "Close"  | "Close Case" | "Dashboard" |









