<template>
  <picture
    class="bacon-image"
    data-test="bacon-image"
  >
    <img src="/images/bacon.jpg" :alt="$t('pages.bacon.baconImageAlt')" />
  </picture>
</template>

<script>
export default {
  name: 'baconImage',
}
</script>

<style scoped>
.bacon-image img {
  max-width: 300px;
  display: block;
}
</style>