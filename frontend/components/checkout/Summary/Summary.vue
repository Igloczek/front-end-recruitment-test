<template>
  <aside class="summary">
    <div class="summary__wrapper">
      <SummarySection class="summary__cart">
        <SummaryHeader
          :type="4"
          :text="$t('pages.checkout.summary.header')"
        />
        <template v-for="(items, index) in items">
          <SummaryText
            :key="index"
            :name="items.name"
            :value="items.price"
          />
        </template>
      </SummarySection>
      <SummarySection :featured="true">
        <SummaryText
          :decimalNumbers="2"
          :name="$t('pages.checkout.summary.totalPurchases')"
          :value="subTotal"
        />
        <SummaryText
          :name="$t('pages.checkout.summary.estimatedTax')"
          :value="tax"
        />
      </SummarySection>
      <SummarySection class="summary__grand-total">
        <SummaryTextTotal
          :name="$t('pages.checkout.summary.grandTotal')"
          :value="grandTotal"
        />
      </SummarySection>
    </div>
  </aside>
</template>

<script>
import SummaryHeader from './SummaryHeader.vue'
import SummaryText from './SummaryText.vue'
import SummaryTextTotal from './SummaryTextTotal.vue'
import SummarySection from './SummarySection.vue'

export default {
  name: "Summary",
  components: {
    SummaryHeader,
    SummaryText,
    SummaryTextTotal,
    SummarySection,
  },
  props: {
    cart: {
      type: Object,
      required: true,
      validator(v) {
        try {
          const isItemsValid = v.items.every(el => typeof el.name === "string" && typeof el.price === "number");
          const isTotalValid = [
            typeof v.totals.subTotal,
            typeof v.totals.tax,
            typeof v.totals.grandTotal
          ].every(el => el === "number");
          return isItemsValid && isTotalValid;
        } catch (e) {
          return false
        }
      }
    }
  },
  computed: {
    grandTotal() {
      return this.cart.totals.grandTotal
    },
    items() {
      return this.cart.items
    },
    subTotal() {
      return this.cart.totals.subTotal
    },
    tax() {
      return this.cart.totals.tax
    }
  }
}
</script>

<style scoped>
.summary {
  background-color: var(--checkout-summary-background-color);
  border-radius: var(--checkout-border-radius);
  padding: 5px;
  box-shadow: var(--checkout-box-shadow);
}

.summary__wrapper {
  border: var(--checkout-summary-inner-border);
  border-radius: var(--checkout-border-radius);
}

.summary__cart {
  padding-bottom: 25px;
}

.summary__grand-total {
  padding-bottom: 35px;
}
</style>