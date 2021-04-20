<template>
  <v-app>
    <v-content transition="slide-x-transition">
      <NavMenu></NavMenu>
      <router-view></router-view>
    </v-content>
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
