let teller = 0;
document.getElementById("huidigNummer").innerText = teller;

function Plus() {
    teller++;
    document.getElementById("huidigNummer").innerText = teller;
    console.log(teller);
}

function Min() {
    teller--;
    document.getElementById("huidigNummer").innerText = teller;
    console.log(teller);
}