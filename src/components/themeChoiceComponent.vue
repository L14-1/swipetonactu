<template>
  <div class="theme-choice">
    <div class="choice-container">
      <h3>Choisissez vos sources 😄</h3>
      <ul>
        <li v-on:click="clickedSource('20minutes')" :class="[selectedSources.includes('20minutes') ? 'activeBtn' : '' , 'button']" id="20minutes">
          20 minutes
        </li>
        <li v-on:click="clickedSource('lesEchos')" :class="[selectedSources.includes('lesEchos') ? 'activeBtn' : '' , 'button']" id="lesEchos">
          Les Echos
        </li>
        <li v-on:click="clickedSource('leFigaro')" :class="[selectedSources.includes('leFigaro') ? 'activeBtn' : '' , 'button']" id="leFigaro">
          Le Figaro
        </li>
      </ul>
      <h3 v-if="selectedSources.length != 0">... et vos thèmes !</h3>
      <ul>
        <li v-on:click="clickedTheme('actu-generale')" :class="[selectedThemes.includes('actu-generale') ? 'activeBtn' : '' , 'button']" id="actu-generale" v-if="selectedSources.includes('20minutes') || selectedSources.includes('lesEchos')">
          Actu génèrale
        </li>
        <li v-on:click="clickedTheme('sport')" :class="[selectedThemes.includes('sport') ? 'activeBtn' : '' , 'button']" id="sport" v-if="selectedSources.includes('20minutes') || selectedSources.includes('leFigaro')">
          Sport
        </li>
        <li v-on:click="clickedTheme('entertainment')" :class="[selectedThemes.includes('entertainment') ? 'activeBtn' : '' , 'button']" id="entertainment" v-if="selectedSources.includes('20minutes')">
          Entertainment
        </li>
        <li v-on:click="clickedTheme('economie')" :class="[selectedThemes.includes('economie') ? 'activeBtn' : '' , 'button']" id="economie" v-if="selectedSources.includes('20minutes') || selectedSources.includes('lesEchos') || selectedSources.includes('leFigaro')">
          Economie
        </li>
        <li v-on:click="clickedTheme('planete')" :class="[selectedThemes.includes('planete') ? 'activeBtn' : '' , 'button']" id="planete" v-if="selectedSources.includes('20minutes')">
          Planète
        </li>
        <li v-on:click="clickedTheme('insolite')" :class="[selectedThemes.includes('insolite') ? 'activeBtn' : '' , 'button']" id="insolite" v-if="selectedSources.includes('20minutes')">
          insolite
        </li>
        <li v-on:click="clickedTheme('desintox')" :class="[selectedThemes.includes('desintox') ? 'activeBtn' : '' , 'button']" id="desintox" v-if="selectedSources.includes('20minutes') || selectedSources.includes('leFigaro')">
          desintox
        </li>
        <li v-on:click="clickedTheme('high-tech')" :class="[selectedThemes.includes('high-tech') ? 'activeBtn' : '' , 'button']" id="high-tech" v-if="selectedSources.includes('20minutes') || selectedSources.includes('lesEchos') ||selectedSources.includes('leFigaro')">
          High-tech
        </li>
        <li v-on:click="clickedTheme('sciences')" :class="[selectedThemes.includes('sciences') ? 'activeBtn' : '' , 'button']" id="sciences" v-if="selectedSources.includes('leFigaro')">
          Sciences
        </li>
        <li v-on:click="clickedTheme('finance')" :class="[selectedThemes.includes('finance') ? 'activeBtn' : '' , 'button']" id="finance" v-if="selectedSources.includes('lesEchos')">
          Finance
        </li>
        <li v-on:click="clickedTheme('bourse')" :class="[selectedThemes.includes('bourse') ? 'activeBtn' : '' , 'button']" id="bourse" v-if="selectedSources.includes('lesEchos')">
          Bourse
        </li>
        <li v-on:click="clickedTheme('politique')" :class="[selectedThemes.includes('politique') ? 'activeBtn' : '' , 'button']" id="politique" v-if="selectedSources.includes('lesEchos')">
          Politique
        </li>
      </ul>
      <button class="button next-button" @click="themeValidator"><font-awesome-icon icon="fa-solid fa-arrow-right" /></button>
    </div>
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
  .choice-container {
    position : relative;
    height : 80vh;
    width : 80vw;
    max-width : 1000px;
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
      li {
        margin : 0.5rem;
      }
    }
    .next-button {
      cursor: pointer;
      position : absolute;
      bottom : 0;
      right : 0;
      background : transparent;

      padding : 0.4rem;
      border-radius : 50%;
      font-size : 1.7rem;
      color: #2c3e50;
      width : 3.4rem;
      height  : 3.4rem;
    }
  }
}


</style>
