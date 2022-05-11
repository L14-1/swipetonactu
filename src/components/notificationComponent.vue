<template>
  <div class="notification-pop">
      <a :href="likedArticle[0].url" target="_blank">
          <div>
            <p>{{ likedArticle[0].title }}</p>
          </div>
          <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" />
      </a>
  </div>
</template>

<script>

import { mapState } from "vuex";

export default {
    name: "notification",
    computed: {
    ...mapState({
      likedArticle: "likedArticle",
    }),
  },

}
</script>

<style scoped lang="scss" >

@keyframes notificationAppears{
    0%{
        opacity : 0;
        transform: translateY(0);
    }
    15%{
        opacity : 1;
        transform: translateY(6rem);
    }
    90%{
        opacity : 1;
        transform: translateY(6rem);
    }
    100%{
        opacity : 0;
        transform: translateY(0rem);
    }
}
.notification-pop {
    z-index : 25;
    position : absolute;
    top : -5rem;
    left : 3vw;
    width : 94vw;
    height : 5rem;
    background : white;
    border-radius: 1rem;
    padding : 0 2rem;
    display: flex;
    align-items: center;
    a {
        cursor : pointer;
        all : unset;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width : 100%;
        height : 100%;
        div {
            height: fit-content;
            width : 85%;
            p {
                white-space: nowrap;
                overflow: hidden;
                text-overflow : ellipsis;
            }
        }
    }
    animation: notificationAppears 4s ease-out;
}
</style>