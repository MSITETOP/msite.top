<template>
  <section class="section section--legal">
    <div class="container">
      <div class="legal-content">
        <h1>{{ content.title }}</h1>
        <p class="legal-meta">{{ lastUpdatedLabel }}: {{ content.lastUpdated }}</p>

        <template v-for="(section, idx) in content.sections" :key="section.id || idx">
          <h2>{{ section.title }}</h2>

          <template v-if="section.paragraphs">
            <p v-for="(p, i) in section.paragraphs" :key="'p-' + i">
              <template v-if="isContactSection(section) && i === 1">
                <span v-html="linkifyContact(p)"></span>
              </template>
              <template v-else>
                {{ p }}
              </template>
            </p>
          </template>

          <ul v-if="section.list">
            <li v-for="(item, i) in section.list" :key="'li-' + i">{{ item }}</li>
          </ul>

          <template v-if="section.subsections">
            <template v-for="(sub, subIdx) in section.subsections" :key="'sub-' + subIdx">
              <h3>{{ sub.title }}</h3>
              <p v-for="(p, i) in (sub.paragraphs || [])" :key="'subp-' + i">{{ p }}</p>
              <ul v-if="sub.list">
                <li v-for="(item, i) in sub.list" :key="'subl-i-' + i">{{ item }}</li>
              </ul>
            </template>
          </template>

          <template v-if="section.paragraphsAfter">
            <p
              v-for="(p, i) in section.paragraphsAfter"
              :key="'after-' + i"
              v-html="linkifyContact(p)"
            ></p>
          </template>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { locale } = useI18n()

import { privacyEn, privacyEs } from '~/data/privacy'

const content = computed(() =>
  locale.value === 'es' ? privacyEs.content : privacyEn.content
)

const meta = computed(() =>
  locale.value === 'es' ? privacyEs.meta : privacyEn.meta
)

const lastUpdatedLabel = computed(() =>
  locale.value === 'es' ? 'Última actualización' : 'Last updated'
)

function isContactSection(section: { id?: string }): boolean {
  return section.id === 'contact' || section.id === 'contacto'
}

function linkifyContact(text: string): string {
  if (!text) return ''
  const email = 'b24@msite.top'
  const phone = '+34 614 33 27 85'
  let out = escapeHtml(text).replace(/\n/g, '<br>')
  out = out.replace(
    new RegExp(escapeRegex(email), 'g'),
    `<a href="mailto:${email}">${email}</a>`
  )
  out = out.replace(
    new RegExp(escapeRegex(phone), 'g'),
    `<a href="tel:+34614332785">${phone}</a>`
  )
  return out
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

useHead({
  title: () => meta.value.title,
  meta: [
    { name: 'description', content: () => meta.value.description },
    { property: 'og:title', content: () => meta.value.title },
    { property: 'og:description', content: () => meta.value.description },
    { property: 'og:type', content: 'article' }
  ],
  link: [
    { rel: 'alternate', hreflang: 'en', href: 'https://msite.top/privacy-policy' },
    { rel: 'alternate', hreflang: 'es', href: 'https://msite.top/es/privacy-policy' },
    { rel: 'alternate', hreflang: 'x-default', href: 'https://msite.top/privacy-policy' }
  ]
})
</script>
