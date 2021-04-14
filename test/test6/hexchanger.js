let colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let body = document.getElementById("backgroundcolor");
let hexcolor = document.getElementById("hexcolor");

function hexchanger() {
    let hex = "#";

    for(let i = 0; i < 6; i++){
        let nummer = Math.floor(Math.random() * colors.length)
        hex += colors[nummer];
    }
    hexcolor.innerText = "Background color: " + hex;
    body.style.backgroundColor = hex;
}