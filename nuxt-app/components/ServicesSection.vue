<template>
  <section class="section section--services section--with-divider" id="services">
    <div class="container">
      <h2 class="section__title">{{ $t('services.title') }}</h2>
      <p class="section__subtitle">{{ $t('services.subtitle') }}</p>
      <p class="section__intro">{{ $t('services.intro') }}</p>
      <div class="services-grid">
        <article
          v-for="(item, index) in $t('services.items')"
          :key="index"
          class="service-card"
        >
          <div class="service-card__icon">
            <img :src="`/assets/icons/${item.id || iconIds[index]}.svg`" alt="" width="32" height="32">
          </div>
          <h3 class="service-card__title">{{ item.title }}</h3>
          <p class="service-card__text">{{ item.text }}</p>
          <div v-if="index === 0" class="service-card__actions">
            <NuxtLink to="#contact" class="btn btn--primary service-card__cta">{{ $t('contact.cta') }}</NuxtLink>
            <NuxtLink to="#contact" class="service-card__link">{{ $t('services.learnMore') }}</NuxtLink>
          </div>
          <NuxtLink v-else to="#contact" class="service-card__link">{{ $t('services.learnMore') }}</NuxtLink>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const iconIds = ['installation', 'customization', 'support', 'training', 'automation', 'integration', 'development']
</script>
