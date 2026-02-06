<template>
  <section class="section section--process section--with-divider" id="process">
    <div class="container">
      <h2 class="section__title">{{ $t('process.title') }}</h2>
      <p class="section__subtitle">{{ $t('process.subtitle') }}</p>
      <ol class="process-steps">
        <li
          v-for="(step, index) in processSteps"
          :key="index"
          class="process-step"
        >
          <span class="process-step__num">{{ index + 1 }}</span>
          <h3 class="process-step__title">{{ step.title }}</h3>
          <p class="process-step__text">{{ step.text }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const processSteps = computed(() => (t('process.steps') || []) as Array<{ title: string; text: string }>)
</script>
