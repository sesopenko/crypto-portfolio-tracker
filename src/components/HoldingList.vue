<template>
  <table class="c-holdings">
    <tr>
      <th class="list-header">Name</th>
      <th class="list-header">Location</th>
      <th class="list-header">Qty</th>
      <th class="list-header">USD Value</th>
      <th class="list-header">&nbsp;</th>
    </tr>
    <Holding
      v-for="(holding, index) in holdings"
      :key="index"
      :name="holding.name"
      :value="holding.value"
      :location="holding.location"
      :uuid="holding.uuid"
    />
    <HoldingTotal/>
  </table>
</template>

<script lang="ts">
import Vue from 'vue';
import { IHolding } from '@/types.ts';

import Holding from '@/components/Holding';
import HoldingTotal from '@/components/HoldingTotal';

export default Vue.extend({
  name: 'HoldingList',
  components: {
    Holding,
    HoldingTotal,
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
