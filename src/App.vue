<template>
  <div id="app">
    <div id="nav">
      <a @click="removeThemes"><font-awesome-icon icon="fa-solid fa-gear" /></a>
      <h1>swipe ton actu !</h1>
      <!-- <router-link to="/actu"><font-awesome-icon icon="fa-solid fa-newspaper" /></router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
      removeThemes() {
          window.localStorage.setItem('memoryThemes', window.localStorage.getItem('selectedThemes'))
          window.localStorage.removeItem('selectedThemes');
          setTimeout(() => {
            this.$router.push('/');
          }, "500")
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
  font-family: 'Oleo Script Swash Caps', cursive;
  position : relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height : 10vh;
  max-height : 4.5rem;
  width : 100vw;
  max-width: 700px;
  margin-inline : auto;
  margin-bottom : 1rem;
  position: relative;
  text-align: center;
  // &::after{
  //   content: '';
  //   width : 100%;
  //   height : 1px;
  //   background: #2c3e50;
  //   position : absolute;
  //   bottom : 0;
  // }
  a {
    position: absolute;
    left : 1.5rem;
    top : 1.5rem;
    cursor: pointer;
    font-size : 1.2rem;
    color: #2c3e50;
    text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
    }
    &:hover {
      color: #42b983;
    }
  }
}
</style>
