<template>
  <div class="nav">
      <a @click="removeThemes" class="button rounded"><font-awesome-icon icon="fa-solid fa-list-check" /></a>
      <h1><span class="swipe">Swipe</span> <span class="news">news</span></h1>
      <router-link to="/articles" class="button rounded"><font-awesome-icon icon="fa-solid fa-inbox" /></router-link>
    </div>
</template>

<script>
export default {
    name: 'header',
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

.nav {
  font-family: 'Dancing Script', cursive;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height : 10vh;
  max-height : 4.5rem;
  width : 100vw;
  max-width: 700px;
  margin-inline : auto;
  padding: 3rem 1.5rem;
  a {
    cursor: pointer;
    width : 2.8rem;
    height : 2.8rem;
    font-size : 1.2rem;
    color: #2c3e50;
    text-decoration: none;
  }
}
.swipe {
    font-family: 'Dancing Script', cursive;
}
.news {
    font-family: 'Koulen', cursive;
    font-size : 1.6rem;
}
.rounded {
    border-radius: 50%;
}

</style>