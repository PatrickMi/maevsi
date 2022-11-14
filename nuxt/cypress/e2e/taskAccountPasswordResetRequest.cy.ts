describe('task account password reset request page', () => {
  context('page load', () => {
    it('loads the page successfully', () => {
      cy.request('/task/account/password/reset/request').then((resp) => {
        expect(resp.status).to.equal(200)
        expect(resp.redirectedToUrl).to.equal(undefined)
      })
    })
  })

  context('visual regression', () => {
    it('looks as before', () => {
      cy.visit('/task/account/password/reset/request')
      cy.compareSnapshot('taskAccountPasswordResetRequest')
    })
  })
})