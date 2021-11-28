describe('Suite 1', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('topbar should be visible', () => {
        cy.get('[data-cy=topbar]').should('be.visible')
    })

    it('search modal should be reachable on mobile', () => {
        cy.viewport(360, 640)
        cy.get('[data-cy=topbar-modal-button]').click()
        cy.get('[data-cy=modal]').should('be.visible')
    })

    it('searchbar should work on desktop', () => {
        cy.viewport(1920, 1080)
        cy.get('[data-cy=topbar-search-input').type('random')
        cy.get('[data-cy=topbar-search-button]').click()
        cy.get('[data-cy=main-video-container]').should('be.visible')
    })
  })