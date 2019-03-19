This project contains basic end to end automated scripts for validating My Store online shopping web-app with the url: http://automationpractice.com/index.php

This a uses javscript over cypress.io. 

The scripts are located in the following path: 
JStest/cypress/integration/MyStore Transactions 
        There are two tests  - one for registered user item purchase transaction and the other for item purchase transaction over new registration.

Exectution: 
To execute the scripts: This can be run by opening Cypress GUI and manually trigger the testcases or can do cypress run through the CLI.

Reporting: This cypress.io provides an in build framework for capturing screenshots and videos.Upon running the testcases over the Test Runner we will have the final item purchase transaction screenshot saved to JSTest/cypress/screenshots/MyStore Transactions and if the testcases are run over the CLI then the video recording is save to JSTest/cypress/videos/MyStore Transactions.