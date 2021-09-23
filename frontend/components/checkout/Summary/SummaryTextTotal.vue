<script>
import SummaryText from './SummaryText.vue'

export default {
  name: "SummaryTextTotal",
  extends: SummaryText,
}
</script>

<style scoped>
@import url("./SummaryText.css");

.summary-text {
  grid-template-columns: 1fr 100px;
  font-weight: bold;
}

.summary-text__value {
  font-size: 2em;
}
</style>