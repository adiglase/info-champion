import { renderMatchResult } from './render-match-result';
import { renderSchedule } from './render-schedule';
import { renderStanding } from './render-standing';
import { renderTeamDetail } from './render-team-detail';

const API_KEY = '53af9d48b7d343678c2c985265ee7eca';
const BASE_URL = 'https://api.football-data.org/v2/';

// fetch header
const fetchApi = (url) => {
  return fetch(url, {
    method: 'GET',
    headers: {
      'X-Auth-Token': API_KEY,
    },
  });
};

// jika fetch berhasil
const status = (response) => {
  if (response.status !== 200) {
    console.log('Error: ' + response.status);

    // reject untuk memanggil catch
    return Promise.reject(new Error(response.statusText));
  } else {
    return Promise.resolve(response);
  }
};

// untuk parsing json jadi array
const json = (response) => {
  return response.json();
};

// handle error di catch
const error = (error) => {
  console.log('Error :' + error);
};

// get match result for homepage
const getMatchResult = () => {
  if ('caches' in window) {
    caches
      .match(`${BASE_URL}competitions/2001/matches?status=FINISHED`)
      .then((response) => {
        if (response) {
          response.json().then((res) => {
            renderMatchResult(res.matches);
          });
        }
      });
  }

  fetchApi(`${BASE_URL}competitions/2001/matches?status=FINISHED`)
    .then(status)
    .then(json)
    .then((res) => {
      renderMatchResult(res.matches);
    })
    .catch((err) => {
      console.log(err);
    });
};

// get jadwal
const getSchedule = () => {
  if ('caches' in window) {
    caches
      .match(`${BASE_URL}competitions/2001/matches?status=SCHEDULED`)
      .then((response) => {
        if (response) {
          response.json().then((res) => {
            renderSchedule(res.matches);
          });
        }
      });
  }

  fetchApi(`${BASE_URL}competitions/2001/matches?status=SCHEDULED`)
    .then(status)
    .then(json)
    .then((res) => {
      renderSchedule(res.matches);
    })
    .catch((err) => {
      console.log(err);
    });
};

// klasemen
const getStanding = () => {
  if ('caches' in window) {
    caches
      .match(`${BASE_URL}competitions/2001/standings?standingType=TOTAL`)
      .then((response) => {
        if (response) {
          response.json().then((res) => {
            renderStanding(res.standings);
          });
        }
      });
  }

  fetchApi(`${BASE_URL}competitions/2001/standings?standingType=TOTAL`)
    .then(status)
    .then(json)
    .then((res) => {
      renderStanding(res.standings);
    })
    .catch((err) => {
      console.log(err);
    });
};

// match detail
const getTeamDetail = () => {
  return new Promise((resolve, reject) => {
    const urlParams = new URLSearchParams(window.location.search);
    const idParam = urlParams.get('id');
    let teamDetail = '';
    let teamMatches = '';

    if ('caches' in window) {
      caches
        .match(`${BASE_URL}teams/${idParam}`)
        .then((response) => {
          if (response) {
            response.json().then((teamDetailResponse) => {
              teamDetail = teamDetailResponse;

              return caches
                .match(`${BASE_URL}teams/${idParam}/matches?status=SCHEDULED`)
                .then((response) => {
                  if (response) {
                    response.json().then((teamMatchesResponse) => {
                      teamMatches = teamMatchesResponse;

                      renderTeamDetail(teamDetail, teamMatches);
                      resolve(teamDetail);
                    });
                  }
                });
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchApi(`${BASE_URL}teams/${idParam}`)
      .then(status)
      .then(json)
      .then((teamDetailResponse) => {
        teamDetail = teamDetailResponse;

        return fetchApi(`${BASE_URL}teams/${idParam}/matches?status=SCHEDULED`)
          .then(status)
          .then(json)
          .then((teamMatchesResponse) => {
            teamMatches = teamMatchesResponse;

            renderTeamDetail(teamDetail, teamMatches);
            resolve(teamDetail);
          });
      });
  });
};

export { getMatchResult, getSchedule, getStanding, getTeamDetail };
