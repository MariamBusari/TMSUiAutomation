

describe('Overview', ()=>{
    beforeEach('Login with valid details', ()=>{
        cy.visit('https://qa.fgntreasury.gov.ng/auth/login')
        //cy.visit(Cypress.env('baseUrl')+"/auth/login")
        cy.get('.nav-logo')
        cy.get(':nth-child(1) > .form-control > .no-outline').type('OAGF_ADMINN')
        cy.get(':nth-child(2) > .form-control > .no-outline').type('Simple@123')
        cy.get('div.login-text > div').click()
        cy.wait(5000)
        cy.get('.Toastify__toast-body > :nth-child(2)').should('contain', 'Your request was successful')
        cy.get('.sidebarHeading > button').should('contain', 'OAGF ADMIN')
        cy.wait(20000)
    })

    it('View Dashbord', ()=>{
        cy.get('.mainHeader').click()
        cy.get('.role')
        cy.get('.headerUsernameRole > :nth-child(1)').should("contain", "Hi, Emmanuel Okoye")
        cy.get('.headerLogo')
        cy.get('.sidebarHeading > button').should("contain", "OAGF ADMIN")
        cy.get('.opRow3 > :nth-child(1)').should("contain", "Number of Registered MDAs")
        // cy.get(':nth-child(1) > :nth-child(3) > button').click()
        // //cy.get('.mdaDirectoryRow1')
        // cy.get('.mdaDirectoryBreadcrumb')
        // cy.get('.cursor-pointer > img').click()
        cy.get('.opRow3 > :nth-child(2)').should("contain", "List of MDAs Services")
        cy.get(':nth-child(2) > :nth-child(3) > button').click()







        


    })

    
})

