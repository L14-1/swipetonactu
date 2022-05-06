<template>
  <div id="app">
    <router-view/>
  </div>
</template>




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
  background: #f1f3f6;
  width: 100vw;
  height : 100vh;
  overflow:hidden;
}

#app {
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.button {
  cursor: pointer;
  border-radius: 20px;
  border: none;
  padding : 0.7rem;
  background: transparent;
  box-shadow: 
    inset 0 0 15px rgba(55, 84, 170,0),
    inset 0 0 20px rgba(255, 255, 255,0),
    7px 7px 15px rgba(55, 84, 170,.15),
    -7px -7px 20px rgba(255, 255, 255,1),
    inset 0px 0px 4px rgba(255, 255, 255,.2);
}

.activeBtn {
  box-shadow: 
      inset 7px 7px 15px rgba(55, 84, 170,.15),
      inset -7px -7px 20px rgba(255, 255, 255,1),
      0px 0px 4px rgba(255, 255, 255,.2);
}


</style>
