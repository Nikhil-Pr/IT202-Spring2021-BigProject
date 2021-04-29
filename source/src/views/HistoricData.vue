<template>
  <v-container class="historic" fluid fill-height>
    <v-layout align-center column>
      <div class="display-1 font-weight-bold white--text">
        Historic Data
      </div>
      <div class="display-1 font-weight-bold white--text">
        Enter a year between 1950 - 2020
      </div>
      <div>
        <v-card>
          <v-text-field :rules="searchRules" append-outer-icon="mdi-magnify" @keydown.enter="runSearch" type="number" class="ml-2 mr-2"
                        v-model.number="query"
                        @click:append-outer="runSearch"></v-text-field>
        </v-card>
      </div>
      <div v-show="loaded" class="mt-3 mb-3">
        <v-btn large rounded dark @click="saveFav">Add To Favorites</v-btn>
      </div>
      <div v-show="loaded">
        <v-card dark>
          <v-text-field
              v-model="tableSearch"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
              class="ml-3 mr-3"
          ></v-text-field>
          <v-data-table :search="tableSearch" dense dark :headers="headers" :items="driverStandings"
                        :items-per-page="10" class=" mt-5 elevation-2">
            <template #item.full_name="{ item }">{{ item.Driver.givenName }} {{ item.Driver.familyName }}</template>
          </v-data-table>
        </v-card>
      </div>
      <div v-show="loaded" class="mt-5 display-1 font-weight-bold white--text">
        Driver Wins
      </div>
      <div v-show="loaded" style="width: 90%">
        <apexchart ref="winChart" height="250" type="bar" :options="options" :series="winSeries"></apexchart>
      </div>
      <div v-show="loaded" class="mt-5 display-1 font-weight-bold white--text">
        Driver Points
      </div>
      <div v-show="loaded" style="width: 90%">
        <apexchart ref="pointChart" height="250" type="bar" :options="options" :series="pointSeries"></apexchart>
      </div>
      <v-snackbar :timeout="500" v-model="snackbar">Season added to favorites</v-snackbar>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  name: "HistoricData",
  data: () => ({
    loaded: false,
    query: '',
    tableSearch: '',
    snackbar: false,
    favInfo: {
      year: null,
      winner: null
    },
    searchRules: [
      v => v >= 1950 && v < 2021 || 'Year out of range!'
    ],
    driverStandings: [],
    headers: [
      {
        text: 'Position',
        sortable: true,

        value: 'position'
      },
      {
        text: 'Driver',
        sortable: false,
        value: `full_name`
      },
      {
        text: 'Points',
        sortable: false,
        filterable: false,
        value: 'points'
      },
      {
        text: 'Wins',
        sortable: true,
        filterable: false,
        value: 'wins'
      },
      {
        text: 'Constructor',
        sortable: false,
        value: 'Constructors[0].name'
      }
    ],

    options: {
      chart: {
        background: '#fff',
        width: '100%'
      },
      xaxis: {
        categories: []
      },
    },

    pointSeries: [],
    winSeries: [],

  }),
  methods: {
    runSearch() {
      if (this.query >= 1950 && this.query < 2021) {
        this.loaded = false
        axios.get(`https://ergast.com/api/f1/${this.query}/driverStandings.json`)
            .then(response => {
              this.driverStandings = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
              this.$refs.winChart.updateSeries([{
                name: 'win series',
                data: response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings.map(ele => parseInt(ele.wins))
              }])

              this.options = {
                ...this.options,
                ...{
                  xaxis: {
                    categories: response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings.map(ele => ele.Driver.familyName)
                  }
                }
              }
              this.$refs.pointChart.updateSeries([{
                name: 'point series',
                data: response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings.map(ele => parseInt(ele.points))
              }])
              this.favInfo.winner = this.driverStandings[0].Driver.familyName
              this.favInfo.year = this.query
              this.loaded = true
            }).catch(alert)
      }
    },
    async saveFav() {
      navigator.vibrate([100, 50, 100])
      await this.$store.dispatch('saveFavorite', this.favInfo)
      await this.$store.dispatch('getFavorites')
      this.snackbar = true
    }
  }
}
</script>

<style scoped>
.historic {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
  url("../assets/historicbg.jpeg");
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>