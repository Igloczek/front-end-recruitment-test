<template>
  <li
    class="base-list-item"
    data-test="base-list-item"  
  >
    <slot />
  </li>
</template>

<script>
export default {
  name: 'BaseListItem',
}
</script>