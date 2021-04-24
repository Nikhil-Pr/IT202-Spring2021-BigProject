<template>
<v-container class="current" fluid fill-height>
  <v-layout align-center column>
    <div class="display-1 font-weight-bold white--text" >
      Current Season Statistics
    </div>
    <div>

    </div>
  </v-layout>
</v-container>
</template>

<script>
export default {
  name: "CurrentSeason",
  data: () => ({
    DriverStandings:[]
  }),
  created() {

  },
  methods:{
    getStandings(){

    }
  }

}
</script>

<style scoped>
.current{
  background-image:
      linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),
      url("../assets/currentbg.jpeg");
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>