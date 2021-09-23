<template>
  <button
    class="bacon-button"
    type="button"
    data-test="bacon-button"
    @click="$emit('click')"
  >Yeah, I want more bacon!</button>
</template>

<script>
export default {
  name: 'BaconButton'
}
</script>

<style>
.bacon-button {
  appearance: none;
  background-color: var(--base-color-accent);
  border: 2px solid rgba(255,255,255,0.75);
  border-radius: 8px;
  color: var(--base-color-accent-contra);
  font-family: var(--base-font-family);
  font-size: 1.5em;
  font-weight: bold;
  opacity: 1.0;
  padding: 10px 15px;
  text-transform: uppercase;
  transition: opacity var(--base-animation-time) ease;
  cursor: pointer;
}

.bacon-button:hover {
  opacity: 0.8;
}
</style>