

describe('Collection Module', ()=>{
    it('Verify the MDA user can verify their receipt', ()=>{
        cy.visit('https://qa.fgntreasury.gov.ng/auth/login')
        cy.get('.nav-logo')
        cy.get(':nth-child(1) > .form-control > .no-outline').type('nffinit')
        cy.get(':nth-child(2) > .form-control > .no-outline').type('Simple@123')
        cy.get('div.login-text > div').click()
        cy.get(':nth-child(5) > .ant-menu-submenu-title > .ant-menu-title-content').click()
        cy.wait(10000)
        cy.get('body > div:nth-child(2) > div:nth-child(1) > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > nav:nth-child(3) > ul:nth-child(1) > li:nth-child(5) > ul:nth-child(2) > li:nth-child(1) > span:nth-child(1) > a:nth-child(1)').click()
        cy.get('.fv-help-block').should('contain', 'Government Revenue Reference (GRR) is required')
        cy.get('.no-outline').type('0000000296')
        cy.get('.indicator-label.fs-base').click()
        cy.get('.d-flex > .text-success').should('contain', '0000000296')
    })

    it.only('Verify that a MDA user can validate revenue payment', ()=>{
        cy.visit('https://qa.fgntreasury.gov.ng/auth/login')
        cy.get('.nav-logo')
        cy.get(':nth-child(1) > .form-control > .no-outline').type('nffinit')
        cy.get(':nth-child(2) > .form-control > .no-outline').type('Simple@123')
        cy.get('div.login-text > div').click()
        cy.get(':nth-child(5) > .ant-menu-submenu-title > .ant-menu-title-content').click()
        cy.wait(10000)
        cy.contains('Revenue Validation').click()
        cy.get('.no-outline').type('0000000298')
        
        
    })


})