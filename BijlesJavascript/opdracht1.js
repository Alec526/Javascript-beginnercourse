let kopje = document.getElementById("kopje");
kopje.innerText = "JavaScript was hier!";

const paragraaf = document.getElementById("paragraaf");
paragraaf.innerText = "JavaScript for <p>resident!";

const kopje2 = document.getElementById("kopje2");
kopje2.innerText = "Andre h2";

console.log(kopje2.innerText + " !!!");

let startInSeconds;
let stopInSeconds;


let startKnop = document.getElementById("startKnop");
startKnop.addEventListener("click", function() {
    kopje.innerText = "De tijd wordt nu gemeten.";
    let now = new Date();
    let timeInSeconds = now.getTime();
    startInSeconds = timeInSeconds / 1000;
});

let stopKnop = document.getElementById("stopKnop");
stopKnop.addEventListener("click", function() {
    let now = new Date();
    let timeInSeconds = now.getTime();
    stopInSeconds = timeInSeconds / 1000;
    let timePassed = (stopInSeconds - startInSeconds).toFixed(2);
    kopje.innerText = "De verstreken tijd is " + timePassed + " seconden.";
});