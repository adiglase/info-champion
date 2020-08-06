import { replaceUnderscore } from '../replaceUnderscore';
import { standingTableTemplate } from './standing-table-template';

const standingTemplate = (group, standingTable) => {
  return `
  <table class='group-item striped responsive-table'>
    <p class="group-name">${replaceUnderscore(group.group)}</p>
    <thead>
      <tr>
        <th>No.</th>
        <th>Club</th>
        <th>MP</th>
        <th>Win</th>
        <th>Draw</th>
        <th>Lost</th>
        <th>GF</th>
        <th>GA</th>
        <th>GD</th>
        <th>Pts</th>
      </tr>
    </thead>
      
    <tbody>
    ${standingTable}
    
    </tbody>
  </table>
  `;
};

export { standingTemplate };
