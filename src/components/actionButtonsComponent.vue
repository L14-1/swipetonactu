<template>
    <div class="action-buttons">
        <button @click="dislike()" class="button button-style dislike-button"><font-awesome-icon icon="fa-solid fa-xmark" /></button>
        <button @click="like()" class="button button-style like-button"><font-awesome-icon icon="fa-solid fa-heart" /></button>
    </div>
</template>

<script>
export default {
  name: 'actionButtons',
  data : function() {
      return {
          actuArr: [],
          seenArticles: [],
          savedArticles: [],
        }
  },
  mounted() {
      this.actuArr = this.$parent.$el.children[1].children;
      this.index = this.$parent.$el.children[1].children.length - 1;
  },
  methods: {
    like: function () {

        if (window.localStorage.getItem('seenArticles')) {
            this.seenArticles = JSON.parse(window.localStorage.getItem('seenArticles'));
        }
        if (window.localStorage.getItem('savedArticles')) {
            this.savedArticles = JSON.parse(window.localStorage.getItem('savedArticles'));
        }

        let card = this.$parent.$el.children[1].querySelectorAll('.unseen-article');
        let index = card.length - 1;
        let title = card[index].children[0].children[1].innerText;
        let url = card[index].children[0].children[4].innerText
        card[index].classList.add('liked-card')
        setTimeout(() => {
            card[index].classList.add('un-displayed')
            card[index].classList.remove('unseen-article')
            this.seenArticles.push(card[index].id);
            window.localStorage.setItem('seenArticles', JSON.stringify(this.seenArticles))
            this.savedArticles.push({
                title,
                url,
            });
        window.localStorage.setItem('savedArticles', JSON.stringify(this.savedArticles))
        }, "400")
        
    },
    dislike: function () {

        if (window.localStorage.getItem('seenArticles')) {
            this.seenArticles = JSON.parse(window.localStorage.getItem('seenArticles'));
        }

        let card = this.$parent.$el.children[1].querySelectorAll('.unseen-article');
        let index = card.length - 1;

        card[index].classList.add('disliked-card')
                setTimeout(() => {
                    card[index].classList.add('un-displayed')
                    card[index].classList.remove('unseen-article')
                    this.seenArticles.push(card[index].id);
                    window.localStorage.setItem('seenArticles', JSON.stringify(this.seenArticles))
                }, "400")
    },
  }
  
}
</script>


<style lang="scss">

.action-buttons {
    position : absolute;
    bottom : 2rem;
    width : 100vw;
    display: flex;
    justify-content: center;
    .button-style {
        width : 4.5rem;
        height: 4.5rem;
        margin-inline : 2rem;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .like-button {
        font-size : 2rem;
        color : #77DD77;
    }
    .dislike-button {
        font-size: 2.5rem;
        color : #FF6961;
    }
}


</style>