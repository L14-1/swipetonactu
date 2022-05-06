<template>
  <div class="actu">
    <headerComponent />
    <articlesDisplayer />
    <actionButtons />
    <loadingSpinner v-if="status == 'loading'"/>
  </div>
</template>

<script>

import { mapState } from "vuex";
import articlesDisplayer from '@/components/articlesDisplayerComponent.vue'
import loadingSpinner from '@/components/loadingSpinnerComponent.vue'
import headerComponent from '@/components/headerComponent.vue'
import actionButtons from '@/components/actionButtonsComponent.vue'

export default {
  name: 'Actu',
  computed: {
    ...mapState({
      status: "status"
    }),
  },
  mounted() {
    let seenArticles = JSON.parse(window.localStorage.getItem('seenArticles'))
    if (!seenArticles) {
      window.localStorage.setItem('seenArticles', JSON.stringify([]))
    }
  },
  components: {
    articlesDisplayer,
    loadingSpinner,
    headerComponent,
    actionButtons
  },
}
</script>
