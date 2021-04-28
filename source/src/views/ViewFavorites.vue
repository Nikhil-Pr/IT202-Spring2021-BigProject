<template>
  <v-container class="favorites" fluid>
    <v-layout align-center column>
    <v-container class="display-1 font-weight-bold white--text  align-center text-center">
      Your Favorite Seasons
    </v-container>
      <v-col style=" min-width: 30% ;max-width: 60%" v-for="(favorite,idx) in favorites" :key="idx">
        <FavoriteCard :favorite="favorite" @delete="deleteFavorite" />
      </v-col>
    </v-layout>
  </v-container>
</template>

<script>
import FavoriteCard from "@/components/FavoriteCard";
export default {
  name: "ViewFavorites",
  components: {FavoriteCard},
  computed:{
    favorites(){
      return this.$store.state.favorites
    }
  },
  created(){
    this.$store.dispatch('getFavorites')
  },
  methods:{
    async deleteFavorite(favorite){
      navigator.vibrate(200)
      await this.$store.dispatch('deleteFavorite', favorite)
      this.$store.dispatch('getFavorites')
    }
  }
}
</script>

<style scoped>
.favorites{
  background-image:
      linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),
      url("../assets/favoritesbg.jpeg");
  background-size: cover;
  width: 100%;
  height: 100%;

}
</style>