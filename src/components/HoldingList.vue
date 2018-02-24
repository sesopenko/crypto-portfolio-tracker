<template>
  <div class="c-holdings">
    <Holding
      v-for="(holding, index) in holdings"
      :key="index"
      :name="holding.name"
      :value="holding.value"
    />
  </div>
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
