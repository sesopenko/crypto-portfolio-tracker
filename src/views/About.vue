<template>
  <div class="instructions">
    <h2>
      About
    </h2>
    <p>
      <a href="https://github.com/sesopenko/crypto-portfolio-tracker">sesopenko/crypto-portfolio-tracker</a> is an open source project.
      It is licensed under <a href="https://raw.githubusercontent.com/sesopenko/crypto-portfolio-tracker/master/LICENSE.txt">GPL-v3</a> which basically means you can use it freely, modify it, copy it, and share it, for non-commercial or commercial use so long as it's shared alike.
    </p>
    <p>
      This software stores your crypto holdings locally in your own browser using <a href="https://en.wikipedia.org/wiki/Web_storage">HTML5  localStorage</a> which means your holdings are never shared, not even with this site.
    </p>
    <p>
      "Why are the values in $CAD?  Why does it not have more features?"  Because I've made it for my own personal use but want to share it with others.  If you have ideas for features then navigate to the <a href="https://github.com/sesopenko/crypto-portfolio-tracker">github page</a> and submit a feature request.
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'About',
});
</script>

<style scoped>

</style>
