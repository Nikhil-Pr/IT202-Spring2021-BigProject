let DB;
export default {
    async getDB() {
        return new Promise((resolve, reject) => {
            if (DB) {
                return resolve(DB)
            }
            let req = window.indexedDB.open('Favorites', 1)
            req.onerror = ev => {
                reject(`error ${ev}`)
            }
            req.onsuccess = ev => {
                DB = ev.target.result
                resolve(DB)
            }
            req.onupgradeneeded = ev => {
                let db = ev.target.result
                db.createObjectStore("Favorites", {autoIncrement: true, keyPath: 'id'})
            }
        })
    },
    async addFavorite(favorite) {
        let db = await this.getDB()
        return new Promise(resolve => {
            let transaction = db.transaction(['Favorites'], 'readwrite')
            transaction.oncomplete = () => {
                resolve()
            }
            let store = transaction.objectStore('Favorites')
            store.put(favorite)
        })
    },
    async getFavorites() {
        let db = await this.getDB()
        return new Promise(resolve => {
            let transaction = db.transaction(['Favorites'], 'readonly')
            transaction.oncomplete = () => {
                resolve(Favorites)
            }
            let store = transaction.objectStore('Favorites')
            let Favorites = []
            store.openCursor().onsuccess = ev => {
                let cursor = ev.target.result
                if(cursor){
                    Favorites.push(cursor.value)
                    cursor.continue()
                }
            }
        })
    },
    async deleteFavorite(favorite){
        let db = await this.getDB()
        return new Promise(resolve => {
            let transaction = db.transaction(['Favorites'],'readwrite');
            transaction.oncomplete = () => {
                resolve();
            };

            let store = transaction.objectStore('Favorites');
            store.delete(favorite.id);
        })
    }

}