describe('test load a email', ()=> {

it('open homepage', () => {
    cy.visit("/")
    cy.get(':nth-child(4) > .sc-jSMfEi').click().then(()=> {
        cy.url('include', 'contact')
        cy.get('[name="from_name"]').type('Dom').then(()=>{
            cy.get('[name="from_name"]').should('have.value', 'Dom')
        })
        cy.get('[name="emailFrom"]').type('kolarskydominik@gmail.com').then(()=>{
            cy.get('[name="emailFrom"]').should('have.value', 'kolarskydominik@gmail.com')
        })
        cy.get('.sc-ikZpkk').type('#domtestuje').then(()=>{
            cy.get('.sc-ikZpkk').should('have.value','#domtestuje')
        })

        cy.get('[style="grid-area: sendButton / sendButton / sendButton / sendButton;"]').click().then(()=> {
            cy.get('.sc-himrzO').contains('Email odeslán!')
        })

    })
})
})