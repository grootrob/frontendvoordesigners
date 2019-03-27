var buttonVliegen = document.querySelector(".buttonVliegen");
var buttonDood = document.querySelector(".buttonDood");
var buttonLaser = document.querySelector(".buttonLaser");
var buttonNacht = document.querySelector(".buttonNacht");
var vogel = document.querySelector(".vogel");
var oogDood = document.querySelector(".oogDood");
var oogDood2 = document.querySelector(".oogDood2");
var oogLevend = document.querySelector(".oog");
var refresh = document.querySelector(".reloadbar");
var laserstraal = document.querySelector(".lasers");
var nacht = document.querySelector("html");
var zonMaan = document.querySelector(".zon");


buttonVliegen.addEventListener("click", vliegen);
buttonDood.addEventListener("click", dood);
buttonLaser.addEventListener("click", lasers);
buttonNacht.addEventListener("click", dagNacht);

refresh.addEventListener("click", refreshen);

function refreshen() {
    location.reload();
}

function dagNacht() {
    zonMaan.classList.remove("zon");
    zonMaan.classList.add("maan");
    nacht.classList.remove("day");
    nacht.classList.add("night");
    refresh.style.display = "block";

}

function vliegen() {
    vogel.classList.add("vliegen");
    console.log("flapflapflap");
    refresh.style.display = "block";
}

function lasers() {
    console.log("LASERRSSSS!!!!");
    laserstraal.style.display = "block";
    refresh.style.display = "block";
}

function dood() {
    vogel.classList.add("dood");
    oogLevend.style.display = "none";
    oogDood.style.display = "block";
    oogDood2.style.display = "block";
    refresh.style.display = "block";
    console.log("He ded");
    document.html.style.background = "white";
}



document.addEventListener('keydown', function (event) {
    if (event.keyCode === 86) {
        vliegen();
    }
    if (event.keyCode === 68) {
        dood();
    }

    if (event.keyCode === 76) {
        lasers();
    }

    if (event.keyCode === 82) {
        refreshen();
    }

    if (event.keyCode === 78) {
        dagNacht();
    }
});
