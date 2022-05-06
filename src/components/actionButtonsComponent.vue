<template>
    <div class="action-buttons">
        <button class="button button-style dislike-button"><font-awesome-icon icon="fa-solid fa-xmark" /></button>
        <a class="button button-style like-button"><font-awesome-icon icon="fa-solid fa-heart" /></a>
    </div>
</template>

<script>
export default {
  name: 'actionButtons',
  
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