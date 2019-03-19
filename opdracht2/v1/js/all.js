var buttonVliegen = document.querySelector(".buttonVliegen");
var buttonDood = document.querySelector(".buttonDood");
var buttonLaser = document.querySelector(".buttonLaser");
var vogel = document.querySelector(".vogel");
var oogDood = document.querySelector(".oogDood");
var oogDood2 = document.querySelector(".oogDood2");
var oogLevend = document.querySelector(".oog");
var refresh = document.querySelector(".reloadbar")
var laserstraal = document.querySelector(".lasers")

buttonVliegen.addEventListener("click", vliegen);
buttonDood.addEventListener("click", dood);
buttonLaser.addEventListener("click", lasers);

refresh.addEventListener("click", refreshen);

function refreshen() {
    location.reload();
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


}

//function sneller() {
//    fl
//}






//
//
//
//deur.addEventListener("click", open);
//
//function open() {
//    deur.classList.
//}
