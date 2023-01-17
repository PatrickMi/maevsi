import defu from 'defu'
import { appendHeader, defineEventHandler } from 'h3'

import { getDomainTldPort, getHost } from '~/utils/util'

function getCsp(host: string): Record<string, Array<string>> {
  const hostName = host.replace(/:[0-9]+$/, '')
  const config = useRuntimeConfig()

  const stagingHostOrHost = config.public.stagingHost || host

  const base = {
    'base-uri': ["'none'"], // Mozilla Observatory.
    'connect-src': [
      "'self'",
      'blob:', // vue-advanced-cropper
      `https://${getDomainTldPort(stagingHostOrHost)}`, // `/api` requests
      `https://postgraphile.${getDomainTldPort(stagingHostOrHost)}`, // backend requests
      `https://tusd.${getDomainTldPort(stagingHostOrHost)}`, // image upload requests
      'https://*.google-analytics.com', // Google Analytics 4 (https://developers.google.com/tag-platform/tag-manager/web/csp)
      'https://*.analytics.google.com', // Google Analytics 4 (https://developers.google.com/tag-platform/tag-manager/web/csp)
    ],
    'default-src': ["'none'"],
    'font-src': ["'self'"], // ~/public/assets/static/fonts
    'form-action': ["'self'"], // Mozilla Observatory: "none".
    'frame-ancestors': ["'none'"], // Mozilla Observatory.
    'frame-src': ["'none'"],
    'img-src': [
      "'self'",
      'blob:',
      'data:',
      `https://tusd.${getDomainTldPort(stagingHostOrHost)}`,
      'https://*.google-analytics.com', // Google Analytics 4 (https://developers.google.com/tag-platform/tag-manager/web/csp)
      'https://www.gravatar.com/avatar/', // profile picture fallback
    ],
    'manifest-src': ["'self'"],
    'media-src': ["'none'"],
    'object-src': ["'none'"],
    'prefetch-src': ["'self'"],
    'report-uri': ['https://dargmuesli.report-uri.com/r/d/csp/enforce'],
    // TODO: evaluate header (https://github.com/maevsi/maevsi/issues/830) // https://stackoverflow.com/questions/62081028/this-document-requires-trustedscripturl-assignment
    // 'require-trusted-types-for': ["'script'"], // csp-evaluator
    'script-src': [
      'blob:',
      "'self'",
      'https://static.cloudflareinsights.com', // Cloudflare analytics
      'https://*.google-analytics.com', // Google Analytics 4 (https://developers.google.com/tag-platform/tag-manager/web/csp)
      'https://www.googletagmanager.com/gtag/js', // Google Analytics 4 (https://developers.google.com/tag-platform/tag-manager/web/csp)
      "'unsafe-inline'", // https://github.com/unjs/nitro/issues/81
      "'unsafe-eval'", // https://github.com/unjs/nitro/issues/81
    ],
    'style-src': ["'self'", "'unsafe-inline'"], // Tailwind
  }

  const development = {
    'connect-src': [
      `http://${hostName}:24678/_nuxt/`,
      `https://${hostName}:24678/_nuxt/`,
      `ws://${hostName}:24678/_nuxt/`,
      `wss://${hostName}:24678/_nuxt/`,
    ],
  }

  const production = {
    'connect-src': [`https://${stagingHostOrHost}/cdn-cgi/rum`],
  }

  return defu(base, config.public.isInProduction ? production : development)
}

function getCspAsString(host: string): string {
  const csp = getCsp(host)
  let result = ''

  Object.keys(csp).forEach((key) => {
    result += `${key} ${csp[key].join(' ')};`
  })

  return result
}

export default defineEventHandler((event) => {
  const host = getHost(event.node.req)

  appendHeader(event, 'Content-Security-Policy', getCspAsString(host))
  // appendHeader(event, 'Cross-Origin-Embedder-Policy', 'require-corp') // https://stackoverflow.com/questions/71904052/getting-notsameoriginafterdefaultedtosameoriginbycoep-error-with-helmet
  appendHeader(event, 'Cross-Origin-Opener-Policy', 'same-origin')
  appendHeader(event, 'Cross-Origin-Resource-Policy', 'same-origin')
  // appendHeader(event, 'Expect-CT', 'max-age=0') // deprecated (https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expect-CT)
  appendHeader(
    event,
    'NEL',
    '\'{"report_to":"default","max_age":31536000,"include_subdomains":true}\''
  )
  appendHeader(event, 'Origin-Agent-Cluster', '?1')
  appendHeader(event, 'Permissions-Policy', '')
  appendHeader(event, 'Referrer-Policy', 'no-referrer')
  appendHeader(
    event,
    'Report-To',
    '\'{"group":"default","max_age":31536000,"endpoints":[{"url":"https://dargmuesli.report-uri.com/a/d/g"}],"include_subdomains":true}\''
  )
  appendHeader(
    event,
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains; preload'
  )
  appendHeader(event, 'X-Content-Type-Options', 'nosniff')
  appendHeader(event, 'X-DNS-Prefetch-Control', 'off')
  appendHeader(event, 'X-Download-Options', 'noopen')
  appendHeader(event, 'X-Frame-Options', 'SAMEORIGIN')
  appendHeader(event, 'X-Permitted-Cross-Domain-Policies', 'none')
  appendHeader(event, 'X-XSS-Protection', '0')
})
