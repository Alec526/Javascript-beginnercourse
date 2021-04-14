let HeleTafel = document.getElementById("tafel");
let TafelArray = [1,2,3,4,5,6,7,8,9];
let TafelVanNummer = document.getElementById("textfunction").value;

document.getElementById("textfunction").addEventListener("keyup", function(){
    parseInt(TafelVanNummer);
    for(let i = 0; i < TafelArray.length; i++)
    HeleTafel += TafelVanNummer;
    HeleTafel += TafelVanNummer + " x " + TafelArray;
    console.log(TafelVanNummer);
});

document.getElementById("tafel").innerHTML = HeleTafel;

