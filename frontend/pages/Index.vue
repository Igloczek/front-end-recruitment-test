<template>
  <BaseArticle class="pages-index">
    <BaseHeader
      type="1"
      text="Hi SNOW.DOG team!"
    />
    <BaseParagraph>
      Here you can find links to Tasks.
    </BaseParagraph>
    <BaseList>
      <BaseListItem
        v-for="(path, index) in paths"
        :key="index"
      >
        <router-link
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
  metaInfo: {
    title: 'Homepage',
  },
  computed: {
    paths() {
      return [
        {
          to: '/bacon',
          label: 'Go to /bacon (Task 1)',
        },
        {
          to: '/checkout',
          label: 'Go to /checkout (Task 2, 3, 4)'
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