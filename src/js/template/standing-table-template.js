import { replaceUrl } from '../replace-url';

const standingTableTemplate = (team, num) => {
  return `
  <tr>
  <td>${num}</td>
  <td class="club-name">
    <img
      src="${replaceUrl(team.team.crestUrl)}"
      alt="${team.team.name}"
      class="club-logo left"
    />
    <a href="../team-detail.html?id=${team.team.id}">${team.team.name}</a>
  </td>
  <td>${team.playedGames}</td>
  <td>${team.won}</td>
  <td>${team.draw}</td>
  <td>${team.lost}</td>
  <td>${team.goalsFor}</td>
  <td>${team.goalsAgainst}</td>
  <td>${team.goalDifference}</td>
  <td>${team.points}</td>
  </tr>
  `;
};

export { standingTableTemplate };
