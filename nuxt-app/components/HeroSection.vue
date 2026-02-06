<template>
  <section class="hero msite-header" id="hero">
    <div class="msite-header-bg" />
    <div class="msite-header-man" />
    <div class="container hero__inner hero__card">
      <img src="/assets/bitrix24-silver-partner.png" alt="Bitrix24 Silver Partner" class="hero__badge">
      <h1 class="hero__title">{{ $t('hero.title') }}</h1>
      <p class="hero__subtitle">{{ $t('hero.subtitle') }}</p>
      <div class="hero__actions">
        <NuxtLink to="#contact" class="btn btn--primary btn--lg">{{ $t('hero.ctaPrimary') }}</NuxtLink>
        <NuxtLink to="#services" class="btn btn--secondary btn--lg">{{ $t('hero.ctaSecondary') }}</NuxtLink>
      </div>
    </div>
  </section>
</template>
