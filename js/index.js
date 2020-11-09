const menuHamburger = document.querySelector("#menu-hamburger");
const nav = document.querySelector("#nav");
const containerBanner = document.querySelector(".container-banner");
const divDelimitador = document.createElement("div");
const divImage = document.createElement("div");
const img = document.createElement("img");


divDelimitador.setAttribute("class", "delimitador");
divImage.setAttribute("class", "div-image")
img.src="./images/bg-pattern-mobile-nav.svg";
nav.setAttribute("class", "nav-no-active");
divImage.appendChild(img)
nav.appendChild(divDelimitador)
nav.appendChild(divImage);

if(screen.width <= 450){
    const containerInf = document.querySelector(".container-banner-inf");
    const divPatternMobileLeft = document.createElement("div");
    const divPatternMobileRight = document.createElement("div");

    divPatternMobileLeft.classList.add("intro-mobile-left");
    divPatternMobileRight.classList.add("intro-mobile-right");

    containerInf.appendChild(divPatternMobileLeft);
    containerInf.appendChild(divPatternMobileRight);
    
}


menuHamburger.addEventListener("click", ()=>{

    const header = document.querySelector("#header");
    header.classList.toggle("header-active");
    containerBanner.classList.toggle("banner-active")
    menuHamburger.classList.toggle("menu-hamburger-active");
    nav.classList.toggle("nav-no-active");
    nav.classList.toggle("nav-active");

})