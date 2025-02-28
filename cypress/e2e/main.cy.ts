/// <reference types="cypress" />

describe('Main', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should disable search for empty input', () => {
        cy.get('input').clear()
        cy.get('button').should('have.attr', 'disabled')
        cy.get('[data-testid="main-content"]').should('not.exist')

        cy.get('input').type('{enter}')
        cy.get('[data-testid="main-content"]').should('not.exist')
    })

    it('should auto focus input field for empty input', () => {
        cy.get('input').clear()
        cy.get('input').should('be.focused')

        cy.reload()

        cy.get('input').should('be.focused')
    })

    it('should display weather data for successfull api call', () => {
        cy.intercept('GET', 'https://api.weatherapi.com/v1/current.json*', {
            fixture: 'london.json',
        }).as('ApiCall')
        cy.fixture('london.json').as('ApiResult')

        cy.get('input').type('London')
        cy.get('button').click()
        cy.get('[data-testid="main-content"]').should(
            'have.text',
            'London,City of London, Greater London,United KingdomFriday2025-02-28 10:0010.2°Cfeels like9.3°CPartly cloudyHumidity 50%Wind Strength 7.6km/h'
        )

        cy.get('input').clear()
        cy.get('input').type('London')
        cy.get('input').type('{enter}')
        cy.get('[data-testid="main-content"]').should(
            'have.text',
            'London,City of London, Greater London,United KingdomFriday2025-02-28 10:0010.2°Cfeels like9.3°CPartly cloudyHumidity 50%Wind Strength 7.6km/h'
        )
    })

    it('should not auto focus input field for non-empty input', () => {
        cy.intercept('GET', 'https://api.weatherapi.com/v1/current.json*', {
            fixture: 'london.json',
        }).as('ApiCall')
        cy.fixture('london.json').as('ApiResult')

        cy.get('input').type('London')
        cy.get('button').click()

        cy.reload()

        cy.get('input').should('not.be.focused')
    })
})
