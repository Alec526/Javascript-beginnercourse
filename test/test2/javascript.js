let getal1 = "";
let getal2 = "";
let berekeningswaarde = "";
let resultaat = 0;

function Tel1(){
    getal1 += "1";
    document.getElementById("huidigGetal").innerText = getal1;
}

function Tel2(){
    if(berekeningswaarde == ""){
        getal1 += "2";
        document.getElementById("huidigGetal").innerText = getal1;
    } else {
        getal2 += "2";
        document.getElementById("huidigGetal").innerText = getal2;
    }
}

function Tel3(){
    if(berekeningswaarde == ""){
        getal1 += "3";
        document.getElementById("huidigGetal").innerText = getal1;
    } else {
        getal2 += "3";
        document.getElementById("huidigGetal").innerText = getal2;
    }
}

function Tel4(){
    if(berekeningswaarde == ""){
        getal1 += "4";
        document.getElementById("huidigGetal").innerText = getal1;
    } else {
        getal2 += "4";
        document.getElementById("huidigGetal").innerText = getal2;
    }
}

function Tel5(){
    if(berekeningswaarde == ""){
        getal1 += "5";
        document.getElementById("huidigGetal").innerText = getal1;
    } else {
        getal2 += "5";
        document.getElementById("huidigGetal").innerText = getal2;
    }
}

function Tel6(){
    if(berekeningswaarde == ""){
        getal1 += "6";
        document.getElementById("huidigGetal").innerText = getal1;
    } else {
        getal2 += "6";
        document.getElementById("huidigGetal").innerText = getal2;
    }
}

function Tel7(){
    if(berekeningswaarde == ""){
        getal1 += "7";
        document.getElementById("huidigGetal").innerText = getal1;
    } else {
        getal2 += "7";
        document.getElementById("huidigGetal").innerText = getal2;
    }
}

function Tel8(){
    if(berekeningswaarde == ""){
        getal1 += "8";
        document.getElementById("huidigGetal").innerText = getal1;
    } else {
        getal2 += "8";
        document.getElementById("huidigGetal").innerText = getal2;
    }
}

function Tel9(){
    if(berekeningswaarde == ""){
        getal1 += "9";
        document.getElementById("huidigGetal").innerText = getal1;
    } else {
        getal2 += "9";
        document.getElementById("huidigGetal").innerText = getal2;
    }
}

function Tel0(){
    if(berekeningswaarde == ""){
        getal1 += "0";
        document.getElementById("huidigGetal").innerText = getal1;
    } else {
        getal2 += "0";
        document.getElementById("huidigGetal").innerText = getal2;
    }
}

function TelPlus(){
    berekeningswaarde = "+";
}

function TelMin(){
    berekeningswaarde = "-";
}

function TelKeer(){
    berekeningswaarde = "*";
}

function TelDeel(){
    berekeningswaarde = "/";
}

function TelUitkomst(){
    if(berekeningswaarde == "+"){
        resultaat = parseInt(getal1) + parseInt(getal2);
        document.getElementById("huidigGetal").innerText = resultaat;
        berekeningswaarde = "";
        getal1 = "";
        getal2 = "";
    } else if(berekeningswaarde == "-") {
        resultaat = parseInt(getal1) - parseInt(getal2);
        document.getElementById("huidigGetal").innerText = resultaat;
        berekeningswaarde = "";
        getal1 = "";
        getal2 = "";
    } else if(berekeningswaarde == "*") {
        resultaat = parseInt(getal1) * parseInt(getal2);
        document.getElementById("huidigGetal").innerText = resultaat;
        berekeningswaarde = "";
        getal1 = "";
        getal2 = "";
    } else if(berekeningswaarde == "/") {
        resultaat = parseInt(getal1) / parseInt(getal2);
        document.getElementById("huidigGetal").innerText = resultaat;
        berekeningswaarde = "";
        getal1 = "";
        getal2 = "";
    }
}