// Make a div
const divHtml = `<div></div>`;
const divHtmlFragment = document.createRange().createContextualFragment(divHtml); // this is a DOM element
const myDiv = divHtmlFragment.querySelector('div'); // this will be appended to the HTML page...
// add a class of wrapper to it
myDiv.classList.add('wrapper');
// put it into the body
document.body.appendChild(myDiv); // ...right here!!!

// make an unordered list
const ulHtml = `<ul></ul>`;
const ulHtmlFragment = document.createRange().createContextualFragment(ulHtml);
const myUl = ulHtmlFragment.querySelector('ul');
myDiv.insertAdjacentElement('afterbegin', myUl);
// add three list items with the words "one, two, three" in them
const liHtml = `
<li>One</li>
<li>Two</li>
<li>Three</li>
`;
const liHtmlFragment = document.createRange().createContextualFragment(liHtml);
const myLi = liHtmlFragment.querySelectorAll('li');
// put that list into the above wrapper
// for (let i = (myLi.length - 1); i >= 0; i--) {
//   myUl.insertAdjacentElement('afterbegin', myLi[i]);
// }
myUl.innerHTML = liHtml;

// create an image
// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
const width = 200;
const src = `https://picsum.photos/${width}`;
const alt = `Cute Puppy`;
const imgHtml = `<img src=${src} alt="${alt}">`; // Note that alt containing a space needs to be put in "" despite of ${} notation
const imgHtmlFragment = document.createRange().createContextualFragment(imgHtml);
const myImg = imgHtmlFragment.querySelector('img');
// Append that image to the wrapper
myDiv.insertAdjacentElement('beforeend', myImg);

// with HTML string, make a div, with two paragraphs inside of it
const myString = `
<div>
  <p>First paragraph</p>
  <p>Second paragraph</p>
</div>
`;
// put this div before the unordered list from above
myUl.insertAdjacentHTML('beforebegin', myString);

// add a class to the second paragraph called warning
const firstParagraph = myDiv.querySelector('p');
const secondParagraph = firstParagraph.nextElementSibling;
secondParagraph.classList.add('warning');
// remove the first paragraph
firstParagraph.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
  const playerCardHtml = `
    <div class="playerCard">
      <h2>${name} — ${age}</h2>
      <p>
        They are ${height} and ${age} years old. In Dog years this person would
        be ${age * 7}. That would be a tall dog!
      </p>
    </div>
    `;
    const playerCardHtmlFragment = document.createRange().createContextualFragment(playerCardHtml);
    const playerCardDiv = playerCardHtmlFragment.querySelector('div');
  return playerCardDiv;
}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const divCards = document.createElement('div');
divCards.classList.add('cards');

// make 4 player cards using generatePlayerCard
const cards = [
  generatePlayerCard('Adam', 15, 167),
  generatePlayerCard('Bruce', 12, 151),
  generatePlayerCard('Cecile', 16, 170),
  generatePlayerCard('Denise', 14, 165),
];

// append those cards to the div
for (let i = 0; i < cards.length; i++) {
  divCards.insertAdjacentElement('beforeend', cards[i]);
}
// put the div into the DOM just before the wrapper element
myDiv.insertAdjacentElement('beforebegin', divCards);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed
const deleteButtons = [
  document.createElement('button'),
  document.createElement('button'),
  document.createElement('button'),
  document.createElement('button'),
];
for (let i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].innerText = `Hide`;
  deleteButtons[i].type = `button`;
  deleteButtons[i].classList.add('delete');
}
for (let i = 0; i < divCards.children.length; i++) {
  divCards.children[i].insertAdjacentElement('beforeend', deleteButtons[i]);
}

// select all the buttons!
const buttons = divCards.querySelectorAll('.delete');
// make out delete function
function deleteCard(event) {
  const button = event.currentTarget;
  // button.parentElement.children[0].classList.toggle('hidden');
  // button.parentElement.children[1].classList.toggle('hidden');
  if (button.innerText == 'Hide') {button.innerText = 'Show'} else {button.innerText = 'Hide'};
  button.closest('.playerCard').children[0].classList.toggle('hidden');
  button.closest('.playerCard').children[1].classList.toggle('hidden');
}

// loop over them and attach a listener
// deleteButtons[0].addEventListener('click', deleteCard);
buttons.forEach(gimbemgombomakarhogyhivhatom => gimbemgombomakarhogyhivhatom.addEventListener('click', deleteCard));
