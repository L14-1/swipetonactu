<template>
  <div class="articles-displayer">
    <div v-for="article in returnedArticles" :key="article.id" :class="[seenArticles && seenArticles.includes(article.uniqueId) ? 'un-displayed' : '' , 'card-container']" :id="'id' + article.uniqueId" >
      <div class="inside-card">
        <img :src="article.img" alt="image descriptive de l'article" class="article-img">
        <h2>{{ article.title }}</h2>
        <p class="themeInfo">{{ article.theme }}</p>
        <div class="buttons">
            <button v-on:click="nextArticle(article.uniqueId)" class="buttons--choice buttons--dislike"><font-awesome-icon icon="fa-solid fa-xmark" /></button>
            <a v-on:click="seenArticle(article.uniqueId)" :href="article.url" target="_blank" class="buttons--choice buttons--like"><font-awesome-icon icon="fa-solid fa-heart" /></a>
        </div>
        <!-- <img :src="'../assets/' + article.source + '-logo.png'" :alt="'logo de ' + article.source" class="source-logo"> -->
        <img src="../assets/20minutes-logo.png" alt="logo 20 minutes" class="source-logo" v-if="article.source == '20minutes'">
        <img src="../assets/leFigaro-logo.png" alt="logo le Figaro" class="source-logo" v-if="article.source == 'leFigaro'">
        <img src="../assets/lesEchos-logo.png" alt="logo les Echos" class="source-logo" v-if="article.source == 'lesEchos'">
      </div>
    </div>
    <div class="end-message">
        <h3>C'est fini pour aujourd'hui !</h3>
        <p>Revenez demain pour de nouvelles actus !</p>
    </div>
  </div>
</template>

<script>

import { mapState } from "vuex";

export default {
  name: 'articlesDisplayer',
  data : function() {
      return {
          seenArticles: [],
        }
  },
  computed: {
    ...mapState({
      returnedArticles: "returnedArticles",
    }),
  },
  mounted() {
    let selectedArticles = JSON.parse(window.localStorage.getItem('selectedThemes'));
    let selectedSources = JSON.parse(window.localStorage.getItem('selectedSources'));
    let getSpecifiedArticles = { 
        selectedSources : selectedSources,
        selectedThemes : selectedArticles,
      }
    this.$store.dispatch("getSpecifiedArticles", getSpecifiedArticles);
    this.seenArticles = JSON.parse(window.localStorage.getItem('seenArticles'));
  },
  methods: {
      nextArticle: function(id) {

        this.$el.querySelector(`#id${id}`).setAttribute("class", "card-container slide-effect");
        
        setTimeout(() => {
            this.seenArticles.push(id);
            window.localStorage.setItem('seenArticles', JSON.stringify(this.seenArticles))
        }, "1000")

      },
      seenArticle: function(id) {

          this.$el.querySelector(`#id${id}`).setAttribute("class", "card-container slide-effect-seen")
          
        setTimeout(() => {
            this.seenArticles.push(id);
            window.localStorage.setItem('seenArticles', JSON.stringify(this.seenArticles))
        }, "1000")
      },
  }
}
</script>


<style scoped lang="scss">

@keyframes slideAwayCard {
    to {
        transform: translateX(-150vw) translateY(10rem) rotateZ(-45deg);
    }
}
@keyframes slideAwayCardRight {
    to {
        transform: translateX(150vw) translateY(10rem) rotateZ(45deg);
    }
}

.articles-displayer {
    display : flex;
    flex-direction: column;
    align-items: center;
    .card-container {
      position : absolute;
        .inside-card {
            position: relative;
            overflow: hidden;
            display : flex;
            flex-direction: column;
            background: white;
            width : 90vw;
            max-width : 22rem;
            height : 75vh;
            max-height : 50rem;
            border-radius : 2rem;
            .article-img {
                margin-inline : auto;
                width : 100%;
                height : 50%;
                object-fit: cover;
            }
            h2 {
                font-size: 1.2rem;
                margin : 1rem 0.7rem;
            }
            .buttons {
                position: absolute;
                bottom : 3rem;
                width : 100%;
                display: flex;
                justify-content: space-evenly;
                &--like {
                    border : 2px solid #77DD77;
                }
                &--dislike {
                    border : 2px solid #FF6961;
                }
                &--choice {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height : 4rem;
                    width : 4rem;
                    border-radius : 50%;
                    background: white;
                    text-decoration: none;
                    cursor: pointer;
                    font-size : 2rem;
                    .fa-xmark {
                        color : #FF6961;
                    }
                    .fa-heart {
                        color : #77DD77;
                    }
                }
            }
            .themeInfo {
                position : absolute;
                bottom : 50%;
                left : 0;
                font-size : 1rem;
                background: linear-gradient(0.85turn, #e66465 25%, #9198e5);
                color : white;
                padding : 0.3rem 0.8rem 0.3rem 0.3rem;
                border-top-right-radius: 15px;
            }
            .source-logo {
                position: absolute;
                width : 2.6rem;
                bottom : 0.2rem;
                left : calc(50% - 1.3rem);
            }
        }
    }
    .slide-effect {
        animation : slideAwayCard 1s ease-in-out forwards;
    }
    .slide-effect-seen {
        animation : slideAwayCardRight 1s ease-in-out forwards;
    }
    .un-displayed {
        display : none;
    }
    .end-message {
        z-index : -1;
        display : flex;
        flex-direction : column;
        justify-content: center;
        align-items : center;
        height : 50vh;
        width: 60vw;

    }
}

</style>
