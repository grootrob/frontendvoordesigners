//jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true/ /
//eslint - env browser /
//eslint 'no-console':0/

var main = document.querySelector('.colorgallary');
var request = new XMLHttpRequest();
var url = "colors.json";

request.open('GET', url); //Hier roep ik url(Json bestand) op
request.responseType = 'json'; //Om aan te geven welk type bestand je ophaald
request.send(); //Om het naar de server te sturen

request.onload = function () {
    var content = request.response; //de content sla je op in een var
    kleurLijst(content);
};

function kleurLijst(content) {
    var kleurDetail = content;

    for (var i = 0; i < "colors".length; i++) {
        var filmItem = document.createElement('div');
        filmItem.className = "Nieuw";
        //        var filmImg = document.createElement('img');
        //        filmImg.src = filmDetail[i].cover;
        //        var metadataDiv = document.createElement('div');
        //        metadataDiv.className = "moviedetail";
        //        var filmNaam = document.createElement('h3');
        //        filmNaam.textContent = filmDetail[i].title;
        //        var filmGenre = document.createElement('h4');
        //        filmGenre.textContent = filmDetail[i].genres;
        //        var filmRelease = document.createElement('span');
        //        filmRelease.className = "release";
        //        filmRelease.textContent = filmDetail[i].release_date;
        //
        //
        //
        //
        //
        //        filmItem.appendChild(filmImg);
        //        filmItem.appendChild(metadataDiv);
        //
        //
        //        metadataDiv.appendChild(filmNaam);
        //        metadataDiv.appendChild(filmGenre);
        //
        //        metadataDiv.appendChild(filmRelease);

    }
}
