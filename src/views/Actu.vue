<template>
  <div class="actu">
    <articlesDisplayer />
    <loadingSpinner v-if="status == 'loading'"/>
  </div>
</template>

<script>

import { mapState } from "vuex";
import articlesDisplayer from '@/components/articlesDisplayerComponent.vue'
import loadingSpinner from '@/components/loadingSpinnerComponent.vue'

export default {
  name: 'Actu',
  computed: {
    ...mapState({
      status: "status"
    }),
  },
  mounted() {
    let seenArticles = JSON.parse(window.localStorage.getItem('seenArticles'))
    console.log(!seenArticles)
    if (!seenArticles) {
      window.localStorage.setItem('seenArticles', JSON.stringify([]))
    }
  },
  components: {
    articlesDisplayer,
    loadingSpinner,
  },
}
</script>