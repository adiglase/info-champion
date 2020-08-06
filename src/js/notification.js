const showNotifFavTeam = (team, status) => {
  const savedNotif = `${team.name} telah ditambahkan ke daftar tim favorit`;
  const deletedNotif = `${team.name} telah dihapus dari daftar tim favorit`;
  const title = 'Notifikasi';
  const options = {
    body: status === 'saved' ? savedNotif : deletedNotif,
    icon: './img/icons/apple touch icon 180x180.png',
  };
  if (Notification.permission === 'granted') {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.showNotification(title, options);
    });
  } else {
    console.error('FItur notifikasi tidak diijinkan.');
  }
};

export { showNotifFavTeam };
