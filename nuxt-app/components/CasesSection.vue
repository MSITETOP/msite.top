<template>
  <section class="section section--cases section--with-divider" id="cases">
    <div class="container">
      <h2 class="section__title">{{ $t('cases.title') }}</h2>
      <p class="section__subtitle">{{ $t('cases.subtitle') }}</p>
      <div class="cases-grid">
        <article
          v-for="(c, index) in caseItems"
          :key="index"
          class="case-card"
        >
          <h3 class="case-card__title">{{ c.title }}</h3>
          <p class="case-card__challenge">{{ c.challenge }}</p>
          <div class="case-card__solution">
            <h4 class="case-card__solution-title">{{ c.solutionTitle }}</h4>
            <p class="case-card__solution-text">{{ c.solutionText }}</p>
          </div>
          <div class="case-card__metrics">
            <div
              v-for="(m, i) in c.metrics"
              :key="i"
              class="case-card__metric"
            >
              <span class="case-card__metric-value">{{ m.value }}</span>
              <span class="case-card__metric-label">{{ m.label }}</span>
            </div>
          </div>
          <div class="case-card__before-after">
            <div class="case-card__before">
              <h4 class="case-card__ba-title">{{ $t('cases.before') }}</h4>
              <ul class="case-card__ba-list">
                <li v-for="(b, i) in c.before" :key="i">{{ b }}</li>
              </ul>
            </div>
            <div class="case-card__after">
              <h4 class="case-card__ba-title">{{ $t('cases.after') }}</h4>
              <ul class="case-card__ba-list">
                <li v-for="(a, i) in c.after" :key="i">{{ a }}</li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface CaseItem {
  title: string
  challenge: string
  solutionTitle: string
  solutionText: string
  metrics: Array<{ value: string; label: string }>
  before: string[]
  after: string[]
}

const { t } = useI18n()
const caseItems = computed(() => (t('cases.items') || []) as CaseItem[])
</script>
