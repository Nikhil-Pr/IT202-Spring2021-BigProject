<template>
  <v-container class="trackweather" fluid fill-height>
    <v-layout align-center column>
      <div class="mt-5 display-1 font-weight-bold white--text">
        The next race is:
      </div>
      <div class="display-3 font-weight-bold white--text">
        {{ nextGP.raceName }}
      </div>
      <div class="display-1 font-weight-bold white--text">
        on
      </div>
      <div class="display-2 font-weight-bold white--text">
        {{ nextGP.date }}
      </div>
      <div class="mt-5 display-2 font-weight-bold white--text">
        The current weather at {{ nextGP.Circuit.Location.locality }} is
      </div>
      <div class="mt-2 display-2 font-weight-bold white--text">
        {{weatherInfo.condition}} with a temp of {{weatherInfo.temp}} F
      </div>
      <div class="mt-2 display-1 font-weight-bold white--text">
        (Feels like {{weatherInfo.feelsLike}} F)
      </div>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "TrackWeather",
  data: () => ({
    nextGP: {},
    weatherInfo: {}
  }),
  created() {
    axios.get('https://ergast.com/api/f1/current.json')
        .then(response => {
          this.nextGP = response.data.MRData.RaceTable.Races.find(race => Date.parse(race.date) > new Date())
          axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.nextGP.Circuit.circuitId}&units=imperial&appid=887ea5ce620056625ebefaba891e9fba`)
              .then(response => {
                this.weatherInfo = {
                  condition: response.data.weather[0].main,
                  temp: response.data.main.temp,
                  feelsLike: response.data.main.feels_like
                }
              })
        }).catch(alert)
  }
}
</script>

<style scoped>
.trackweather {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
  url("../assets/trackweatherbg.jpeg");
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>