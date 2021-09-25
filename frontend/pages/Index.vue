<template>
  <BaseArticle class="pages-index">
    <BaseHeader
      :type="1"
      :text="$t('pages.index.welcomeHeader')"
    />
    <BaseParagraph v-text="$t('pages.index.welcomeText')" />
    <BaseList>
      <BaseListItem
        v-for="(path, index) in paths"
        :key="index"
      >
        <RouterLink
          class="pages-index__link"
          :to="path.to"
          v-text="path.label"
        />
      </BaseListItem>
    </BaseList>
  </BaseArticle>
</template>

<script>
export default {
  name: 'pagesIndex',
  metaInfo() {
    return {
      title: this.$t('pages.index.title')
    }
  },
  computed: {
    paths() {
      return [
        {
          to: '/bacon',
          label: this.$t('pages.index.taskBaconLinkLabel'),
        },
        {
          to: '/checkout',
          label: this.$t('pages.index.taskCheckoutLinkLabel'),
        }
      ]
    }
  }
}
</script>

<style scoped>
.pages-index {
  padding: 48px;
}
</style>