<template>
  <div class="theme-choice">
    <div class="choice-container">
      <h2>Choisissez vos thèmes préférés 😃</h2>
      <ul>
        <li @click="clickedTheme" :class="{ active: selectedThemes.includes('actu-generale') }" id="actu-generale">
          Actu génèrale
        </li>
        <li @click="clickedTheme" :class="{ active: selectedThemes.includes('sport') }" id="sport">
          Sport
        </li>
        <li @click="clickedTheme" :class="{ active: selectedThemes.includes('entertainment') }" id="entertainment">
          Entertainment
        </li>
        <li @click="clickedTheme" :class="{ active: selectedThemes.includes('economie') }" id="economie">
          Economie
        </li>
        <li @click="clickedTheme" :class="{ active: selectedThemes.includes('planete') }" id="planete">
          Planète
        </li>
        <li @click="clickedTheme" :class="{ active: selectedThemes.includes('insolite') }" id="insolite">
          insolite
        </li>
        <li @click="clickedTheme" :class="{ active: selectedThemes.includes('desintox') }" id="desintox">
          desintox
        </li>
        <li @click="clickedTheme" :class="{ active: selectedThemes.includes('high-tech') }" id="high-tech">
          High-tech
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
    };
  },
  methods: {
    clickedTheme(event) {
      let selectedArray = this.selectedThemes;
      let selectedValue = event.path[0].getAttribute("id")

      if (selectedArray.includes(selectedValue)) {
        let index = selectedArray.indexOf(selectedValue);
        selectedArray.splice(index, 1);
        this.selectedThemes = selectedArray;
      } else {
        this.selectedThemes.push(selectedValue)
      }
    },
    themeValidator() {
      let selectedArray = this.selectedThemes;
      if (selectedArray.length == 0) {
        window.localStorage.setItem('selectedThemes', JSON.stringify(['sport']));
        this.$router.push('/actu');
      } else {
        window.localStorage.setItem('selectedThemes', JSON.stringify(selectedArray));
        this.$router.push('/actu');
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
    h2 {
      margin-bottom : 4rem;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        cursor: pointer;
        border : #FF6961 solid 1.5px;
        border-radius : 1rem;
        padding : 0.4rem;
        margin : 0.5rem;
        &:hover {
          background: rgb(250, 120, 120);
          border : transparent solid 1.5px;
        }
      }
      .active {
        background: #FF6961;
        border : transparent solid 1.5px;
      }
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
