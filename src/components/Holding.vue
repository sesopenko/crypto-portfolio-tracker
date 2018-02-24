<template>
  <div class="c-holding">
    <div data-test-holding-name>
      Name: {{ name }}
    </div>
    <div data-test-holding-value>
      Qty: {{ value }}
    </div>
    <div v-if="usdValue">
      Holdings: {{ usdValue }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ITicker } from '@/types.ts';
import { find } from 'lodash';

export default Vue.extend({
  name: 'Holding',
  props: {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ticker(): ITicker|null {
      const ticker = find(this.$store.state.tickers, comparisonTicker => (
        comparisonTicker.name === this.name
      ));
      return ticker;
    },
    usdValue(): string|null {
      if (this.ticker) {
        const usdValue = this.ticker.priceUsd * this.value;
        return usdValue.toLocaleString('en', {
          style: 'currency',
          currency: 'USD',
        });
      }
      return null;
    },
  },
});
</script>

<style scoped>
.c-holding {
  padding: 10px;
}
</style>
