<template>
  <div class="c-holding-creator">
    <form @submit.prevent="addHolding">
      <label>
        Crypto Name:
        <input
          v-model="name"
          type="text"
        >
      </label>
      <label>
        Crypto Value:
        <input
          v-model="value"
          type="number"
        >
      </label>
      <input
        type="submit"
        data-test-add
        value="Add Holding"
        @click.prevent="addHolding"
      >
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HoldingCreator',
  data() {
    return {
      name: '',
      value: '1',
      defaultValue: '1',
    };
  },
  methods: {
    addHolding() {
      const holdingName = this.name.toUpperCase().replace(/[^A-Z]/g, '');
      this.$store.dispatch('addHolding', {
        name: holdingName,
        value: parseFloat(this.value),
      });
      this.name = '';
      this.value = this.defaultValue;
    },
  },
});
</script>

<style scoped>
</style>
