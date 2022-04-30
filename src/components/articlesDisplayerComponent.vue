<template>
  <div class="articles-displayer">
    <div v-for="article in returnedArticles" :key="article.id" class="card-container" :id="article.uniqueId" v-show="!(seenArticles.includes(article.uniqueId))">
      <div class="inside-card">
        <img :src="article.img" alt="image descriptive de l'article">
        <h2>{{ article.title }}</h2>
        <div class="buttons">
            <button @click="nextArticle" class="buttons--choice buttons--dislike"><font-awesome-icon icon="fa-solid fa-xmark" /></button>
            <a @click="seenArticle" :href="article.url" target="_blank" class="buttons--choice buttons--like"><font-awesome-icon icon="fa-solid fa-heart" /></a>
        </div>
        <p class="themeInfo">{{ article.theme }}</p>
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
    this.$store.dispatch("getSpecifiedArticles", selectedArticles);
    this.seenArticles = JSON.parse(window.localStorage.getItem('seenArticles'));
  },
  methods: {
      nextArticle(event) {
          var articleUniqueId = '';
          if (event.path[3].className == 'card-container') {
              event.path[3].setAttribute("class", "card-container slide-effect");
              articleUniqueId = event.path[3].getAttribute('id')
          } else if (event.path[3].className == 'buttons') {
              event.path[5].setAttribute("class", "card-container slide-effect")
              articleUniqueId = event.path[5].getAttribute('id')
          } else if (event.path[3].className == 'inside-card') {
              event.path[4].setAttribute("class", "card-container slide-effect")
              articleUniqueId = event.path[4].getAttribute('id')
          }
          this.seenArticles.push(articleUniqueId);
          window.localStorage.setItem('seenArticles', JSON.stringify(this.seenArticles))

      },
      seenArticle(event) {
          var articleUniqueId = '';
          if (event.path[3].className == 'card-container') {
              event.path[3].setAttribute("class", "card-container slide-effect-seen")
              articleUniqueId = event.path[3].getAttribute('id')
          } else if (event.path[3].className == 'buttons') {
              event.path[5].setAttribute("class", "card-container slide-effect-seen")
              articleUniqueId = event.path[5].getAttribute('id')
          } else if (event.path[3].className == 'inside-card') {
              event.path[4].setAttribute("class", "card-container slide-effect-seen")
              articleUniqueId = event.path[4].getAttribute('id')
          }
          this.seenArticles.push(articleUniqueId);
          window.localStorage.setItem('seenArticles', JSON.stringify(this.seenArticles))
      },
  }
}
</script>


<style scoped lang="scss">

@keyframes slideAwayCard {
    to {
        transform: translateX(-150vw) translateY(10rem) rotateZ(-45deg);
        display: none;
    }
}
@keyframes slideAwayCardRight {
    to {
        transform: translateX(150vw) translateY(10rem) rotateZ(45deg);
        display: none;
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
            width : 75vw;
            max-width : 21rem;
            height : 70vh;
            max-height : 50rem;
            // border : solid 2px white;
            border-radius : 2rem;
            img {
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
                bottom : 0.3rem;
                right : 1.5rem;
                font-size : 0.8rem;
            }
        }
    }
    .slide-effect {
        animation : slideAwayCard 1s ease-in-out forwards;
    }
    .slide-effect-seen {
        animation : slideAwayCardRight 1s ease-in-out forwards;
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
