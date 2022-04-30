<template>
  <div class="about">
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
      status: "status",
      user: "userInfos",
    }),
  },
  components: {
    articlesDisplayer,
    loadingSpinner,
  },
}
</script>