<template>
  <table class="c-holdings">
    <tr>
      <th class="list-header">Name</th>
      <th class="list-header">Qty</th>
      <th class="list-header">USD Value</th>
      <th class="list-header">&nbsp;</th>
    </tr>
    <Holding
      v-for="(holding, index) in holdings"
      :key="index"
      :name="holding.name"
      :value="holding.value"
    />
  </table>
</template>

<script lang="ts">
import Vue from 'vue';
import { IHolding } from '@/types.ts';

import Holding from '@/components/Holding';

export default Vue.extend({
  name: 'HoldingList',
  components: {
    Holding,
  },
  computed: {
    holdings(): IHolding[] {
      return this.$store.state.holdings;
    },
  },
});
</script>

<style scoped>
</style>
