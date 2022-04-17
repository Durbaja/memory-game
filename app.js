const cardArray = [
  {
    name: "Fries",
    img: "images/fries.png",
  },
  {
    name: "Cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "Hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "Icecream",
    img: "images/ice-cream.png",
  },
  {
    name: "Milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "Pizza",
    img: "images/pizza.png",
  },
  {
    name: "Fries",
    img: "images/fries.png",
  },
  {
    name: "Cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "Hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "Icecream",
    img: "images/ice-cream.png",
  },
  {
    name: "Milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "Pizza",
    img: "images/pizza.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");

let cardsChosen = [];

let cardsChosenIds = [];

const cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);
  }
}

createBoard();

checkMatch = () => {
  const cards = document.querySelectorAll("#grid img");
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];

  if (optionOneId == optionTwoId) {
    alert("You have clicked the same image!");
  }

  if (cardsChosen[0] == cardsChosen[1]) {
    cards[optionOneId].setAttribute("src", "images/white.png");
    cards[optionTwoId].setAttribute("src", "images/white.png");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");
  }
  resultDisplay.textContent = cardsWon.length;
  cardsChosen = [];
  cardsChosenIds = [];

  if (cardsWon.length == cardArray.length / 2) {
    resultDisplay.textContent = `Congratulations, you have won!`;
  }
};

function flipCard() {
  const cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  console.log("clicked", cardId);
  this.setAttribute("src", cardArray[cardId].img);

  if (cardsChosen.length === 2) {
    setTimeout(() => {
      checkMatch();
    }, 500);
  }
}
