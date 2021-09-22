<template>
  <article class="pages-index">
    <h1 class="pages-index__header pages-index__header--1">
      Hi SNOW.DOG team!
    </h1>
    <p class="pages-index__text">
      Here you can find links to Tasks.
    </p>
    <ul
      class="pages-index__list"
      v-if="paths.length > 0"  
    >
      <li
        v-for="(path, index) in paths"
        class="pages-index__list-item"
        :key="index"
      >
        <router-link
          class="pages-index__link"
          :to="path.to"
          v-text="path.label"
        />
      </li>
    </ul>
  </article>
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