<template>
  <div class="pages-checkout">
    Checkout
  </div>
</template>

<script>
export default {
  name: 'Checkout',
  data() {
    return {
      cart: {
        items: [
          { name: 'Apple Watch Sport', price: 580 },
          { name: 'Modern Buckle', price: 380 },
        ],
        totals: {
          subTotal: 960,
          tax: 0,
          grandTotal: 960,
        },
      },
    }
  }
}
</script>

<style>

</style>