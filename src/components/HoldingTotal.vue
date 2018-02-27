<template>
  <tr>
    <td
      data-test-grand-total
      colspan="4"
      class="grand-total"
    >
      {{ usdTotal }}
    </td>
    <td>&nbsp;</td>
  </tr>
</template>

<script lang="ts">
import Vue from 'vue';
import { IHolding, ITicker } from '@/types.ts';

export default Vue.extend({
  name: 'HoldingTotal',
  computed: {
    usdTotal(): string {
      let grandTotal = 0;
      this.$store.state.holdings.forEach((holding: IHolding) => {
        // find a ticker
        const foundTicker = this.$store.state.tickers.find((ticker: ITicker) => {
          const isTicker = ticker.name === holding.name;
          return isTicker;
        });
        if (foundTicker) {
          grandTotal += holding.value * foundTicker.priceUsd;
        }
      });
      return grandTotal.toLocaleString('en', {
        style: 'currency',
        currency: 'USD',
      });
    },
  },
});
</script>

<style scoped>
.grand-total {
  text-align: right;
  font-weight: bold;
  padding: 10px;
  font-family: monospace;
}
</style>
