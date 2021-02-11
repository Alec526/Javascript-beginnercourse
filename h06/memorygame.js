
var fotoArray = document.getElementsByTagName("img");
var random = 0;
var randomNummer = [];


while(randomNummer.length < 18) {
    random = Math.floor(Math.random() * 18) + 1;
    if(randomNummer.lastIndexOf(random) == -1) {
        randomNummer.push(random);
    }
}


random = 0;
for(var nummer in fotoArray) {
    fotoArray[nummer].src = "./img/img" + randomNummer[random] + ".jpg";
    random++;
}