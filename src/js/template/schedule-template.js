import { replaceUnderscore } from '../replaceUnderscore';
import { convertDate } from '../convertDate';

const scheduleTemplate = (match) => {
  return `
    <div class="card-panel blue darken-4 hoverable match-item">
      <div class="row white-text center stage">${replaceUnderscore(
        match.stage
      )}</div>

        <div class="row white-text valign-wrapper">
          <div class="col s5 right-align team-name">
            ${match.homeTeam.name}
          </div>

        <div class="col s2 center bor">
          vs
        </div>

      <div class="col s5 left-align team-name">${match.awayTeam.name}</div>
    </div>

    <div class="row white-text get-team-detail">
    <div class="col s5 home-score right-align"><a href="../team-detail.html?id=${
      match.homeTeam.id
    }" class="btn-small blue accent-1">Detail</a>
    </div>

    <div class="col s2 center bor"></div>

    <div class="col s5 away-score left-align"><a href="../team-detail.html?id=${
      match.awayTeam.id
    }" class="btn-small blue accent-1">Detail</a>
    </div>
  </div>

      <div class="row white-text center match-date">${convertDate(
        match.utcDate
      )}</div>
    </div>
  `;
};

export { scheduleTemplate };
