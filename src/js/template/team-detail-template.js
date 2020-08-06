import { replaceUrl } from '../replace-url';

const teamDetailTemplate = (res, squadHTML, matchHTMl) => {
  return `
  
  <div class="container team-detail center">
  <img
    src="${replaceUrl(res.crestUrl)}"
    alt="${res.shortName}"
    class="team-logo"
  />

  <div class="left-align">
    <ul class="tabs tabs-fixed-width tab-demo z-depth-1">
      <li class="tab"><a class="active" href="#detail">Detail</a></li>
      <li class="tab"><a href="#squad">Squad</a></li>
      <li class="tab"><a href="#schedule">Schedule</a></li>
    </ul>

    <div id="detail" class="col s12">
      <ul class="collection">
        <li class="collection-item">
          <div class="row">
            <span class="title-detail col s2">Name</span>
            <span class="col s8 offset-s2">${res.name}</span>
          </div>
        </li>
        <li class="collection-item">
          <div class="row">
            <span class="title-detail col s2">TLA</span>
            <span class="col s8 offset-s2">${res.tla}</span>
          </div>
        </li>
        <li class="collection-item">
          <div class="row">
            <span class="title-detail col s2">Website</span>
            <span class="col s8 offset-s2">${res.website}</span>
          </div>
        </li>
        <li class="collection-item">
          <div class="row">
            <span class="title-detail col s2">Founded</span>
            <span class="col s8 offset-s2">${res.founded}</span>
          </div>
        </li>
        <li class="collection-item">
          <div class="row">
            <span class="title-detail col s2">Address</span>
            <span class="col s8 offset-s2">${res.address}</span>
          </div>
        </li>
        <li class="collection-item">
          <div class="row">
            <span class="title-detail col s2">Club Colors</span>
            <span class="col s8 offset-s2">${res.clubColors}</span>
          </div>
        </li>
        <li class="collection-item">
          <div class="row">
            <span class="title-detail col s2">Email</span>
            <span class="col s8 offset-s2">${res.email}</span>
          </div>
        </li>
        
      </ul>
    </div>

    <div id="squad" class="col s12">
      <ul class="collection">
            ${squadHTML}
      </ul>
    </div>

    <div id="schedule" class="col s12">
      ${matchHTMl}
    </div>

  </div>
</div>


  `;
};

export { teamDetailTemplate };
