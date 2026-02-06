<template>
  <div ref="container" data-b24-form="inline/1/2pvgru" data-skip-moving="true" />
</template>

<script setup lang="ts">
const container = ref<HTMLElement | null>(null)

onMounted(() => {
  if (typeof document === 'undefined') return
  const s = document.createElement('script')
  s.async = true
  s.src = 'https://cdn.bitrix24.eu/b36594287/crm/form/loader_1.js?' + (Date.now() / 180000 | 0)
  document.body.appendChild(s)
})
</script>
