<template>
  <div class="theme-choice">
    <div class="choice-container">
      <h3>Choisissez vos sources 😄</h3>
      <ul>
        <li v-on:click="clickedSource('20minutes')" :class="{ active: selectedSources.includes('20minutes') }" id="20minutes">
          20 minutes
        </li>
        <li v-on:click="clickedSource('lesEchos')" :class="{ active: selectedSources.includes('lesEchos') }" id="lesEchos">
          Les Echos
        </li>
        <li v-on:click="clickedSource('leFigaro')" :class="{ active: selectedSources.includes('leFigaro') }" id="leFigaro">
          Le Figaro
        </li>
      </ul>
      <h3 v-if="selectedSources.length != 0">... et vos thèmes !</h3>
      <ul>
        <li v-on:click="clickedTheme('actu-generale')" :class="{ active: selectedThemes.includes('actu-generale') }" id="actu-generale" v-if="selectedSources.includes('20minutes') || selectedSources.includes('lesEchos')">
          Actu génèrale
        </li>
        <li v-on:click="clickedTheme('sport')" :class="{ active: selectedThemes.includes('sport') }" id="sport" v-if="selectedSources.includes('20minutes') || selectedSources.includes('leFigaro')">
          Sport
        </li>
        <li v-on:click="clickedTheme('entertainment')" :class="{ active: selectedThemes.includes('entertainment') }" id="entertainment" v-if="selectedSources.includes('20minutes')">
          Entertainment
        </li>
        <li v-on:click="clickedTheme('economie')" :class="{ active: selectedThemes.includes('economie') }" id="economie" v-if="selectedSources.includes('20minutes') || selectedSources.includes('lesEchos') || selectedSources.includes('leFigaro')">
          Economie
        </li>
        <li v-on:click="clickedTheme('planete')" :class="{ active: selectedThemes.includes('planete') }" id="planete" v-if="selectedSources.includes('20minutes')">
          Planète
        </li>
        <li v-on:click="clickedTheme('insolite')" :class="{ active: selectedThemes.includes('insolite') }" id="insolite" v-if="selectedSources.includes('20minutes')">
          insolite
        </li>
        <li v-on:click="clickedTheme('desintox')" :class="{ active: selectedThemes.includes('desintox') }" id="desintox" v-if="selectedSources.includes('20minutes') || selectedSources.includes('leFigaro')">
          desintox
        </li>
        <li v-on:click="clickedTheme('high-tech')" :class="{ active: selectedThemes.includes('high-tech') }" id="high-tech" v-if="selectedSources.includes('20minutes') || selectedSources.includes('lesEchos') ||selectedSources.includes('leFigaro')">
          High-tech
        </li>
        <li v-on:click="clickedTheme('sciences')" :class="{ active: selectedThemes.includes('sciences') }" id="sciences" v-if="selectedSources.includes('leFigaro')">
          Sciences
        </li>
        <li v-on:click="clickedTheme('finance')" :class="{ active: selectedThemes.includes('finance') }" id="finance" v-if="selectedSources.includes('lesEchos')">
          Finance
        </li>
        <li v-on:click="clickedTheme('bourse')" :class="{ active: selectedThemes.includes('bourse') }" id="bourse" v-if="selectedSources.includes('lesEchos')">
          Bourse
        </li>
        <li v-on:click="clickedTheme('politique')" :class="{ active: selectedThemes.includes('politique') }" id="politique" v-if="selectedSources.includes('lesEchos')">
          Politique
        </li>
      </ul>
      <button class="next-button" @click="themeValidator"><font-awesome-icon icon="fa-solid fa-arrow-right" /></button>
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


<style scoped lang="scss">

.theme-choice {
  padding-top : 4rem;
  background: #EDE4E3;
  width : 100vw;
  height : 80vh;
  z-index : 1000;
  position : absolute;
  top : 0;
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
        cursor: pointer;
        border : #FF6961 solid 1.5px;
        border-radius : 1rem;
        padding : 0.4rem;
        margin : 0.5rem;
        // &:hover {
        //   background: rgb(250, 120, 120);
        //   border : transparent solid 1.5px;
        // }
      }
      .active {
        background: #FF6961;
        border : transparent solid 1.5px;
      }
      // &::after {
      //   content : '';
      //   width : 80vw;
      //   height : 1px;
      //   background: #2c3e50;
      //   position : absolute;
      //   left : calc(50% - 40vw);
      //   bottom : 0;
      // }
    }
    .next-button {
      cursor: pointer;
      position : absolute;
      bottom : 0;
      right : 0;
      background : #EDE4E3;
      border : #FF6961 solid 1.5px;
      padding : 0.4rem;
      border-radius : 50%;
      font-size : 1.7rem;
      color: #2c3e50;
      width : 3.4rem;
      height  : 3.4rem;
      &:hover {
          background: #FF6961;
          border : transparent solid 1.5px;
        }
    }
  }
}


</style>
