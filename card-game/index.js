const cards = document.querySelectorAll(".card");

let cardOne,
    cardTwo;
let disableDeck = false;
let matchedCard = 0;

function flipCard(evt) {
    let clickedCard = evt.target;
    if (clickedCard !== cardOne && !disableDeck) {
        clickedCard.classList.add("flip");
        if (!cardOne) {
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;
        disableDeck = false;
        console.log(cardOne, cardTwo);

        let cardoneImg = cardOne.querySelector("img").src,
            cardtwoImg = cardTwo.querySelector("img").src;
        matchCard(cardoneImg, cardtwoImg);
    }
}

function matchCard(img1, img2) {
    if (img1 === img2) {
        matchedCard++;

        if (matchedCard === 8) {
            setTimeout(() => {
                return shuffleCad();
            }, 1000);
        }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";
        return disableDeck = false;
    }
    setTimeout(() => {
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);

    setTimeout(() => {
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = "";
        disableDeck = false;
    }, 1200);
}

function shuffleCad() {
    let matchedCard = 0;
    cardOne = cardTwo = "";
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1)
    cards.forEach((card, index) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector("img");
        imgTag.src = `./icon/img-${arr[index]}.png`
        card.addEventListener("click", flipCard);
    });
}


shuffleCad();
cards.forEach(card => {
    card.addEventListener("click", flipCard);
});