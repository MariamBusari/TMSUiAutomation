

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
        cy.get(':nth-child(1) > :nth-child(3) > button').click()
        cy.wait(20000)
        cy.get('[style="padding-left: 24px; background: rgb(251, 203, 56); border-radius: 4px; gap: 10px; font-family: Poppins; font-style: normal; font-weight: 500; font-size: 14px; color: rgb(6, 27, 1);"] > .ant-menu-title-content > .ps-0').click()
        cy.get('.opRow3 > :nth-child(2)').should("contain", "List of MDAs Services")
        cy.get(':nth-child(2) > :nth-child(3) > button').click()
        cy.wait(10000)
        cy.get('[style="padding-left: 24px; background: rgb(251, 203, 56); border-radius: 4px; gap: 10px; font-family: Poppins; font-style: normal; font-weight: 500; font-size: 14px; color: rgb(6, 27, 1);"] > .ant-menu-title-content > .ps-0').click()
        cy.get('.opRow4 > :nth-child(1)')
        cy.get('.opRow4CardDiv1 > :nth-child(2)').should("contain", "Total Inflow")
        cy.get('.opRow4CardDiv2 > :nth-child(2)').should("contain", "Total Outflow")
        cy.get('.opRow4CardDiv3 > :nth-child(2)').should("contain", "Total Closing Balance")
        cy.get('.opRow4CardDiv4 > :nth-child(2)').should("contain", "Total Opening balance")
        cy.get('.opRow5 > :nth-child(1)').should("contain", "Insights")
        cy.get('.opRow5Card1 > :nth-child(1) > :nth-child(1)').should("contain", "Top 10 performing MDAs by revenue collected")
        cy.get('.opRow5SectorCard > :nth-child(1) > :nth-child(1)').should("contain", "Top 5 performing MDA sectors")
        cy.get('.opRow5RegionCard > :nth-child(1) > :nth-child(1)').should("contain", "Top 5 performing service")
        cy.contains("Requests Awaiting Action")
        cy.get('.actv-fixed')


    }) 

    
})

