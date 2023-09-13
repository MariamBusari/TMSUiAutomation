


describe('Login Test', ()=>{
    it('Verify user can login with valid username and password - positive test', ()=>{
        cy.visit('https://qa.fgntreasury.gov.ng/auth/login')
       // cy.visit(Cypress.env('baseUrl')+"/auth/login")
        cy.get('.nav-logo')
        cy.get(':nth-child(1) > .form-control > .no-outline').type('OAGF_ADMINN')
        cy.get(':nth-child(2) > .form-control > .no-outline').type('Simple@123')
        cy.get('div.login-text > div').click()
        cy.get('.Toastify__toast-body > :nth-child(2)').should('contain', 'Your request was successful')
        cy.get('.sidebarHeading > button').should('contain', 'OAGF ADMIN')
    })

    it('Verify that user can request for password reset email - negative test', ()=>{
        cy.visit('https://qa.fgntreasury.gov.ng/auth/login')
        cy.get('.login-forgot-password-text').click()
        cy.get('.no-outline').type('mariam.busari@simplifysynergy.com')
        cy.get('.login-text.mt-5 > div').click()
        cy.get('.Toastify__toast-body > :nth-child(2)').should('contain', 'Your request was successful')
        cy.get('.modal-text').should('contain', 'A password reset link has been sent to your e-mail. Please click on the link and proceed to change your password')

    })

    it('Verify user cannot login with invalid username and password - negative test', ()=>{
        cy.visit('https://qa.fgntreasury.gov.ng/auth/login')
        cy.get('.nav-logo')
        cy.get(':nth-child(1) > .form-control > .no-outline').type('tester12')
        cy.get(':nth-child(2) > .form-control > .no-outline').type('Cookies25@')
        cy.get('div.login-text > div').click()
        cy.get('.Toastify__toast-body').should('contain', 'An error occurred: User tester12 was not found in the database')
    })

    it('Verify that user cannot request for password reset email with an invalid email format - negative test', ()=>{
        cy.visit('https://qa.fgntreasury.gov.ng/auth/login')
        cy.get('.login-forgot-password-text').click()
        cy.get('.no-outline').type('mariam.com')
        cy.get('.login-text.mt-5 > div').click()
    })

    it('Verify user cannot login with empty fields - negative test', ()=>{
        cy.visit('https://qa.fgntreasury.gov.ng/auth/login')
        cy.get('.nav-logo')
        cy.get(':nth-child(1) > .form-control > .no-outline').click()
        cy.get(':nth-child(2) > .form-control > .no-outline').click()
        cy.get('div.login-text > div').click()
        cy.get(':nth-child(1) > .fv-plugins-message-container > .fv-help-block').should('contain', 'Username is required')
        cy.get(':nth-child(2) > .fv-plugins-message-container > .fv-help-block').should('contain', 'Password is required')
    })

    it('Verify that user cannot request for password reset email with empty field - negative test', ()=>{
        cy.visit('https://qa.fgntreasury.gov.ng/auth/login')
        cy.get('.login-forgot-password-text').click()
        cy.get('.no-outline').click()
        cy.get('.login-text.mt-5 > div').click()
    })


})