var teller1 = 1;
var teller2 = 2;
var teller3 = 3;

var plaatjes1 = document.getElementById("plaatjes1");
var plaatjes2 = document.getElementById("plaatjes2");
var plaatjes3 = document.getElementById("plaatjes3");

plaatjes1.style.backgroundImage = "url('./image/image11.jpg')";
plaatjes2.style.backgroundImage = "url('./image/image22.jpg')";
plaatjes3.style.backgroundImage = "url('./image/image33.jpg')";

plaatjes1.addEventListener("click", function() {
    plaatjes1.style.backgroundImage = "url('./image/image" + getImage1() + "1.jpg')";
});
plaatjes2.addEventListener("click", function() {
    plaatjes2.style.backgroundImage = "url('./image/image" + getImage2() + "2.jpg')";
});
plaatjes3.addEventListener("click", function() {
    plaatjes3.style.backgroundImage = "url('./image/image" + getImage3() + "3.jpg')";
});

function getImage1() {
    if(teller1 >= 3) {
        teller1 = 1;
    } else {
        teller1++;
    }
    return teller1;
}

function getImage2() {
    if(teller2 >= 3) {
        teller2 = 1;
    } else {
        teller2++;
    }
    return teller2;
}

function getImage3() {
    if(teller3 >= 3) {
        teller3 = 1;
    } else {
        teller3++;
    }
    return teller3;
}
