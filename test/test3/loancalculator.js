let loan;
let interest;
let month;
let totaal;
let resultaat = 0;

function MaandelijkseVasteLasten() {
    loan = document.getElementById("loan").value;
    interest = document.getElementById("interest").value;
    month = document.getElementById("month").value;

    totaal = (parseInt(interest) / 100 * parseInt(loan)) + parseInt(loan);
    resultaat = totaal / parseInt(month);

    document.getElementById("button").value = "Per maand: " + "$" + resultaat.toFixed(2);
}