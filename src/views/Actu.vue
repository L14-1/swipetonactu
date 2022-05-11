<template>
  <div class="actu">
    <headerComponent />
    <articlesDisplayer />
    <actionButtons />
    <loadingSpinner v-if="status == 'loading'"/>
    <notification v-if="notification == true"/>
  </div>
</template>

<script>

import { mapState } from "vuex";
import articlesDisplayer from '@/components/articlesDisplayerComponent.vue'
import loadingSpinner from '@/components/loadingSpinnerComponent.vue'
import headerComponent from '@/components/headerComponent.vue'
import actionButtons from '@/components/actionButtonsComponent.vue'
import notification from '@/components/notificationComponent.vue'

export default {
  name: 'Actu',
  computed: {
    ...mapState({
      status: "status",
      notification: "notification"
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
    actionButtons,
    notification,
  },
}
</script>
