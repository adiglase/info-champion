import { replaceUrl } from '../replace-url';

const renderFavTeamsTemplate = (team) => {
  return `
    <div class="col card s12 m4" id="fav-team-item">
      <div class="card-image waves-effect waves-block waves-light">
        <img
          class="team-logo-fav"
          src="${replaceUrl(team.crestUrl)}"
          alt="${team.name}"
        />
      </div>
      <div class="card-content">
        <div class="row">
          <span class="card-title grey-text text-darken-4"
            >${team.shortName}</span
          ><a href="../team-detail.html?id=${
            team.id
          }" class="btn blue darken-4 white-text">Detail</a>
        </div>
      </div>
    </div>

  `;
};

export { renderFavTeamsTemplate };
