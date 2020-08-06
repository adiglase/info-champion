import idb from './idb';
import { renderFavTeams } from '../render-fav-teams';

const dbName = 'Infochampion-db';
const objectStoreName = 'favorite-teams';

const dbPromised = idb.open(dbName, 1, (upgradeDb) => {
  let favoriteTeams = upgradeDb.createObjectStore(objectStoreName, {
    keyPath: 'id',
  });
  favoriteTeams.createIndex('name', 'name', {
    unique: true,
  });
});

const buttonToggle = (id) => {
  return new Promise((resolve, reject) => {
    dbPromised
      .then((db) => {
        const tx = db.transaction(objectStoreName, 'readonly');
        const store = tx.objectStore(objectStoreName);
        return store.get(id);
      })
      .then((data) => {
        if (data !== undefined) {
          console.log('undefine bro');
          resolve('is fav');
        } else {
          console.log('gak undefine');
          reject('not fav');
        }
      });
  });
};

const saveToFav = (team) => {
  dbPromised.then((db) => {
    const tx = db.transaction(objectStoreName, 'readwrite');
    const store = tx.objectStore(objectStoreName);
    store.put(team);

    return tx.complete;
  });
};

const deleteFromFav = (team) => {
  dbPromised.then((db) => {
    const tx = db.transaction(objectStoreName, 'readwrite');
    const store = tx.objectStore(objectStoreName);
    store.delete(team);

    return tx.complete;
  });
};

const getFavTeam = () => {
  dbPromised
    .then((db) => {
      const tx = db.transaction(objectStoreName, 'readonly');
      const store = tx.objectStore(objectStoreName);
      return store.getAll();
    })
    .then((teams) => {
      renderFavTeams(teams);
    });
};

export { buttonToggle, saveToFav, deleteFromFav, getFavTeam };
