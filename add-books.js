/* eslint-disable no-use-before-define */
/* eslint-disable max-classes-per-file */
/* eslint-disable-line no-unused-vars */

import { BookCollection } from './modules/methods.js';

// Book collection
const bookCollection = new BookCollection();

bookCollection.addBook();

// Displays all the initiated variables
import {
  listBook,
  newBook,
  contact,
  section1,
  section2,
  section3,
  logo,
  separator,
} from './modules/variables.js';

// Displays addBooks at default
section1.style.display = 'none';
section2.style.display = '';
section3.style.display = 'none';
separator.style.display = 'none';
logo.innerHTML = 'Awesome Books';

import {
  handleListBookClick,
  handleNewBookClick,
  handleContactClick,
} from './modules/events.js';

listBook.addEventListener('click', handleListBookClick);
newBook.addEventListener('click', handleNewBookClick);
contact.addEventListener('click', handleContactClick);

// Add date and time to page
import dateTimeModule from './modules/time.js';

dateTimeModule();