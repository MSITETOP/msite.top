<template>
  <header class="header">
    <div class="container header__inner">
      <NuxtLink :to="localePath('/')" class="header__logo" aria-label="Home">
        <img src="/assets/logo.png" alt="MSITE.TOP" width="140" height="44">
      </NuxtLink>
      <nav class="header__nav" :class="{ 'is-open': menuOpen }" aria-label="Main navigation">
        <ul class="header__menu">
          <li><NuxtLink :to="localePath('/#services')" @click="closeMenu">{{ $t('header.services') }}</NuxtLink></li>
          <li><NuxtLink :to="localePath('/#why-bitrix24')" @click="closeMenu">{{ $t('header.whyBitrix24') }}</NuxtLink></li>
          <li><NuxtLink :to="localePath('/#why-us')" @click="closeMenu">{{ $t('header.whyUs') }}</NuxtLink></li>
          <li><NuxtLink :to="localePath('/#process')" @click="closeMenu">{{ $t('header.process') }}</NuxtLink></li>
          <li><NuxtLink :to="localePath('/#contact')" @click="closeMenu">{{ $t('header.contact') }}</NuxtLink></li>
        </ul>
        <div class="lang-switcher" aria-label="Language">
          <NuxtLink
            v-for="loc in availableLocales"
            :key="loc.code"
            :to="switchLocalePath(loc.code)"
            class="lang-switcher__btn"
            :class="{ 'lang-switcher__btn--active': locale === loc.code }"
            :hreflang="loc.iso"
            :lang="loc.iso"
            :aria-current="locale === loc.code ? 'true' : undefined"
          >
            {{ loc.name }}
          </NuxtLink>
        </div>
        <NuxtLink :to="localePath('/#contact')" class="btn btn--primary header__cta header__cta--mobile" @click="closeMenu">
          {{ $t('header.requestDemo') }}
        </NuxtLink>
      </nav>
      <div class="header__right">
        <div class="lang-switcher lang-switcher--desktop" aria-label="Language">
          <NuxtLink
            v-for="loc in availableLocales"
            :key="loc.code"
            :to="switchLocalePath(loc.code)"
            class="lang-switcher__btn"
            :class="{ 'lang-switcher__btn--active': locale === loc.code }"
            :hreflang="loc.iso"
            :lang="loc.iso"
            :aria-current="locale === loc.code ? 'true' : undefined"
          >
            {{ loc.name }}
          </NuxtLink>
        </div>
        <NuxtLink :to="localePath('/#contact')" class="btn btn--primary header__cta header__cta--desktop">
          {{ $t('header.requestDemo') }}
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const { locale, locales } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const menuOpen = ref(false)

const availableLocales = computed(() =>
  (locales.value as Array<{ code: string; iso: string; name: string }>).map(l => ({
    code: l.code,
    iso: l.iso || l.code,
    name: l.name || l.code.toUpperCase()
  }))
)

function closeMenu () {
  menuOpen.value = false
}
</script>
