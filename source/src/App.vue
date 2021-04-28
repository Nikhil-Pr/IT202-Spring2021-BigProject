<template>
  <v-app>
    <NavMenu></NavMenu>
    <v-main transition="slide-x-transition">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavMenu from "./components/NavMenu";
export default {
  name: 'App',
  components: {
    NavMenu

  },
  data: () => ({
    //
  }),

};
</script>