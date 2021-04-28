import Vue from 'vue'
import Vuex from 'vuex'

import idb from '@/api/indexDB';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        favorites:[]
    },
    mutations: {

    },
    actions: {
        async deleteFavorite(context, favorite) {
            await idb.deleteFavorite(favorite);
        },
        async getFavorites(context) {
            context.state.favorites = [];
            let favorites = await idb.getFavorites();
            favorites.forEach(f => {
                context.state.favorites.push(f);
            });
        },
        async saveFavorite(context, favorite) {
            await idb.addFavorite(favorite)
        }
    }
})