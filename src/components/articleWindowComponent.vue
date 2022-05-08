<template>
  <div class="article-window" v-if="this.articleWindow">
        <div class="top-part">
            <button @click="closeWindow()" class="button exit-button"><font-awesome-icon icon="fa-solid fa-xmark" /></button>
            <h1><span class="swipe">Swipe</span> <span class="news">news</span></h1>
        </div>
        <div class="url-displayer">
            <iframe :src="this.url" width="100%" height="100%">
                <p>Problème lors de l'ouverture de l'article, rééssayez plus tard ... 😞</p>
            </iframe>
        </div>
  </div>
</template>

<script>

import { mapState } from "vuex";

export default {
    name: 'articleWindow',
    computed: {
        ...mapState({
        url: "articleUrl",
        articleWindow: "articleWindow",
    }),
    },
    methods: {
        closeWindow: function () {
            this.$store.commit('actionWindow');
            console.log(this.$store.state.articleWindow)
        }
    }

}
</script>

<style lang="scss">

@keyframes slideUp {
    to {
        bottom : 0;
    }
}

.article-window {
    position : absolute;
    bottom : -100vh;
    left : 0;
    width: 100vw;
    height : 100%;
    border-top-left-radius : 0.5rem;
    border-top-right-radius : 0.5rem;
    background: #f1f3f6;
    animation: slideUp 1s ease-out forwards;
    .top-part {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height : 15%;
        padding: 0 2rem;
        .exit-button {
            width : 3rem;
            height: 3rem;
            border-radius: 50%;
            display: flex;
            align-items : center;
            justify-content: center;
            color : #2c3e50;
        }
    }
    .url-displayer {
        height : 85%;
    }
}

</style>