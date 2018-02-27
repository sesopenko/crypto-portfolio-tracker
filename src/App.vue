<template>
  <div id="app">
    <header>
      <h1>
        <a href="#/">
          sesopenko/crypto-portfolio-tracker
        </a>
      </h1>
      <div>
        An open source crypto portfolio tracker.
      </div>
    </header>
    <div id="nav">
      <span class="nav-item">
        <a href="#/">
          Home
        </a>
      </span>
      <span class="nav-item">
        <a href="#/instructions">
          Instructions
        </a>
      </span>
      <span class="nav-item">
        <a href="#/about">
          About
        </a>
      </span>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}
header {
  margin-bottom: 20px;
}
.nav-item {
  margin-right: 10px;
}
</style>
