import { teamDetailTemplate } from './template/team-detail-template';

import { renderFavTeamsTemplate } from './template/render-fav-teams-template';

const renderFavTeams = (teams) => {
  let favTeamsHTML = '';
  teams.forEach((team) => {
    favTeamsHTML += renderFavTeamsTemplate(team);
  });
  const favTeamsList = document.querySelector('#fav-teams-list');
  favTeamsList.innerHTML = favTeamsHTML;
};

export { renderFavTeams };
