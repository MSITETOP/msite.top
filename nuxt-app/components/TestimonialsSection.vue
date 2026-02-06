<template>
  <section class="section section--testimonials section--with-divider" id="testimonials">
    <div class="container">
      <h2 class="section__title">{{ $t('testimonials.title') }}</h2>
      <p class="section__subtitle">{{ $t('testimonials.subtitle') }}</p>
      <div class="testimonials-grid">
        <blockquote
          v-for="(item, index) in testimonialItems"
          :key="index"
          class="testimonial-card"
        >
          <div class="testimonial-card__header">
            <div class="testimonial-card__avatar" aria-hidden="true">{{ initials(item.name) }}</div>
            <div class="testimonial-card__rating">
              <span class="testimonial-card__stars">★★★★★</span>
            </div>
          </div>
          <p class="testimonial-card__quote">{{ item.quote }}</p>
          <footer class="testimonial-card__author">
            <strong class="testimonial-card__name">{{ item.name }}</strong>
            <span class="testimonial-card__role">{{ item.role }}{{ item.company ? `, ${item.company}` : '' }}</span>
            <time v-if="item.date" class="testimonial-card__date" :datetime="item.date">{{ formatDate(item.date) }}</time>
          </footer>
        </blockquote>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Testimonial {
  quote: string
  name: string
  role: string
  company?: string
  date?: string
}

const { t } = useI18n()
const testimonialItems = computed(() => (t('testimonials.items') || []) as Testimonial[])

function initials (name: string | undefined) {
  if (!name || typeof name !== 'string') return '?'
  return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase() || '?'
}

function formatDate (dateStr: string) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
}
</script>
