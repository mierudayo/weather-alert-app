/// <reference types="cypress" />

describe('Error', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should display error message for unsuccessfull api call', () => {
        cy.intercept('GET', 'https://api.weatherapi.com/v1/current.json*', {
            statusCode: 400,
        }).as('ApiCall')
        cy.fixture('london.json').as('ApiResult')

        cy.get('input').type('abcdefg')
        cy.get('button').click()
        cy.get('[data-testid="main-content"]').should('not.exist')
        cy.get('[data-testid="error-content"]').should(
            'have.text',
            "Oooops! No valid location has been found for 'Abcdefg'!"
        )

        cy.get('input').clear()
        cy.get('input').type('abcdefg')
        cy.get('input').type('{enter}')
        cy.get('[data-testid="main-content"]').should('not.exist')
        cy.get('[data-testid="error-content"]').should(
            'have.text',
            "Oooops! No valid location has been found for 'Abcdefg'!"
        )
    })
})
