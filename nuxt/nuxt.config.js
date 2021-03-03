import bodyParser from 'body-parser'
import shrinkRay from 'shrink-ray-current'

import { BASE_URL, STACK_DOMAIN } from './plugins/baseUrl'

const LOCALES = [
  {
    code: 'en',
    name: 'English',
    iso: 'en', // Will be used as catchall locale by default.
  },
  {
    code: 'de',
    name: 'Deutsch',
    iso: 'de',
  },
]
const EXCLUSIONS = ['/%F0%9F%AB%96']
const EXCLUSIONS_LOCALIZED = []

for (const exclusion of EXCLUSIONS) {
  for (const locale of LOCALES) {
    EXCLUSIONS_LOCALIZED.push(`/${locale.code}${exclusion}`)
  }
}

export default {
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    /*
     ** https://github.com/nuxt-community/nuxt-property-decorator
     */
    babel: {
      presets({ _isServer }) {
        return [['@nuxt/babel-preset-app', { corejs: { version: 3 } }]]
      },
    },
    /*
     ** You can extend webpack config here
     */
    extend(_config, _ctx) {},
    extractCSS: true,
  },

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    [
      '@nuxtjs/fontawesome',
      {
        icons: {
          brands: ['faGithub'],
          solid: [
            'faArchive',
            'faBalanceScale',
            'faBars',
            'faBug',
            'faCalendarDay',
            'faCog',
            'faCheckCircle',
            'faDownload',
            'faEdit',
            'faKey',
            'faGlobeAfrica',
            'faHandshake',
            'faHome',
            'faHourglass',
            'faLanguage',
            'faListUl',
            'faMapMarker',
            'faPaperPlane',
            'faPlus',
            'faSpinner',
            'faTimes',
            'faTimesCircle',
            'faUser',
            'faUserClock',
            'faUpload',
            'faSignOutAlt',
            'faTrash',
            'faWifi',
            'faWindowClose',
          ],
        },
        useLayers: false,
        useLayersText: false,
      },
    ],
    '@nuxtjs/html-validator',
    // Doc: https://github.com/nuxt-community/moment-module
    ['@nuxtjs/moment', { locales: ['de'] }],
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['vue-datetime/dist/vue-datetime.min.css'],

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head() {
    return {
      bodyAttrs: { class: 'font-sans h-full dark:text-text-bright' },
      htmlAttrs: { class: 'h-full' },
      link: [
        {
          href: '/assets/static/favicon/apple-touch-icon.png?v=bOXMwoKlJr',
          rel: 'apple-touch-icon',
          sizes: '180x180',
        },
        {
          href: '/assets/static/favicon/favicon-16x16.png?v=bOXMwoKlJr',
          rel: 'icon',
          sizes: '16x16',
          type: 'image/png',
        },
        {
          href: '/assets/static/favicon/favicon-32x32.png?v=bOXMwoKlJr',
          rel: 'icon',
          sizes: '32x32',
          type: 'image/png',
        },
        {
          href: '/assets/static/favicon/favicon.ico',
          rel: 'icon',
          type: 'image/x-icon',
        },
        {
          href: '/assets/static/favicon/site.webmanifest?v=bOXMwoKlJr',
          rel: 'manifest',
        },
        {
          color: '#202020',
          href: '/assets/static/favicon/safari-pinned-tab.svg?v=bOXMwoKlJr',
          rel: 'mask-icon',
        },
        {
          href: '/assets/static/favicon/favicon.ico?v=bOXMwoKlJr',
          rel: 'shortcut icon',
        },
      ],
      meta: [
        { charset: 'utf-8' },
        { content: 'width=device-width, initial-scale=1', name: 'viewport' },
        {
          hid: 'description',
          name: 'description',
          property: 'description',
          content: this.$t('globalOgSeoDescription'),
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$t('globalOgSeoDescription'),
        },
        {
          content: '/assets/static/favicon/browserconfig.xml?v=bOXMwoKlJr',
          name: 'msapplication-config',
        },
        {
          content: '#202020',
          name: 'msapplication-TileColor',
        },
        {
          content: '#202020',
          name: 'theme-color',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.$baseUrl + '/assets/static/logos/maevsi.svg',
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.$t('globalOgImageAlt'),
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website', // https://ogp.me/#types
        },
      ],
      titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} · maevsi` : 'maevsi'
      },
    }
  },

  helmet: {
    hsts: {
      maxAge: 31536000,
      preload: true,
    },
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'nuxt-helmet', // Should be declared at the start of the array.
    'nuxt-healthcheck',
    [
      'nuxt-i18n',
      {
        baseUrl: BASE_URL,
        defaultLocale: 'en', // Must be set for the default prefix_except_default prefix strategy.
        detectBrowserLanguage: {
          cookieSecure: true,
          onlyOnRoot: true, // Enables better SEO.
        },
        locales: LOCALES,
        seo: false, // https://i18n.nuxtjs.org/seo/#improving-performance
        vueI18n: {
          messages: {
            de: {
              globalLoading: 'Lade...',
              globalAvailabilityNotYet: 'Noch nicht verfügbar.',
              globalOgImageAlt: 'maevsis Logo.',
              globalOgSeoDescription:
                'Das erste Planungstool für Events, die von den Teilnehmenden unterstützt werden können, erleichtert die Organisation von Veranstaltungen.',
              globalPagingMore: 'Mehr',
              globalPlaceholderAddress: 'Adresse',
              globalPlaceholderEmailAddress: 'e-mail@adres.se',
              globalPlaceholderFirstName: 'Vorname',
              globalPlaceholderLastName: 'Nachname',
              globalPlaceholderUsername: 'nutzer-name',
              globalValidationExistence: 'Existiert nicht.',
              globalValidationFormat: 'Falsches Format.',
              globalValidationLength: 'Zu lang.',
              globalValidationMaxValue: 'Wert zu groß.',
              globalValidationMinValue: 'Wert zu gering.',
              globalValidationRequired: 'Pflichtfeld.',
              globalValidationShortness: 'Zu kurz.',
            },
            en: {
              globalLoading: 'Loading...',
              globalAvailabilityNotYet: 'Not yet available.',
              globalOgImageAlt: "maevsi's logo.",
              globalOgSeoDescription:
                'The first management tool for events, which are supported by invitees, facilitates the organization of events.',
              globalPagingMore: 'More',
              globalPlaceholderAddress: 'Address',
              globalPlaceholderEmailAddress: 'email@addre.ss',
              globalPlaceholderFirstName: 'Firstname',
              globalPlaceholderLastName: 'Lastname',
              globalPlaceholderUsername: 'user-name',
              globalValidationExistence: 'Does not exist.',
              globalValidationFormat: 'Incorrect format.',
              globalValidationLength: 'Too long.',
              globalValidationMaxValue: 'Above maximum value.',
              globalValidationMinValue: 'Under minimum value.',
              globalValidationRequired: 'Required.',
              globalValidationShortness: 'Too short.',
            },
          },
          silentFallbackWarn: true,
        },
        vueI18nLoader: true,
      },
    ],
    [
      '@nuxtjs/apollo',
      {
        clientConfigs: {
          default: '~/plugins/apollo-config.js',
        },
        defaultOptions: {
          $query: {
            fetchPolicy: 'cache-and-network',
          },
        },
      },
    ],
    [
      '@nuxtjs/google-adsense',
      {
        id: process.env.GOOGLE_ADSENSE_ID,
        analyticsDomainName: process.env.GOOGLE_ANALYTICS_DOMAIN,
        analyticsUacct: process.env.GOOGLE_ANALYTICS_ID,
      },
    ],
    ['@nuxtjs/google-gtag', { id: process.env.GOOGLE_ANALYTICS_ID }],
    [
      '@nuxtjs/robots',
      {
        Allow: ['/'],
        Disallow: ['/robots.txt'], // https://webmasters.stackexchange.com/a/117537/70856
        Sitemap: BASE_URL + '/sitemap.xml',
      },
    ],
    ['@nuxtjs/sitemap', { exclude: EXCLUSIONS_LOCALIZED, i18n: true }], // Should be declared at the end of the array.
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/baseUrl.js',
    '~/plugins/dynamicReactiveRefs.js',
    '~/plugins/global.js',
    '~/plugins/htmlToText.js',
    '~/plugins/i18n.js',
    '~/plugins/markdownIt.js',
    '~/plugins/vuelidate.js',
    '~/plugins/slugify.js',
  ],

  publicRuntimeConfig: {
    dev: process.env.NODE_ENV !== 'production',
    'google-adsense': {
      id: process.env.GOOGLE_ADSENSE_ID,
      analyticsDomainName: process.env.GOOGLE_ANALYTICS_DOMAIN,
      analyticsUacct: process.env.GOOGLE_ANALYTICS_ID,
    },
    'google-gtag': {
      id: process.env.GOOGLE_ANALYTICS_ID,
      debug: process.env.NODE_ENV !== 'production',
    },
  },

  render: {
    compressor: shrinkRay(),
    csp: {
      policies: {
        'base-uri': ["'none'"], // Mozilla Observatory.
        'connect-src': [`https://*.${STACK_DOMAIN}`],
        'default-src': ["'none'"],
        'font-src': ["'self'"],
        'form-action': ["'none'"], // Mozilla Observatory.
        'frame-ancestors': ["'none'"], // Mozilla Observatory.
        'img-src': ['data:', `https://*.${STACK_DOMAIN}`, "'self'"],
        'manifest-src': ["'self'"], // Chrome
        'report-uri': 'https://dargmuesli.report-uri.com/r/d/csp/enforce',
        'script-src': [
          "'self'",
          'https://static.cloudflareinsights.com/beacon.min.js',
        ],
        'style-src': ["'self'"], // Tailwind
      },
      reportOnly: false,
    },
  },

  serverMiddleware: [
    bodyParser.json(),
    '~/middleware/server/headers.ts',
    { path: '/auth', handler: '~/api/auth.ts' },
    { path: '/ical', handler: '~/api/ical.ts' },
    { path: '/tusd', handler: '~/api/tusd.ts' },
  ],
}
