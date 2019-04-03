var header = document.querySelector('header');
var section = document.querySelector('section');
var requestURL = 'http://api.openweathermap.org/data/2.5/weather?q=Breda&units=metric&APPID=15ab71533f173d32e3e44c893b687553';
var request = new XMLHttpRequest();
var paragraaf = document.querySelector('p');
var knop = document.querySelector('input');
var gif = document.querySelector('img');

request.open('GET', requestURL);
request.responseType = 'json';
request.send();


request.onload = function() {
    var weer = request.response;
    invullenHeader(weer);
//    showWind(weer);
}
//console.log(data);

//knop.forEach(function (downButtons) {
//    knop.addEventListener("click", function () {
//        knop.classList.toggle('laden');
//        knop.classList.toggle('klaar');
//    });
//});

    knop.addEventListener("click", function(){
        var loadscreen =document.querySelector(".loadingscreen");
        console.log(loadscreen);
        loadscreen.classList.toggle('loadingscreen');
        loadscreen.classList.toggle('loading');
        setTimeout(Replay, 7000);
        function Replay() {
            loadscreen.classList.toggle('loading');
            loadscreen.classList.toggle('loadingscreen');
        }
});


function invullenHeader(jsonObj) {
    var showContent = document.getElementById('showcontent');
    var myH1 = document.createElement('h2');
    var weather = jsonObj["weather"];
    myH1.textContent = 'Weather: ' + weather[0].main;
    showContent.appendChild(myH1);
    console.log(weather);

    var myPara = document.createElement('p');
    var wind = jsonObj["wind"];
    myPara.textContent = 'Description: ' + weather[0].description;
    showContent.appendChild(myPara);
    console.log(wind.speed);

    knop.addEventListener('click', function() {
    showContent.style.visibility='visible';
    knop.style.visibility='hidden';







    var uitslagen = ["Nee", "Ja"];
    //tekst die na het invullen komt te staan

    //gifje wordt zichtbaar bij druk op knop met CSS visible

    if (weather[0].main = 'Clouds') {
        paragraaf.textContent = uitslagen[0];
        gif.src = 'img/nee.gif';

    } else {
        document.getElementById("actie").innerHTML = uitslagen[1];
        gif.src = "img/ja.gif";
    }
    //wanneer score onder 5 is komt gifje "onvoldoende", wanneer boven 5 en onder 9 komt gifje "twee" en daarboven ben je wijnkenner en krijg je gifje "drie"

//    gif.style.visibility = "visible";

});
}








//var header = document.querySelector('header');
//var section = document.querySelector('section');
//
//var requestURL = 'http://api.openweathermap.org/data/2.5/weather?q=London';
//var request = new XMLHttpRequest();
//
//request.open('GET', requestURL);
//
//request.responseType = 'json';
//request.send();
//
//request.onload = function()  {
//    var Weer = request.response;
//    populateHeader(Weer);
//    showHeroes(Weer);
//}
//
//function populateHeader(jsonObj) {
//    var myH1 = document.createElement('h1');
//    var Weather = jsonObj["weather"];
//    myH1.textContent = Weather[0].main;
//    header.appendChild(myH1);
//    console.log(Weather);


///////////////




//    var myPara = document.createElement('p');
//    myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed ' + jsonObj['formed'];
//    header.appendChild(myPara);


//function showHeroes(jsonObj) {
//    var heroes = jsonObj['members'];
//
//    for (var i = 0; i < heroes.length; i++) {
//    var myArticle = document.createElement('article');
//    var myH2 = document.createElement('h2');
//    var myPara1 = document.createElement('p');
//    var myPara2 = document.createElement('p');
//    var myPara3 = document.createElement('p');
//    var myList = document.createElement('ul');
//
//    myH2.textContent = heroes[i].name;
//    myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
//    myPara2.textContent = 'Age: ' + heroes[i].age;
//    myPara3.textContent = 'Superpowers:';
//
//    var superPowers = heroes[i].powers;
//    for (var j = 0: j < superPowers.length: j++) {
//        var listItem = document.createElement('li');
//        listItem.textContent = superPowers[j];
//        myList.appendChild(listItem);
//    }
//
//    myArticle.appendChild(myH2);
//    myArticle.appendChild(myPara1);
//    myArticle.appendChild(myPara2);
//    myArticle.appendChild(myPara3);
//    myArticle.appendChild(myList);
//
//    section.appendChild(myArticle);
//    }
//}
//
//request.responseType = 'json';
//
//request.open('GET', requestURL);
//request.responseType = 'text';
//request.send();
//
//request.onload = function() {
//    var superHeroesText = request.response;
//    var superHeroes = JSON.parse(superHeroesText);
//    populateHeader(superHeroes);
//    showHeroes(superHeroes);
//}
//
//var myJSON = { "name": "Chris", "age": "38"};
//myJSON
//var myString = JSON.stringify(myJSON);
//myString
