let indexDB
export default {
    async fetchDB() {
        return new Promise((resolve, reject) => {
            if (indexDB) {
                return resolve(indexDB)
            }
            let request = window.indexedDB.open('F1_FAVORITES', 1)
            request.onerror = event => {
                alert(event)
                reject(event)
            }
            request.onsuccess = event => {
                indexDB = event.target.result
                resolve(indexDB)
            }
            request.onupgradeneeded = event => {
                let db = event.target.result
                db.createObjectStore("favorites", {autoIncrement: true, keyPath: 'id'})
            }
        })
    },
    async getData() {
        let db = await this.fetchDB()
        return new Promise(resolve => {
            let transact = db.transaction(['favorites'], 'readonly')
            transact.oncomplete = () => {
                resolve(favorites)
            }
            let store = transact.objectStore('favorites')
            let favorites = []

            store.openCursor().onsuccess = event => {
                let cursor = event.target.result
                if (cursor) {
                    favorites.push(cursor.value)
                    cursor.continue()
                }
            }
        })
    },

    async setFavorite(favorite) {
        let db = await this.fetchDB()
        return new Promise(resolve => {
            let transact = db.transaction(['favorites'], "readwrite")
            transact.oncomplete = () => {
                resolve()
            }
            let store = transact.objectStore('favorites')
            store.put(favorite)
        })
    },
    async removeData(favorite){
        let db = await this.fetchDB()
        return new Promise(resolve => {
            let transact = db.transaction(['favorites'], "readwrite")
            transact.oncomplete = () => {
                resolve()
            }
            let store = db.objectStore('favorites')
            store.delete(favorite.id)
        })
    }
}