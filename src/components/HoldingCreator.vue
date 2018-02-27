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
        Crypto Location:
        <input
          v-model="location"
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
      location: '',
    };
  },
  methods: {
    addHolding() {
      const holdingName = this.name.toUpperCase().replace(/[^A-Z]/g, '');
      this.$store.dispatch('addHolding', {
        name: holdingName,
        value: parseFloat(this.value),
        location: this.location,
      });
      this.name = '';
      this.value = this.defaultValue;
      this.location = '';
    },
  },
});
</script>

<style scoped>
</style>
