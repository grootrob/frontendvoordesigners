/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/


//
//fetch('https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json')
//    .then(function (response) {
//        return response.json();
//    })
//    .then(function (myJson) {
//        console.log(myJson);
//    });



//jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true/ /
//eslint - env browser /
//eslint 'no-console':0/

var main = document.querySelector('main');
var request = new XMLHttpRequest();
var url = "../json/movies.json";
var alleFilms = document.querySelector('h2.allefilms');
var detail = document.querySelector('section');
var aanbevolenKnop = document.querySelector('h2.aanbevolen');
var terugRuimte = document.querySelector('section.terug');



request.open('GET', url); //Hier roep ik url(Json bestand) op
request.responseType = 'json'; //Om aan te geven welk type bestand je ophaald
request.send(); //Om het naar de server te sturen

//request.onload = function () {
//    var content = request.response; //de content sla je op in een var
//    filmLijst(content);
//};

request.onload = function () {
    //misschien hier een timeout gebruiken om je loader te showen
    window.setTimeout(function () {
        var content = request.response; //de inhoud sla je op in een var
        filmLijst(content);
    }, 500);


};

/*

function test(e) {
    console.log(e.target.id);
}
*/

function filmLijst(content) {
    var filmDetail = content;

    for (var i = 0; i < filmDetail.length; i++) {
        var filmItem = document.createElement('article');
        var firstContent = document.createElement('div');
        firstContent.className = "firstContent";
        var filmImg = document.createElement('img');
        filmImg.src = filmDetail[i].cover;
        var metadataDiv = document.createElement('div');
        metadataDiv.className = "moviedetail";
        var filmNaam = document.createElement('h3');
        filmNaam.textContent = filmDetail[i].title;
        var filmGenre = document.createElement('h4');
        filmGenre.textContent = filmDetail[i].genres;
        var filmRelease = document.createElement('span');
        filmRelease.className = "release";
        filmRelease.textContent = filmDetail[i].release_date;



        var toonTrailer = document.createElement('p');
        toonTrailer.id = filmDetail[i].trailer;
        toonTrailer.textContent = "Toon trailer";


        filmItem.appendChild(firstContent);

        firstContent.appendChild(filmImg);
        firstContent.appendChild(metadataDiv);


        metadataDiv.appendChild(filmNaam);
        metadataDiv.appendChild(filmGenre);
        //        filmItem.appendChild(filmTrailer);
        metadataDiv.appendChild(filmRelease);
        metadataDiv.appendChild(toonTrailer);


        main.appendChild(filmItem);
        (function () {
            var film = content[i];
            toonTrailer.addEventListener('click', function (e) {
                showTrailer(film);
                console.log(e.target.id);

                /*filmTrailer.classList.toggle('show');

                    if (filmTrailer.classList.contains('show')) {
                        toonTrailer.textContent = 'klap in';
                    } else {
                        toonTrailer.textContent = 'klap uit';
                    }*/
            });
        })();
    }


}

function showTrailer(film) {
    var terugKnop = document.createElement('h5');
    terugKnop.textContent = ("Terug");
    console.log("film", film);

    //    main.className = 'hidden';

    var filmTrailer = document.createElement('iframe');
    filmTrailer.setAttribute("src", film.trailer);
    filmTrailer.align = "center";
    filmTrailer.scrolling = "no";

    detail.appendChild(filmTrailer);
    terugRuimte.appendChild(detail);


    detail.appendChild(filmTrailer);



    alleFilms.addEventListener('click', function () {
        main.classList.add("hidden");
    });
}


/*function aanbevolen(inhoud) {
    var aanbevolenData = inhoud;
    console.log("content", aanbevolenData);

}


//films.addEventListener('click', toonSeries);
aanbevolenKnop.addEventListener('click', aanbevolen);

*/
