// Make a div
const myDiv = document.createElement('div');
// const myDivDOM = document.createRange().createContextualFragment(myDiv);

// add a class of wrapper to it
myDiv.classList.add('wrapper');

// put it into the body
document.body.appendChild(myDiv);

// make an unordered list
const myList = `
<ul>
</ul>
`;

// add three list items with the words "one, two, three" in them
const listItems = `
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
`;

// const listDOM = document.createRange().createContextualFragment(myList);
// const listItemsDOM = document.createRange().createContextualFragment(listItems);

// put that list into the above wrapper
myDiv.insertAdjacentHTML('afterbegin', myList);
myDiv.innerHTML = listItems;

// create an image
const myImg = document.createElement('img');
const width = '150';
const src = `https://picsum.photos/${width}`;
const alt = 'Cute Puppy';

// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper
myImg.src = src;
myImg.classList.add('cute');
myImg.alt = alt;
myDiv.insertAdjacentElement('beforeend', myImg);

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
<div>
    <p>First Paragraph</p>
    <p>Second Paragraph</p>
</div>
`;
// put this div before the unordered list from above
myDiv.insertAdjacentHTML('afterbegin', myHTML);

// add a class to the second paragraph called warning
const firstP = document.querySelector('div div p');
const secondP = firstP.parentElement.children[1];
secondP.classList.add('warning');
// remove the first paragraph
firstP.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
  const playerCardDiv = `
    <div className="playerCard">
      <h2>${name} — ${age}</h2>
      <p>
        They are ${height} and ${age} years old. In Dog years this person would
        be ${age / 7}. That would be a tall dog!
      </p>
    </div>
    `;
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
  divCards.insertAdjacentHTML('beforeend', cards[i]);
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
  deleteButtons[i].innerText = `Delete`;
}
for (let i = 0; i < divCards.children.length; i++) {
  divCards.children[i].insertAdjacentElement('beforeend', deleteButtons[i]);
}

// select all the buttons!
// make out delete function
function deletePlayerCard() {
  divCards.children[0].remove();
}
// loop over them and attach a listener
deleteButtons[0].onclick = deletePlayerCard();
