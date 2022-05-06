<template>
    <div class="settings">
        <router-link to="/actu" class="button back-button"><font-awesome-icon icon="fa-solid fa-arrow-left" /></router-link>
        <h1><span class="swipe">Swipe</span> <span class="news">news</span></h1>
        <div class="main-buttons">
            <button class="button big-button"><font-awesome-icon icon="fa-solid fa-circle-info" />À propos</button>
            <button @click="deletehistory()" class="button big-button"><font-awesome-icon icon="fa-solid fa-trash" />Supprimer l'historique</button>
            <button class="button big-button"><font-awesome-icon icon="fa-solid fa-envelope" />Contactez moi !</button>
        </div>
        <p class="credits">Nicolas Maitre - 2022</p>
    </div>
</template>

<script>
export default {
    methods: {
        deletehistory : function () {
            window.localStorage.removeItem('selectedSources')
            window.localStorage.removeItem('selectedThemes')
            window.localStorage.removeItem('seenArticles')
            setTimeout(() => {
            this.$router.push('/');
            }, "200")
        }
    }
}
</script>


<style lang="scss">
    .settings {
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
        .main-buttons {
            margin-top : 10rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            width : 100vw;
        }
        .big-button {
            position: relative;
            width : 90vw;
            padding : 1rem 0 1rem 30vw;
            color : #2c3e50;
            font-size : 1rem;
            text-align: left;
            margin-bottom : 1rem;
            .fa-trash, .fa-envelope, .fa-circle-info {
                position : absolute;
                left : 1.5rem;
            }
        }
        .credits {
            position: absolute;
            bottom : 0.5rem;
            width : 100vw;
            text-align: center;
        }
    }
</style>