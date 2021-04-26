<template>
<v-container class="current" fluid fill-height>
  <v-layout align-center column>
    <div class="display-1 font-weight-bold white--text" >
      Current Season Statistics
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
      <apexchart height="250" v-if="loaded" type="bar" :options="options" :series="winSeries"></apexchart>
    </div>
    <div class="mt-5 display-1 font-weight-bold white--text">
      Driver Points
    </div>
    <div style="width: 90%">
      <apexchart height="250" v-if="loaded" type="bar" :options="options" :series="pointSeries"></apexchart>
    </div>
  </v-layout>
</v-container>
</template>

<script>
import axios from 'axios'
export default {
  name: "CurrentSeason",
  data: () => ({
    driverStandings:[],
    loaded: false,
    tableSearch: '',
    options:{
      chart:{
        background: '#fff',
          width: '100%'
      },
      xaxis:{
        categories:[],
      },
    },

    pointSeries:[{
      name: 'point series',
      data:[]
    }],
    winSeries: [{
      name: 'win series',
      data: []
    }],
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
    ]
  }),
  created() {
    this.getStandings()
  },
  methods:{
    getStandings(){
      axios.get('http://ergast.com/api/f1/current/driverStandings.json')
      .then(response => {
        this.driverStandings = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
        this.winSeries[0].data = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings.map(ele => parseInt(ele.wins))
        this.pointSeries[0].data = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings.map(ele => parseInt(ele.points))
        this.options.xaxis.categories = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings.map(ele => ele.Driver.code)
        console.log(this.winSeries.data)
        this.loaded = true
      })
      .catch(alert)
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