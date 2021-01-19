const consola = require('consola')

export default ({ store }) => {
  return {
    httpEndpoint: process.server
      ? 'http://postgraphile:5000/graphql'
      : 'https://postgraphile.' +
        (process.env.NUXT_ENV_STACK_DOMAIN || 'maevsi.test') +
        '/graphql',
    getAuth: (_tokenName) => {
      const jwt = store.state.jwt

      if (jwt) {
        consola.debug('Apollo request authenticated with: ' + jwt)
        return `Bearer ${jwt}`
      } else {
        consola.info('Apollo request without authentication.')
        return ''
      }
    },
  }
}
