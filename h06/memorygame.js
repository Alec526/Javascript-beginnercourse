
const fotoArray = document.getElementsByTagName("img");
var random = 0;
var randomNumbers = [];
let currentlyClickedCards = [];

while(randomNumbers.length < 18) {
    random = Math.floor(Math.random() * 18) + 1;
    if(randomNumbers.lastIndexOf(random) === -1) {
        randomNumbers.push(random);
    }
}

random = 0;
for(var nummer in fotoArray) {
    fotoArray[nummer].src = "./img/img" + randomNumbers[random] + ".jpg";
    random++;
}

initGame();
function initGame(){
    const randomNumbersArray = shuffle(generateRandomNumbers(9, 2));
    for (let i = 0; i < fotoArray.length; i++){
        fotoArray[i].src = '.img/img${randomNumbersArray[i]}.jpg';
        fotoArray[i].src = '.img/blank.jpg';
        fotoArray[i].twinNumber = randomNumbersArray[i];
        fotoArray[i].addEventListener("click", cardClicked);
    }
}

function cardClicked(){
    if (currentlyClickedCards.length === 1) {
        currentlyClickedCards[1] = this;
        this.src = '.img/img${this.twinNumber}.jpg';
        if (currentlyClickedCards[0].twinNumber === currentlyClickedCards[1].twinNumber){
            currentlyClickedCards = [];
        } else {
            setTimeout(function (){
                currentlyClickedCards[0].src = '.img/blank.jpg';
                currentlyClickedCards[1].src = '.img/blank.jpg';
                currentlyClickedCards = [];
            }, 1000);
        }
    } else if (currentlyClickedCards.length === 0) {
        currentlyClickedCards[0] = this;
        this.src = '.img/img${this.twinNumber}.jpg';
    }
}

function generateRandomNumbers (numberOfDifferentImages, times) {
    const returnArray = [];
    for (let j = 0; j < times; j++) {
        for(let i = 1; i < numberOfDifferentImages; i++){

            returnArray.push(i);

        }
    }
    return returnArray;
}

function shuffle(arrayOne){
const returnArray = [];
const times = arrayOne.length;
    for (let i = 0; i < times; i++){
    const randomNumber = Math.floor(Math.random() * arrayOne.length);
    returnArray.push(arrayOne[randomNumber]);
    arrayOne.splice(randomNumber, 1);
    }
    return returnArray;
}

