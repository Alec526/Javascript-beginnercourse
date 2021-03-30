let elementen = [];

for(let i = 0; i < 10; i++){
    elementen.push(document.createElement("div"));

}

for(let i = 0; i < elementen.length; i++){
    document.getElementById("baas").appendChild(elementen[i]);
    elementen[i].id = i + 1;
    elementen[i].className = "tellers";
    elementen[i].innerText = "text " + i;
    console.log(elementen);
}