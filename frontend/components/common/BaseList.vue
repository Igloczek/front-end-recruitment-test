<template>
  <ul
    class="base-list"
    data-test="base-list"  
  >
    <slot />
  </ul>
</template>

<script>
export default {
  name: 'BaseList',
}
</script>