import { squadTemplate } from './template/squad-template';
import { teamDetailTemplate } from './template/team-detail-template';
import { scheduleTemplate } from './template/schedule-template';
import { replaceUnderscore } from './replaceUnderscore';

const renderTeamDetail = (teamDetail, teamMatches) => {
  let squadHTML = '';
  let teamDetailHTML = '';
  let position = '';
  let matchHTML = '';

  teamMatches.matches.forEach((match) => {
    matchHTML += scheduleTemplate(match);
  });
  teamDetail.squad.forEach((player) => {
    player.role === 'PLAYER'
      ? (position = player.position)
      : (position = replaceUnderscore(player.role));
    squadHTML += squadTemplate(player, position);
    position = '';
  });

  teamDetailHTML = teamDetailTemplate(teamDetail, squadHTML, matchHTML);
  document.querySelector('#body-content').innerHTML = teamDetailHTML;
  M.AutoInit();
};

export { renderTeamDetail };
