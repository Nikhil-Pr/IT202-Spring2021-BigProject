<template>
  <v-app>
    <v-content transition="slide-x-transition">

      <router-view>
        <Landing></Landing>
      </router-view>
    </v-content>
  </v-app>
</template>

<script>
import Landing from "./components/Landing";

export default {
  name: 'App',

  components: {
    Landing
  },

  data: () => ({
    //
  }),
};
</script>
