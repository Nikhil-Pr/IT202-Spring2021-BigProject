<template>
  <v-container class="historic" fluid fill-height>
    <v-layout align-center column>
      <div class="display-1 font-weight-bold white--text" >
        Historic Data
      </div>
      <div class="display-1 font-weight-bold white--text">
        Enter a year between 1950 - 2020
      </div>
      <div>
        <v-card>
        <v-text-field :rules="searchRules" @keydown.enter="runSearch" type="number" class="ml-2 mr-2" v-model.number="query"
                      @click:append-outer="runSearch"></v-text-field>
        </v-card>
      </div>
      <div>
        <v-card dark>
          <v-text-field
              v-model="tableSearch"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
              class="ml-3 mr-3"
          ></v-text-field>
          <v-data-table  :search="tableSearch" dense dark :headers="headers" :items="driverStandings" :items-per-page="10" class=" mt-5 elevation-2">
            <template #item.full_name="{ item }">{{ item.Driver.givenName }} {{ item.Driver.familyName }}</template>
          </v-data-table>
        </v-card>
      </div>
      <div class="mt-5 display-1 font-weight-bold white--text">
        Driver Wins
      </div>
      <div style="width: 90%">
        <apexchart ref="winChart" height="250"  type="bar" :options="options" :series="winSeries"></apexchart>
      </div>
      <div  class="mt-5 display-1 font-weight-bold white--text">
        Driver Points
      </div>
      <div style="width: 90%">
        <apexchart ref="pointChart" height="250" type="bar" :options="options" :series="pointSeries"></apexchart>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  name: "HistoricData",
  data: () => ({
    query: '',
    searchRules: [
        v => v >= 1950 && v < 2021 || 'Year out of range!'
    ],
    driverStandings: [],
    headers:[
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
        filterable:false,
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
        categories: ['Data will appear here when a search is made'],
      },
    },

    pointSeries: [],
    winSeries: [],

  }),
  methods: {
    runSearch() {
        console.log(`http://ergast.com/api/f1/${this.query}/driverStandings.json`)
        axios.get(`http://ergast.com/api/f1/${this.query}/driverStandings.json`)
            .then(response => {
              this.driverStandings = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
              this.$refs.winChart.updateSeries([{
                name:'win series',
                data: response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings.map(ele => parseInt(ele.wins))
              }])
              this.$refs.winChart.updateOptions([{
                xaxis: {
                  categories: response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings.map(ele => ele.Driver.driverId)
                }
              }])
              this.$refs.pointChart.updateSeries([{
                name: 'point series',
                data: response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings.map(ele => parseInt(ele.points))
              }])
            }).catch(alert)
    }
  },
}
</script>

<style scoped>
.historic{
  background-image:
      linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),
      url("../assets/historicbg.jpeg");
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>