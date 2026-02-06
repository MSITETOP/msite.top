<template>
  <section class="section section--benefits section--with-divider" id="why-bitrix24">
    <div class="container">
      <h2 class="section__title">{{ $t('whyBitrix24.title') }}</h2>
      <p class="section__subtitle">{{ $t('whyBitrix24.subtitle') }}</p>
      <p class="section__intro">{{ $t('whyBitrix24.intro') }}</p>
      <dl class="benefits-dl benefits-dl--two-cols">
        <div
          v-for="(item, index) in items"
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
const items = computed(() => (t('whyBitrix24.items') || []) as Array<{ title: string; text: string }>)
</script>
