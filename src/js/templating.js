import cardsTemplate from '../templates/menu-cards.hbs';
import menuCards from '../menu.json'
console.log(menuCards); 

const markup = cardsTemplate(menuCards)
console.log(markup);
const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('beforeend', markup)