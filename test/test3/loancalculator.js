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

    console.log(parseInt(loan));
    console.log(parseInt(interest));
    console.log(parseInt(month));

    document.getElementById("button").value = "Uitkomst: " + resultaat;
}