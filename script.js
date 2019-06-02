let menuKnop = document.querySelector(".menu");
let navMenu = document.querySelector("nav");
function toonMenu() {
	if (navMenu.style.display === "flex") {
		navMenu.style.display = "none";
	} else {
		navMenu.style.display = "flex";
	}
}
menuKnop.addEventListener("click",toonMenu);

let darkLink = document.querySelectorAll('a')[4];
let lightLink = document.querySelectorAll('a')[5];
let mijnCSS = document.querySelector("#switchcss");

function switchToLight() {
	mijnCSS.setAttribute("href","stijl-light.css");
}
function switchToDark() {
	mijnCSS.setAttribute("href","stijl-dark.css");
}
lightLink.addEventListener("click",switchToLight);
darkLink.addEventListener("click",switchToDark);

let mijnAfbeeldingen = document.querySelectorAll("img");

console.log("het werkt");

let i = 0;
while (i < mijnAfbeeldingen.length){
mijnAfbeeldingen[i].addEventListener("mouseover", veranderAfb);
mijnAfbeeldingen[i].addEventListener("mouseout", zetAfbTerug);
i++;
}

function veranderAfb() {
var mijnSrc = this.getAttribute("src");
this.setAttribute("src",this.getAttribute("data-rug"));
this.setAttribute("data-rug",mijnSrc);
console.log("mouseover werkt");

}

function zetAfbTerug() {
  var mijnSrc = this.getAttribute("src");
  this.setAttribute("src",this.getAttribute("data-rug"));
  this.setAttribute("data-rug",mijnSrc);
console.log("mouseout werkt");

}
