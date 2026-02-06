<template>
  <section class="section section--blog" id="blog">
    <div class="container">
      <h2 class="section__title">{{ $t('blog.title') }}</h2>
      <p class="section__subtitle">{{ $t('blog.subtitle') }}</p>
      <div class="blog-grid">
        <article
          v-for="(post, index) in blogPosts"
          :key="index"
          class="blog-card"
        >
          <h3 class="blog-card__title">
            <NuxtLink :to="localePath(`/blog/${post.slug || 'post-' + index}`)">{{ post.title }}</NuxtLink>
          </h3>
          <p class="blog-card__excerpt">{{ post.excerpt }}</p>
          <time class="blog-card__date" :datetime="post.date">{{ formatDate(post.date) }}</time>
          <NuxtLink :to="localePath(`/blog/${post.slug || 'post-' + index}`)" class="blog-card__link">{{ $t('blog.readMore') }}</NuxtLink>
        </article>
      </div>
      <p class="section__cta">
        <NuxtLink to="#" class="btn btn--secondary">{{ $t('blog.viewAll') }}</NuxtLink>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const { t } = useI18n()
const blogPosts = computed(() => (t('blog.posts') || []) as BlogPost[])

interface BlogPost {
  title: string
  excerpt: string
  date: string
  slug?: string
}

function formatDate (dateStr: string) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}
</script>
