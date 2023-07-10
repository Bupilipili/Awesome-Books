import {
    listBook, newBook, contact, section1, section2, section3, logo, separator,
}from'./variables.js'

export function handleListBookClick() {
    section1.style.display = '';
    section2.style.display = 'none';
    section3.style.display = 'none';
    separator.style.display = 'none';
    logo.innerHTML = 'Awesome Books';
  }
  
  export function handleNewBookClick() {
    section1.style.display = 'none';
    section2.style.display = '';
    section3.style.display = 'none';
    logo.innerHTML = 'Awesome Books';
  }
  
  export function handleContactClick() {
    section1.style.display = 'none';
    section2.style.display = 'none';
    section3.style.display = '';
    logo.innerHTML = 'Awesome Books';
  }
  
  