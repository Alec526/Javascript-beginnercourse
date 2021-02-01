var plaatjes = [1,2,3,4,5,6,7,8,9];
var slideholder = document.getElementById("slideholder");
slideholder.style.backgroundImage = "url('../img/img1.jpg')";

slideholder.addEventListener("click", function() {
    slideholder.style.backgroundImage = "url('../img/img" + getButterfly() + ".jpg')";
});

var teller = 0;

function getButterfly() {
    if(teller >= plaatjes.length) {
        teller = 1;
    } else {
        teller++;
    }
    return teller;
}