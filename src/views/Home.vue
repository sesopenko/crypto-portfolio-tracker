<template>
  <div class="home">
    <HoldingCreator/>
    <HoldingList/>
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
});
</script>
