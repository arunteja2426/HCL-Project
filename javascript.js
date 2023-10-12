let homePage = document.getElementById("homeContainer");
let buttonElement = document.getElementById("homeButton");
let statesPage = document.getElementById("statesPage");

buttonElement.onclick = function() {
    statesPage.classList.remove("none");
    statesPage.classList.add("block");
    homePage.classList.remove("block");
    homePage.classList.add("none");
};

let statesPageButton = document.getElementById("statesPageButton");

statesPageButton.onclick = function() {
    statesPage.classList.remove("block");
    statesPage.classList.add("none");
    homePage.classList.remove("none");
    homePage.classList.add("block");
};

let backIcon = document.getElementById("backIcon");

backIcon.onclick = function() {
    statesPage.classList.remove("block");
    statesPage.classList.add("none");
    homePage.classList.remove("none");
    homePage.classList.add("block");
};

let goaCont = document.getElementById("goaCont");
let keralaCont = document.getElementById("keralaCont");
let karnatakaCont = document.getElementById("karnatakaCont");
let telanganaCont = document.getElementById("telanganaCont");
let andhraCont = document.getElementById("andhraCont");
let jammuCont = document.getElementById("jammuCont");
let goaPage = document.getElementById("goaPage");

goaCont.onclick = function() {
    statesPage.classList.remove("block");
    statesPage.classList.add("none");
    goaPage.classList.remove("none");
    goaPage.classList.add("block");
}

let goaBackIcon = document.getElementById("goaBackIcon");

goaBackIcon.onclick = function() {
    statesPage.classList.remove("none");
    statesPage.classList.add("block");
    goaPage.classList.remove("block");
    goaPage.classList.add("none");
};

let goaBackButton = document.getElementById("goaBackButton");

goaBackButton.onclick = function() {
    statesPage.classList.remove("none");
    statesPage.classList.add("block");
    goaPage.classList.remove("block");
    goaPage.classList.add("none");
};

let keralaPage = document.getElementById("keralaPage");
let keralaBackButton = document.getElementById("keralaBackButton");
let keralaBackIcon = document.getElementById("keralaBackIcon");

keralaCont.onclick = function() {
    statesPage.classList.remove("block");
    statesPage.classList.add("none");
    keralaPage.classList.remove("none");
    keralaPage.classList.add("block");
};

keralaBackIcon.onclick = function() {
    statesPage.classList.remove("none");
    statesPage.classList.add("block");
    keralaPage.classList.remove("block");
    keralaPage.classList.add("none");
};

keralaBackButton.onclick = function() {
    statesPage.classList.remove("none");
    statesPage.classList.add("block");
    keralaPage.classList.remove("block");
    keralaPage.classList.add("none");
};

let karnatakaPage = document.getElementById("karnatakaPage");
let karnatakaBackButton = document.getElementById("karnatakaBackButton");
let karnatakaBackIcon = document.getElementById("karnatakaBackIcon");

karnatakaCont.onclick = function() {
    statesPage.classList.remove("block");
    statesPage.classList.add("none");
    karnatakaPage.classList.remove("none");
    karnatakaPage.classList.add("block");
};

karnatakaBackIcon.onclick = function() {
    statesPage.classList.remove("none");
    statesPage.classList.add("block");
    karnatakaPage.classList.remove("block");
    karnatakaPage.classList.add("none");
};

karnatakaBackButton.onclick = function() {
    statesPage.classList.remove("none");
    statesPage.classList.add("block");
    karnatakaPage.classList.remove("block");
    karnatakaPage.classList.add("none");
};

let telanganaPage = document.getElementById("telanganaPage");
let telanganaBackButton = document.getElementById("telanganaBackButton");
let telanganaBackIcon = document.getElementById("telanganaBackIcon");

telanganaCont.onclick = function() {
    statesPage.classList.remove("block");
    statesPage.classList.add("none");
    telanganaPage.classList.remove("none");
    telanganaPage.classList.add("block");
};

telanganaBackIcon.onclick = function() {
    statesPage.classList.remove("none");
    statesPage.classList.add("block");
    telanganaPage.classList.remove("block");
    telanganaPage.classList.add("none");
};

telanganaBackButton.onclick = function() {
    statesPage.classList.remove("none");
    statesPage.classList.add("block");
    telanganaPage.classList.remove("block");
    telanganaPage.classList.add("none");
};

let andhraPage = document.getElementById("andhraPage");
let andhraBackButton = document.getElementById("andhraBackButton");
let andhraBackIcon = document.getElementById("andhraBackIcon");

andhraCont.onclick = function() {
    statesPage.classList.remove("block");
    statesPage.classList.add("none");
    andhraPage.classList.remove("none");
    andhraPage.classList.add("block");
};

andhraBackIcon.onclick = function() {
    statesPage.classList.remove("none");
    statesPage.classList.add("block");
    andhraPage.classList.remove("block");
    andhraPage.classList.add("none");
};

andhraBackButton.onclick = function() {
    statesPage.classList.remove("none");
    statesPage.classList.add("block");
    andhraPage.classList.remove("block");
    andhraPage.classList.add("none");
};

let jammuPage = document.getElementById("jammuPage");
let jammuBackButton = document.getElementById("jammuBackButton");
let jammuBackIcon = document.getElementById("jammuBackIcon");

jammuCont.onclick = function() {
    statesPage.classList.remove("block");
    statesPage.classList.add("none");
    jammuPage.classList.remove("none");
    jammuPage.classList.add("block");
};

jammuBackIcon.onclick = function() {
    statesPage.classList.remove("none");
    statesPage.classList.add("block");
    jammuPage.classList.remove("block");
    jammuPage.classList.add("none");
};

jammuBackButton.onclick = function() {
    statesPage.classList.remove("none");
    statesPage.classList.add("block");
    jammuPage.classList.remove("block");
    jammuPage.classList.add("none");
};