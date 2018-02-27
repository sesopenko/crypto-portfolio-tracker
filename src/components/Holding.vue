<template>
  <tr class="c-holding">
    <td
      class="holding-data"
      data-test-holding-name
    >
      {{ name }}
    </td>
    <td
      class="holding-data"
      data-test-holding-location
    >
      {{ location }}
    </td>
    <td
      class="holding-data holding-data--monetary"
      data-test-holding-value
    >
      {{ formattedValue }}
    </td>
    <td
      class="holding-data holding-data--monetary"
      data-test-holding-cad-value
    >
      <template v-if="cadValue">
        {{ cadValue }}
      </template>
    </td>
    <td
      class="holding-data"
      data-test-holding-actions
    >
      <button
        data-test-delete-button
        @click.prevent="deleteHolding"
      >
        Delete
      </button>
    </td>
  </tr>
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
    location: {
      type: String,
      required: true,
    },
    uuid: {
      type: String,
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
    formattedValue(): string {
      return this.value.toLocaleString('en', {
        style: 'decimal',
        minimumFractionDigits: 10,
      });
    },
    cadValue(): string|null {
      if (this.ticker) {
        const cadValue = this.ticker.priceCad * this.value;
        return cadValue.toLocaleString('en', {
          style: 'currency',
          currency: 'CAD',
        });
      }
      return null;
    },
  },
  methods: {
    deleteHolding() {
      this.$store.dispatch('deleteHolding', this.uuid);
    },
  },
});
</script>

<style scoped>
.holding-data {
  padding: 10px;
  text-align: left;
}
.holding-data--monetary {
  text-align: right;
  font-family: monospace;
}
.c-holding:nth-child(even) {
  background-color: #efefef;
}
</style>
