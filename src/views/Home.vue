<template>
  <div class="home">
    <HoldingCreator/>
    <HoldingList
      v-if="hasHoldings"
    />
    <div
      v-else
      class="add-holding-instructions"
    >
      Enter the details above then click "Add Crypto Holding" to add your first holding.
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HoldingCreator from '@/components/HoldingCreator';
import HoldingList from '@/components/HoldingList';

export default Vue.extend({
  name: 'Home',
  components: {
    HoldingCreator,
    HoldingList,
  },
  computed: {
    hasHoldings() {
      return this.$store.state.holdings.length > 0;
    }
  }
});
</script>

<style scoped>

</style>
