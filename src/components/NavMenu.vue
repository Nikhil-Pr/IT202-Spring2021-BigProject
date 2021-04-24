<template>
  <span v-if="this.$route.path !== '/'">
      <v-navigation-drawer  bottom app v-model="drawer" dark disable-resize-watcher>
    <v-list>
      <v-list-item link>
        <v-list-item-title>Current Season</v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-title>Historic Data</v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-title>Race Schedule</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-subtitle class="mt-16">Nikhil Prasad (nprasa6) - IT202 Big Project</v-list-item-subtitle>
      </v-list-item>
    </v-list>

  </v-navigation-drawer>


  <v-app-bar app dark>
    <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-spacer class="hidden-md-and-up"></v-spacer>
    <v-toolbar-title>Formula Stats</v-toolbar-title>
    <v-btn dark class="ml-3 hidden-sm-and-down" >Current Season</v-btn>
    <v-btn dark class="ml-3 hidden-sm-and-down" >Historic Data</v-btn>
  </v-app-bar>
  </span>
</template>

<script>
export default {
  name: "NavMenu",
  data: () => ({
    drawer: false,
  }),
  watch: {
    group() {
      this.drawer = false
    }
  },
  computed:{
    currentRoute(){
      console.log(this.$route.name)
      return this.$route.name
    }
  },
}

</script>

<style scoped>

</style>