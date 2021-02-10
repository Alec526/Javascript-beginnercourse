pics = document.getElementById("pics");
createPicsHolder();
createButterflyImages();


function createPicsHolder() {
    for(var i = 0; i < 9; i++) {
    pictureHolder = document.createElement("div");
    pictureHolder.className = "picture-holder";
    pictureHolder.id = "picture-holder-" + i;
    pics.appendChild(pictureHolder);
    }
}

function createButterflyImages() {
    pictureHolder = document.getElementsByClassName("picture-holder");
    for(var i = 0; i < pictureHolder.length; i++) {
        favorite = document.createElement("div");
        favorite.className = "favorite";
        favorite.id = "favorite_" + (i+1);
         butterflyPicture = document.createElement("img");
         butterflyPicture.src = "./img/img" + (i+1) + ".jpg";
         butterflyPicture.id = (i+1);
         butterflyPicture.addEventListener("click",function() {
             makeFavorite(this.id);
        });
         pictureHolder[i].appendChild(favorite);
         pictureHolder[i].appendChild(butterflyPicture);
    }
}

function makeFavorite(id) {
    console.log("Make me favorite! The currently selected butterfly is.. " + id);
    notsofavorite = document.getElementsByClassName("favorite");
    for(var i = 0; i < notsofavorite.length; i++) {
        notsofavorite[i].style.backgroundImage = "none";
    }
    favorite = document.getElementById("favorite_" + id);
    favorite.style.backgroundImage = "url('./img/heart.png')";
}