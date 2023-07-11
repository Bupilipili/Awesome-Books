import { DateTime } from '../node_modules/luxon/src/luxon.js';

export default () => {
  const timeContact = document.querySelector('.date-info');
  const now = DateTime.now();
  const dateTime = now.toLocaleString({
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  });
  timeContact.textContent = dateTime;
};