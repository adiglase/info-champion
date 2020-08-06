import { scheduleTemplate } from './template/schedule-template';

const renderSchedule = (matches) => {
  let matchScheduleHTML = '';
  matches.forEach((match) => {
    matchScheduleHTML += scheduleTemplate(match);
  });

  document.querySelector('.match-result-list').innerHTML = matchScheduleHTML;
};

export { renderSchedule };
