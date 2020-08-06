import './css/style.css';
import { getTeamDetail } from './js/api';
import {
  buttonToggle,
  saveToFav,
  deleteFromFav,
} from './js/indexed-db/db-controller';
import { showNotifFavTeam } from './js/notification';

document.addEventListener('DOMContentLoaded', () => {
  getTeamDetail();

  const saveButton = document.querySelector('#save-button');
  const deleteButton = document.querySelector('#delete-button');
  const urlParams = new URLSearchParams(window.location.search);
  const teamItem = getTeamDetail();
  const id = Number(urlParams.get('id'));

  buttonToggle(id)
    .then(() => {
      // kalo fav team
      saveButton.classList.add('hide');
      deleteButton.classList.remove('hide');
    })
    .catch(() => {
      // kalo bukan fav team
      saveButton.classList.remove('hide');
      deleteButton.classList.add('hide');
    });

  saveButton.addEventListener('click', () => {
    teamItem
      .then((team) => {
        saveToFav(team);
        showNotifFavTeam(team, 'saved');
      })
      .catch((err) => {
        console.log(err);
      });
    saveButton.classList.add('hide');
    deleteButton.classList.remove('hide');
  });

  deleteButton.addEventListener('click', () => {
    teamItem
      .then((team) => {
        deleteFromFav(team.id);
        showNotifFavTeam(team, 'deleted');
      })
      .catch((err) => {
        console.log(err);
      });
    saveButton.classList.remove('hide');
    deleteButton.classList.add('hide');
  });
});
