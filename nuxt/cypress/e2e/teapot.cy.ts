describe('teapot page', () => {
  context('page load', () => {
    it('refuses to brew coffee', () => {
      cy.request({
        url: '/teapot',
        failOnStatusCode: false,
      }).then((resp) => {
        expect(resp.status).to.equal(418)
        expect(resp.redirectedToUrl).to.equal(undefined)
      })
    })
  })

  context('visual regression', () => {
    it('looks as before', () => {
      cy.setCookie('cookie_control_is_consent_given', 'true')
      cy.visit({ url: '/teapot', failOnStatusCode: false })
      cy.get('[data-is-loading="false"]').should('be.visible')
      cy.get('[data-testid="nuxt-cookie-control-control-button"]').should(
        'be.visible'
      )
      cy.compareSnapshot('teapot')
    })
  })
})
