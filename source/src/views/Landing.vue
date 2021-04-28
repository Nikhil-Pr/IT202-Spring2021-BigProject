<template>
  <v-container class="landing" fluid fill-height style="max-height: 100vh">
    <v-layout align-center justify-center column>
      <div class="display-3 font-weight-bold white--text text-xl-center">
        Formula Stats
      </div>
      <div class="display-1 font-weight-bold white--text">
        Quick Formula One information from the past and present
      </div>
      <v-btn @click="routeTo('historic')" dark class="mt-5" rounded elevation="6" x-large>Historic Season Data
      </v-btn>
      <v-btn @click="routeTo('current')" dark class="mt-5" rounded elevation="6" x-large>Current Season Data
      </v-btn>
      <v-btn @click="routeTo('favorites')" dark class="mt-5" rounded elevation="6" x-large>Favorite Seasons
      </v-btn>
      <v-btn @click="routeTo('upcoming')" dark class="mt-5" rounded elevation="6" x-large>Upcoming GP Information
      </v-btn>


    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: "Landing",
  methods: {
    routeTo(route) {
      navigator.vibrate(50)
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
.landing {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
  url("../assets/landingbg.jpeg");
  background-size: cover;
  width: 100%;
  height: 100%;

}
</style>