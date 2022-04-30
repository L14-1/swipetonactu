<template>
  <div id="app">
    <div id="nav">
      <a @click="removeThemes"><font-awesome-icon icon="fa-solid fa-object-ungroup" /></a>
      <h1>Swipe ton actu !</h1>
      <router-link to="/actu"><font-awesome-icon icon="fa-solid fa-newspaper" /></router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
      removeThemes() {
          window.localStorage.removeItem('selectedThemes');
          this.$router.push('/');
      },
  }
}
</script>


<style lang="scss">

*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  // font-family: 'Montserrat', sans-serif;
}

html {
  background: #EDE4E3;
  width: 100vw;
  overflow-x: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  font-family: 'Inconsolata', monospace;
  padding: 1rem 2rem 4.5rem 2rem;
  display: flex;
  justify-content: space-between;
  width : 100vw;
  max-width: 1000px;
  margin-inline : auto;
  a {
    cursor: pointer;
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
