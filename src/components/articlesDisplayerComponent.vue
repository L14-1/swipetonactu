<template>
  <div class="articles-displayer">
    <div v-for="article in returnedArticles" :key="article.id" :class="[seenArticles && seenArticles.includes('id' + article.uniqueId) ? 'un-displayed' : 'unseen-article' , 'card-container']" :id="'id' + article.uniqueId" >
      <div v-hammer:pan="onPan" class="inside-card">
        <img :src="article.img" alt="image descriptive de l'article" class="article-img">
        <h2>{{ article.title }}</h2>
        <p class="themeInfo">{{ article.theme }}</p>
        <!-- <img :src="'../assets/' + article.source + '-logo.png'" :alt="'logo de ' + article.source" class="source-logo"> -->
        <img src="../assets/20minutes-logo.png" alt="logo 20 minutes" class="source-logo" v-if="article.source == '20minutes'">
        <img src="../assets/leFigaro-logo.png" alt="logo le Figaro" class="source-logo" v-if="article.source == 'leFigaro'">
        <img src="../assets/lesEchos-logo.png" alt="logo les Echos" class="source-logo" v-if="article.source == 'lesEchos'">
        <p class="un-displayed">{{article.url}}</p>
      </div>
    </div>
    <div v-if="savedArticles && savedArticles.length != 0" class="notification"></div>
    <div class="end-message">
        <h3>C'est fini ...😞</h3>
        <p>Revenez plus tard pour de nouvelles actus !</p>
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
          savedArticles: [],
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
    if (window.localStorage.getItem('seenArticles')) {
        this.seenArticles = JSON.parse(window.localStorage.getItem('seenArticles'));
    }
    if (window.localStorage.getItem('savedArticles')) {
        this.savedArticles = JSON.parse(window.localStorage.getItem('savedArticles'));
    }
  },
  methods: {
      onPan(e) {
        if (window.localStorage.getItem('seenArticles')) {
            this.seenArticles = JSON.parse(window.localStorage.getItem('seenArticles'));
        }
        if (window.localStorage.getItem('savedArticles')) {
            this.savedArticles = JSON.parse(window.localStorage.getItem('savedArticles'));
        }

        const maxAngle = 45;
        const smooth = 0.3;
        const treshold = 20;
        let posX = e.deltaX;
        let posY = Math.max(0, Math.abs(posX * smooth) - treshold);
        let card = e.target.className == 'inside-card' ? e.target : e.target.offsetParent;
        if (e.target.className == 'inside-card') {
            card = card.offsetParent
        }
        card.classList.remove('resetPos-card');

        let angle = posX < 0 ? (Math.max(posX * smooth/ 100, -1) * maxAngle) : Math.min(posX * smooth / 100, 1) * maxAngle;

        card.style.transform = `translateX(${posX}px) translateY(${posY}px) rotate(${angle}deg)`;

        card.classList.remove('liking-card');
        card.classList.remove('disliking-card')
        if (posX > 150) {
            card.classList.add('liking-card')
        } else if (posX < -150) {
            card.classList.add('disliking-card')
        }

        let url = card.children[0].children[4].innerText;
        let title = card.children[0].children[1].innerText

        if (e.isFinal) {
            card.style.transform = ``;
            if (posX > 150) {
                card.classList.add('liked-card')
                setTimeout(() => {
                    card.classList.add('un-displayed')
                    this.seenArticles.push(card.id);
                    window.localStorage.setItem('seenArticles', JSON.stringify(this.seenArticles))
                    this.savedArticles.push({
                        title,
                        url,
                    });
                    window.localStorage.setItem('savedArticles', JSON.stringify(this.savedArticles))
                }, "400")
            } else if (posX < -150) {
                card.classList.add('disliked-card')
                setTimeout(() => {
                    card.classList.add('un-displayed')
                    this.seenArticles.push(card.id);
                    window.localStorage.setItem('seenArticles', JSON.stringify(this.seenArticles))
                }, "400")
            } else {
                card.classList.add('resetPos-card')
            }
        }

        // console.log(card.children[0].children[4].innerText)

      }
  }
}
</script>


<style scoped lang="scss">

@keyframes slideAwayCard {
    0% {
        transform: translateX(150vw) translateY(10rem) rotateZ(45deg);
        }
    99% {
        transform: translateX(-150vw) translateY(10rem) rotateZ(-45deg);
        visibility: hidden;
        
        }
    100% {
        transform: translateX(0) translateY(0) rotateZ(0);
        display: none;
    }
}
@keyframes slideAwayCardRight {
    0% {
        visibility: hidden;
        }
    99% {
        transform: translateX(150vw) translateY(10rem) rotateZ(45deg);
        visibility: hidden;
        
        }
    100% {
        transform: translateX(0) translateY(0) rotateZ(0);
        display: none;
    }
}

.articles-displayer {
    display : flex;
    flex-direction: column;
    align-items: center;
    .card-container {
      position : absolute;
      top : 15vh;
        .inside-card {
            overflow: hidden;
            display : flex;
            flex-direction: column;
            background: white;
            width : 80vw;
            max-width : 22rem;
            height : 50vh;
            max-height : 50rem;
            border-radius : 2rem;
            .article-img {
                margin-inline : auto;
                width : 100%;
                height : 60%;
                object-fit: cover;
            }
            h2 {
                font-size: 1.2rem;
                margin : 1rem 0.7rem;
            }
            .themeInfo {
                position : absolute;
                top : 0;
                left : 0;
                font-weight : 200;
                background: linear-gradient(-15deg, #e66465 25%, #9198e5);
                color : white;
                padding : 0.3rem 1.2rem 0.4rem 1rem;
                border-top-left-radius: 2rem;
                border-bottom-right-radius: 2rem;
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
        animation : slideAwayCardRight 1s linear forwards;
    }
    .un-displayed {
        visibility: hidden;
        display : none;
    }
    .liked-card {
        transition: 0.4s;
        transform: translateX(600px) translateY(100px) rotate(60deg);
    }
    .disliked-card {
        transition: 0.4s;
        transform: translateX(-600px) translateY(100px) rotate(-60deg);
    }
    .resetPos-card {
        transition: 0.5s;
    }
    .liking-card, .disliking-card {
        &::after {
            content : '';
            position : absolute;
            width : 100%;
            height: 100%;
            top : 0;
            left : 0;
            border-radius : 2rem;
            background: #77dd7783;
        }
    }
    .disliking-card::after {
        background: #ff696183;
    }
    .notification {
        position : absolute;
        top : 2rem;
        right : 2.1rem;
        z-index : 20;
        width : 0.8rem;
        height : 0.8rem;
        border-radius: 50%;
        background: #e66465;
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
