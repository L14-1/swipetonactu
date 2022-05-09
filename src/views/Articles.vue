<template>
  <div class="articles">
    <savedArticlesComponent />
  </div>
</template>

<script>


import savedArticlesComponent from '@/components/savedArticlesComponent.vue'


export default {
  name: 'Settings',
  components: {
    savedArticlesComponent,
  },
}
</script>