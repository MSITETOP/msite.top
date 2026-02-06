<template>
  <section class="section section--why-us section--with-divider" id="why-us">
    <div class="container">
      <h2 class="section__title">{{ $t('whyUs.title') }}</h2>
      <p class="section__subtitle">{{ $t('whyUs.subtitle') }}</p>
      <p class="section__intro">{{ $t('whyUs.intro') }}</p>
      <dl class="benefits-dl benefits-dl--two-cols">
        <div
          v-for="(item, index) in whyUsItems"
          :key="index"
          class="benefits-dl__item"
        >
          <dt><span class="benefits-dl__icon" />{{ item.title }}</dt>
          <dd>{{ item.text }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const whyUsItems = computed(() => (t('whyUs.items') || []) as Array<{ title: string; text: string }>)
</script>
