import { matchResultTemplate } from './template/match-result-template';

const renderMatchResult = (matches) => {
  let matchResultHTML = '';
  for (let i = matches.length - 1; i > matches.length - 21; i--) {
    matchResultHTML += matchResultTemplate(matches[i]);
  }

  document.querySelector('.match-result-list').innerHTML = matchResultHTML;
};

export { renderMatchResult };
