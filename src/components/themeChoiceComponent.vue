<template>
  <div class="theme-choice">
    <router-link to="/settings" class="button setting-button"><font-awesome-icon icon="fa-solid fa-gear" /></router-link>
    <h1><span class="swipe">Swipe</span> <span class="news">news</span></h1>
    <div class="choice-container">
      <h3>Choisissez vos sources 😄</h3>
      <ul>
        <li v-on:click="clickedSource('20minutes')" :class="[selectedSources.includes('20minutes') ? 'source--button__active' : '' , 'source--button']" id="20minutes">
          20 minutes
        </li>
        <li v-on:click="clickedSource('lesEchos')" :class="[selectedSources.includes('lesEchos') ? 'source--button__active' : '' , 'source--button']" id="lesEchos">
          Les Echos
        </li>
        <li v-on:click="clickedSource('leFigaro')" :class="[selectedSources.includes('leFigaro') ? 'source--button__active' : '' , 'source--button']" id="leFigaro">
          Le Figaro
        </li>
        <li v-on:click="clickedSource('lexpress')" :class="[selectedSources.includes('lexpress') ? 'source--button__active' : '' , 'source--button']" id="lexpress">
          L'Express
        </li>
        <li v-on:click="clickedSource('lePoint')" :class="[selectedSources.includes('lePoint') ? 'source--button__active' : '' , 'source--button']" id="lePoint">
          le Point
        </li>
      </ul>
      <h3 v-if="selectedSources.length != 0">... et vos thèmes !</h3>
      <ul>
        <li v-on:click="clickedTheme('actu-generale')" :class="[selectedThemes.includes('actu-generale') ? 'source--button__active' : '' , 'source--button']" id="actu-generale" v-if="selectedSources.includes('20minutes') || selectedSources.includes('lesEchos')">
          Actu génèrale
        </li>
        <li v-on:click="clickedTheme('sport')" :class="[selectedThemes.includes('sport') ? 'source--button__active' : '' , 'source--button']" id="sport" v-if="selectedSources.includes('20minutes') || selectedSources.includes('leFigaro')">
          Sport
        </li>
        <li v-on:click="clickedTheme('entertainment')" :class="[selectedThemes.includes('entertainment') ? 'source--button__active' : '' , 'source--button']" id="entertainment" v-if="selectedSources.includes('20minutes')">
          Entertainment
        </li>
        <li v-on:click="clickedTheme('economie')" :class="[selectedThemes.includes('economie') ? 'source--button__active' : '' , 'source--button']" id="economie" v-if="selectedSources.includes('20minutes') || selectedSources.includes('lesEchos') || selectedSources.includes('leFigaro') || selectedSources.includes('lePoint')">
          Economie
        </li>
        <li v-on:click="clickedTheme('planete')" :class="[selectedThemes.includes('planete') ? 'source--button__active' : '' , 'source--button']" id="planete" v-if="selectedSources.includes('20minutes') || selectedSources.includes('lexpress')">
          Planète
        </li>
        <li v-on:click="clickedTheme('insolite')" :class="[selectedThemes.includes('insolite') ? 'source--button__active' : '' , 'source--button']" id="insolite" v-if="selectedSources.includes('20minutes')">
          insolite
        </li>
        <li v-on:click="clickedTheme('desintox')" :class="[selectedThemes.includes('desintox') ? 'source--button__active' : '' , 'source--button']" id="desintox" v-if="selectedSources.includes('20minutes') || selectedSources.includes('leFigaro')">
          desintox
        </li>
        <li v-on:click="clickedTheme('high-tech')" :class="[selectedThemes.includes('high-tech') ? 'source--button__active' : '' , 'source--button']" id="high-tech" v-if="selectedSources.includes('20minutes') || selectedSources.includes('lesEchos') || selectedSources.includes('leFigaro') || selectedSources.includes('lexpress') || selectedSources.includes('lePoint')">
          High-tech
        </li>
        <li v-on:click="clickedTheme('sciences')" :class="[selectedThemes.includes('sciences') ? 'source--button__active' : '' , 'source--button']" id="sciences" v-if="selectedSources.includes('leFigaro') || selectedSources.includes('lexpress') || selectedSources.includes('lePoint')">
          Sciences
        </li>
        <li v-on:click="clickedTheme('finance')" :class="[selectedThemes.includes('finance') ? 'source--button__active' : '' , 'source--button']" id="finance" v-if="selectedSources.includes('lesEchos')">
          Finance
        </li>
        <li v-on:click="clickedTheme('bourse')" :class="[selectedThemes.includes('bourse') ? 'source--button__active' : '' , 'source--button']" id="bourse" v-if="selectedSources.includes('lesEchos')">
          Bourse
        </li>
        <li v-on:click="clickedTheme('politique')" :class="[selectedThemes.includes('politique') ? 'source--button__active' : '' , 'source--button']" id="politique" v-if="selectedSources.includes('lesEchos') || selectedSources.includes('lexpress') || selectedSources.includes('lePoint')">
          Politique
        </li>
        <li v-on:click="clickedTheme('idee-debats')" :class="[selectedThemes.includes('idee-debats') ? 'source--button__active' : '' , 'source--button']" id="idee-debats" v-if="selectedSources.includes('lexpress') || selectedSources.includes('lePoint')">
          Idée - débats
        </li>
      </ul>
    </div>
      <button class="button next-button" @click="themeValidator"><font-awesome-icon icon="fa-solid fa-arrow-right" /></button>
  </div>
</template>

<script>
export default {
  name: 'themeChoice',
  data: function () {
    return {
      selectedThemes : [],
      selectedSources : [],
    };
  },
  mounted() {
    let arrayThemes = JSON.parse(window.localStorage.getItem('memoryThemes'));
    if (arrayThemes) {
      this.selectedThemes = arrayThemes;
    }
    let arraySources = JSON.parse(window.localStorage.getItem('selectedSources'));
    if (arraySources) {
      this.selectedSources = arraySources;
    }
  },
  methods: {
    clickedTheme: function (theme) {
      let selectedArray = this.selectedThemes;
      let self = this;
      // let selectedValue = event.path[0].getAttribute("id")

      if (selectedArray.includes(theme)) {
        let index = selectedArray.indexOf(theme);
        selectedArray.splice(index, 1);
        self.selectedThemes = selectedArray;
      } else {
        self.selectedThemes.push(theme)
      }
    },
    clickedSource: function (source) {
      let selectedArray = this.selectedSources;
      let self = this;
      // let selectedValue = event.path[0].getAttribute("id")

      if (selectedArray.includes(source)) {
        let index = selectedArray.indexOf(source);
        selectedArray.splice(index, 1);
        self.selectedSources = selectedArray;
      } else {
        self.selectedSources.push(source)
      }
    },
    themeValidator() {
      let selectedArray = this.selectedThemes;
      let sourcesArray = this.selectedSources;
      if (sourcesArray.length == 0) {
        alert('choisissez au moins une source 😉')
      } else {
        if (selectedArray.length == 0) {
            alert('choisissez au moins un thème 😉')
          } else {
            window.localStorage.setItem('selectedThemes', JSON.stringify(selectedArray));
            window.localStorage.setItem('selectedSources', JSON.stringify(sourcesArray));
            window.localStorage.removeItem('memoryThemes');
            this.$router.push('/actu');
          }
      }
    }
  }
}
</script>


<style lang="scss">

.theme-choice {
  padding-top : 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .setting-button {
    position : absolute;
    top : 2rem;
    left : 1rem;
    width : 3rem;
    height: 3rem;
    border-radius: 50%;
    display: flex;
    align-items : center;
    justify-content: center;
    color : #2c3e50;
  }
  h1 {
    position : absolute;
    top : 2rem;
    right : 2rem;
  }
  .choice-container {
    margin-top : 4rem;
    position : relative;
    height : 80vh;
    width : 95vw;
    max-width : 1000px;
    padding : 0 0.9rem;
    h3 {
      font-size : 1rem;
      width : 100%;
      text-align: left;
      margin-bottom: 1.5rem;
      margin-top : 1rem;
    }
    ul {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      overflow-y: auto;
      max-height : 35vh;
      // &:last-child {
      //   box-shadow : inset 0 -25px 15px #f1f3f6;
      //   border-bottom : 2px solid #f1f3f6;
      // }
      // gap : 1.2rem;
      li {
        //z-index : -1;
        margin-right : 1rem;
        margin-bottom : 1rem;
      }
    }
    .source--button {
      display : flex;
      align-items : center;
      padding : 0.5rem;
      border-radius: 20px;
      border : 2px solid #777a7d;
      &__active {
        border-color: #77DD77;
      }
    }
  }
    .next-button {
      cursor: pointer;
      position : absolute;
      bottom : 2rem;
      right : 2rem;
      background : transparent;

      padding : 0.4rem;
      border-radius : 50%;
      font-size : 1.3rem;
      color: #2c3e50;
      width : 3rem;
      height  : 3rem;
    }
}


</style>
