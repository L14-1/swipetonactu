<template>
  <div class="home">
    <themeChoice />
  </div>
</template>

<script>
// @ is an alias to /src
import themeChoice from '@/components/themeChoiceComponent.vue'

export default {
  name: 'Home',
  mounted: function () {
    let selectedThemes = JSON.parse(window.localStorage.getItem('selectedThemes'))
    if (selectedThemes.length != 0) {
      this.$router.push("/about");
      return;
    }
  },
  components: {
    themeChoice,
  }
}
</script>
