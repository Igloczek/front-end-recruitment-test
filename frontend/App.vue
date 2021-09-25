<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  metaInfo() {
    const titleSuffix = this.$t('common.titleSuffix')
    return {
      title: this.$t('common.titleDefault'),
      titleTemplate: `%s | ${titleSuffix}`
    }
  },
}
</script>
