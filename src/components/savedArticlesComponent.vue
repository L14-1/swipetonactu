<template>
  <div class="saved-articles">
        <router-link to="/actu" class="button back-button"><font-awesome-icon icon="fa-solid fa-arrow-left" /></router-link>
        <h1><span class="swipe">Swipe</span> <span class="news">news</span></h1>
        <div class="list-articles" v-if="savedArticles.length != 0">
            <div class="one-article" v-for="article in savedArticles.slice().reverse()" :key="article.title">
                <a :href="article.url" target="_blank">{{ article.title }}</a>
                <button @click="deleteArticle(savedArticles.indexOf(article))"><font-awesome-icon icon="fa-solid fa-xmark" /></button>
                <p class="un-displayed">{{ savedArticles.indexOf(article) }}</p>
            </div>
        </div>
        <div class="info-message" v-if="savedArticles.length == 0">
            <p>Les actus que vous avez "liké" apparaîtront ici 😉</p>
        </div>
  </div>
</template>

<script>




export default {
    name: 'articleWindow',
    data: function () {
        return {
            savedArticles: [],
        }
    },
    mounted() {
        if (window.localStorage.getItem('savedArticles')) {
            this.savedArticles = JSON.parse(window.localStorage.getItem('savedArticles'));
        }
    },
    methods: {
        deleteArticle: function (index) {
            this.savedArticles.splice(index, 1)
            window.localStorage.setItem('savedArticles', JSON.stringify(this.savedArticles))
        }
    }

}
</script>

<style lang="scss">
    .saved-articles {
        .back-button {
            position : absolute;
            top : 2rem;
            left : 2rem;
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
        .info-message {
            position : absolute;
            top : 45%;
            width : 100%;
        }
        .un-displayed {
            visibility: hidden;
            display : none;
        }
        .list-articles {
            background: #ffffff;
            position : absolute;
            top : 15vh;
            left : 0;
            width : 100vw;
            height : 85vh;
            border-right : 10px solid #f1f3f6;
            border-left : 10px solid #f1f3f6;
            overflow-y: scroll;
            .one-article {
                height : 5rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                border-bottom : 3px solid #f1f3f6;
                a {
                    padding-left: 1rem;
                    padding-top : 1.7rem;
                    color: #2c3e50;
                    height : 100%;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow : ellipsis;
                    width : 80vw;
                    text-decoration: none;
                    &:visited {
                        color :#b4b7b9;
                    }
                }
                button {
                    background: #FF6961;
                    height : 100%;
                    padding-right : 1.7rem;
                    padding-left : 1.7rem;
                    border : none;
                    color : white;
                    font-size : 1.5rem;
                    cursor: pointer;
                }
            }
        }
    }

</style>