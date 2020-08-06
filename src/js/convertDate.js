const dayjs = require('dayjs');
require('dayjs/locale/id');

dayjs.locale('id');

const convertDate = (matchDate) => {
  return dayjs(matchDate).locale('id').format('D MMMM YYYY');
};

export { convertDate };
