<template>
  <div>
    <HeroSection />
    <ServicesSection />
    <BenefitsSection />
    <WhyUsSection />
    <TestimonialsSection />
    <CasesSection />
    <ProcessSection />
    <BlogSection />
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

useHead({
  title: () => t('meta.title') || 'Bitrix24 Implementation & Customization in Europe | MSITE.TOP',
  meta: [
    {
      name: 'description',
      content: () => t('meta.description') || 'Silver Partner Bitrix24: implementation, CRM customization, automation, and support for EU businesses. Cloud and on-premise. GDPR-ready. Free consultation.'
    },
    {
      property: 'og:title',
      content: () => t('meta.title') || 'Bitrix24 Implementation & Customization in Europe | MSITE.TOP'
    },
    {
      property: 'og:description',
      content: () => t('meta.description') || 'Silver Partner Bitrix24: implementation, CRM customization, automation, and support for EU businesses. GDPR-ready. Free consultation.'
    },
    { property: 'og:type', content: 'website' }
  ],
  link: [
    { rel: 'alternate', hreflang: 'en', href: 'https://msite.top/' },
    { rel: 'alternate', hreflang: 'es', href: 'https://msite.top/es' },
    { rel: 'alternate', hreflang: 'x-default', href: 'https://msite.top/' }
  ]
})
</script>
