<template>
  <v-card dark>
    <v-card-title>
      {{ favorite.year }}
    </v-card-title>
    <v-card-text>
      <h3>Winner: {{ favorite.winner }}</h3>
    </v-card-text>
    <v-card-actions>
      <v-btn color="red" @click="$emit('delete', favorite)">Remove</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "FavoriteCard",
  props: ['favorite'],
  data: () => ({}),
  methods: {}
}
</script>

<style scoped>

</style>