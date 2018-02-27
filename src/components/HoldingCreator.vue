<template>
  <div class="c-holding-creator">
    <h2>
      Add a crypto:
    </h2>
    <form @submit.prevent="addHolding">
      <label>
        Name:
        <input
          v-model="name"
          type="text"
        >
      </label>
      <label>
        Where is it stored?:
        <input
          v-model="location"
          type="text"
        >
      </label>
      <label>
        Quantity Held:
        <input
          v-model="value"
          type="number"
        >
      </label>
      <input
        type="submit"
        data-test-add
        value="Add Crypto Holding"
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
.c-holding-creator {
  text-align: left;
  margin-bottom: 20px;
}
label {
  display: block;
}
</style>
