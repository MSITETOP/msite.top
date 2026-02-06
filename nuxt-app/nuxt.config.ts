// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-02-06',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n'],
  i18n: {
    locales: [
      { code: 'en', language: 'en', name: 'EN', file: 'en.json', isDefault: true },
      { code: 'es', language: 'es', name: 'ES', file: 'es.json' }
    ],
    defaultLocale: 'en',
    langDir: 'locales',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: { useCookie: true, cookieKey: 'i18n_redirected' }
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Silver Partner Bitrix24: implementation, CRM customization, automation, and support for EU businesses. Cloud and on-premise. GDPR-ready. Free consultation.'
        },
        {
          name: 'keywords',
          content: 'Bitrix24 implementation Europe, Bitrix24 customization, Bitrix24 consultant EU, CRM setup Bitrix24, Bitrix24 support, Bitrix24 Silver Partner'
        },
        { name: 'robots', content: 'index, follow' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/assets/favicon.png' },
        { rel: 'shortcut icon', href: '/assets/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://storage.yandexcloud.net/msite/header/style.css'
        }
      ],
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'MSITE.TOP',
            description: 'Bitrix24 Silver Partner: implementation, customization, automation, and support for businesses in Europe. Cloud and on-premise. GDPR-aware.',
            url: 'https://msite.top',
            areaServed: 'Europe',
            knowsAbout: ['Bitrix24', 'CRM', 'Business automation']
          })
        }
      ]
    }
  },
  css: ['../styles.css'],
  vite: {
    css: {
      devSourcemap: true
    }
  }
})
