<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <div class="footer__brand">
          <NuxtLink :to="localePath('/')" class="footer__logo">
            <img src="/assets/logo.png" alt="MSITE.TOP" width="140" height="44">
          </NuxtLink>
          <p class="footer__description">
            {{ $t('footer.description') }}
          </p>
          <div class="footer__contact">
            <a href="mailto:b24@msite.top">
              <svg class="footer__contact-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 3h12c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1H2c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1z" stroke="currentColor" stroke-width="1.5" fill="none"/>
                <path d="M2 4l6 4 6-4" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              b24@msite.top
            </a>
            <a href="tel:+34614332785">
              <svg class="footer__contact-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 2h-5c-.83 0-1.5.67-1.5 1.5v9c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5z" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7 12.5h2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              +34 614 33 27 85
            </a>
          </div>
        </div>
        <div class="footer__links">
          <div class="footer__col">
            <h4 class="footer__col-title">{{ $t('footer.columns.services') }}</h4>
            <ul>
              <li><NuxtLink :to="localePath('/#services')">{{ $t('footer.links.installation') }}</NuxtLink></li>
              <li><NuxtLink :to="localePath('/#services')">{{ $t('footer.links.customization') }}</NuxtLink></li>
              <li><NuxtLink :to="localePath('/#services')">{{ $t('footer.links.support') }}</NuxtLink></li>
              <li><NuxtLink :to="localePath('/#services')">{{ $t('footer.links.training') }}</NuxtLink></li>
              <li><NuxtLink :to="localePath('/#services')">{{ $t('footer.links.integration') }}</NuxtLink></li>
            </ul>
          </div>
          <div class="footer__col">
            <h4 class="footer__col-title">{{ $t('footer.columns.company') }}</h4>
            <ul>
              <li><NuxtLink :to="localePath('/#why-us')">{{ $t('footer.links.about') }}</NuxtLink></li>
              <li><NuxtLink :to="localePath('/#blog')">{{ $t('footer.links.blog') }}</NuxtLink></li>
              <li><NuxtLink :to="localePath('/#contact')">{{ $t('footer.links.contact') }}</NuxtLink></li>
            </ul>
          </div>
          <div class="footer__col">
            <h4 class="footer__col-title">{{ $t('footer.columns.legal') }}</h4>
            <ul>
              <li><NuxtLink :to="localePath('/privacy-policy')">{{ $t('footer.links.privacy') }}</NuxtLink></li>
              <li><NuxtLink :to="localePath('/terms')">{{ $t('footer.links.terms') }}</NuxtLink></li>
              <li><NuxtLink :to="localePath('/gdpr')">{{ $t('footer.links.gdpr') }}</NuxtLink></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <img src="/assets/bitrix24-silver-partner.png" alt="Bitrix24 Silver Partner" class="footer__badge">
        <p class="footer__copyright">© {{ currentYear }} {{ $t('footer.copyright') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const currentYear = new Date().getFullYear()
</script>
