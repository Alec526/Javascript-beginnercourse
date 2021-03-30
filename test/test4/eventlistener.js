let teller = 0;

document.getElementById("countbutton").addEventListener("mouseover", function(){
    teller++;
    document.getElementById("tel").innerText = teller;
});