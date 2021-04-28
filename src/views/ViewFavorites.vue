<template>
  <v-container>
    <v-container class="display-1 font-weight-bold black--text  align-center text-center">
      Your Favorite Seasons
    </v-container>
    <v-row>
      <v-col cols="4" v-for="(favorite,idx) in favorites" :key="idx">
        <FavoriteCard :favorite="favorite" @delete="deleteFavorite" />
      </v-col>
    </v-row>
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
      await this.$store.dispatch('deleteFavorite', favorite)
      this.$store.dispatch('getFavorites')
    }
  }
}
</script>

<style scoped>

</style>