import { standingTemplate } from './template/standing-template';
import { standingTableTemplate } from './template/standing-table-template';

const renderStanding = (standings) => {
  let standingHTML = '';
  let standingTable = '';
  standings.forEach((group) => {
    let num = 0;
    group.table.forEach((team) => {
      num += 1;
      standingTable += standingTableTemplate(team, num);
    });
    standingHTML += standingTemplate(group, standingTable);
    standingTable = '';
  });

  document.querySelector('.standing').innerHTML = standingHTML;
};

export { renderStanding };
