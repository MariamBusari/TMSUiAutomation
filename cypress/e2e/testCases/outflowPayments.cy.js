

describe('Outflow Payment Module', () => {
    it('verify that the user can filter by child organization', () => {
      // Visit your application's page where the action triggering the success modal occurs
      cy.visit('https://qa.fgntreasury.gov.ng/auth/login');
      cy.get('.nav-logo')
      cy.get(':nth-child(1) > .form-control > .no-outline').type('FEDMYSHQ')
      cy.get(':nth-child(2) > .form-control > .no-outline').type('Simple@123')
      cy.get('div.login-text > div').click()
      cy.get('.Toastify__toast-body > :nth-child(2)').should('contain', 'Your request was successful')
      cy.get('.sidebarHeading > button').should('contain', 'FEDERAL MINISTRY OF YOUTH & SPORTS DEV - HQTRS')
      cy.contains('Reports').click()
      cy.contains('Outflow').click()
      cy.get('[style="min-width: 190px;"] > .ant-select-selector').click()
      cy.get("span[title='Organisation Child']").type('NIGERIA FOOTBALL FEDERATION')
      cy.get('.ciSelectOptions > button').click()
      cy.wait(10000)
      cy.get('.cursor-pointer > .fs-9').click()
    });
  });