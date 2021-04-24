<template>
  <span>
      <v-navigation-drawer bottom app v-model="drawer" dark disable-resize-watcher>
    <v-list>
      <v-list-item link>
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-title>Authorize</v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-title>My Stats</v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-title>My Card</v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-subtitle class="mt-16">Nikhil Prasad (nprasa6) - IT202 Big Project</v-list-item-subtitle>
      </v-list-item>
    </v-list>

  </v-navigation-drawer>


  <v-toolbar app dark>
    <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-spacer class="hidden-md-and-up"></v-spacer>
    <v-toolbar-title style="cursor: pointer">Statify</v-toolbar-title>
    <v-btn color="success" class="ml-3 hidden-sm-and-down" flat>Authorize</v-btn>
    <v-btn color="success" class="ml-3 hidden-sm-and-down" flat>My Stats</v-btn>
    <v-btn color="success" class="ml-3 hidden-sm-and-down" flat>My Card</v-btn>
  </v-toolbar>
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
  }
}

</script>

<style scoped>

</style>