<template>
    <div class="action-buttons">
        <button @click="like" class="button button-style dislike-button"><font-awesome-icon icon="fa-solid fa-xmark" /></button>
        <button class="button button-style like-button"><font-awesome-icon icon="fa-solid fa-heart" /></button>
    </div>
</template>

<script>
export default {
  name: 'actionButtons',
  data : function() {
      return {
          index: 0,
          actuArr: [],
        }
  },
  mounted() {
      console.log(this.$parent.$el.children[1].children)
      this.actuArr = this.$parent.$el.children[1].children;
      this.index = this.$parent.$el.children[1].children.length - 1;
  },
  methods: {
      like: function () {
          console.log(this.$parent.$el.children[1].children[this.index])
          this.index--;
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