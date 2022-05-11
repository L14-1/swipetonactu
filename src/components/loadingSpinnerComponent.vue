<template>
  <div class="loading-spinner">
    <div class="card-loader" >
      <div class="inside-card-loader">
        <div class="img-loader bg-loader"></div>
        <div class="text-loader bg-loader"></div>
        <div class="text-loader bg-loader"></div>
        <div class="logo-loader bg-loader"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loadingSpinner',
  
}
</script>


<style scoped lang="scss">

.loading-spinner {
    z-index : 1000;
    position: absolute;
    width : 100vw;
    height : 100vh;
    top : 0;
    left : 0;
    display: flex;
    justify-content: center;
    .card-loader {
        position : absolute;
        top : 14.6vh;
        .inside-card-loader {
            overflow: hidden;
            display : flex;
            flex-direction: column;
            background: white;
            width : 80vw;
            max-width : 22rem;
            height : 51vh;
            max-height : 50rem;
            border-radius : 2rem;
            .img-loader {
                width : 100%;
                height : 60%;
            }
            .text-loader {
                width : 80%;
                height : 1rem;
                border-radius: 2rem;
                margin-top : 2rem;
                margin-right: auto;
                margin-left: auto;
            }
            .logo-loader {
                width : 2.6rem;
                height: 2.6rem;
                border-radius: 50%;
                position : absolute;
                bottom : 0.2rem;
                left : calc(50% - 1.3rem);
            }
        }
    }
    .bg-loader {
        animation-duration: 1.8s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-name: placeHolderShimmer;
        animation-timing-function: linear;
        background: #f6f7f8;
        background: linear-gradient(to right, #fafafa 8%, #f4f4f4 38%, #fafafa 54%);
        background-size: 1000px 640px;
    }
    @keyframes placeHolderShimmer{
    0%{
        background-position: -468px 0
    }
    100%{
        background-position: 468px 0
    }
}
}

</style>
