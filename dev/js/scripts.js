import { setupMenu } from "./slideMenu"
import { barTL } from "./barsEnter"
import { burgerTL } from "./burgerAnimation"
import { mobileMenuEnter } from "./mobileMenu";
import { displayWindowSizeMobile } from "./mobileResize";
import { mobileTopicAnimation } from "./mobileTopicClickAnimation";

var burgerButton = document.querySelector("#burger");
export var canISeeMenu = false;

function openCloseMenu(){
    if(canISeeMenu === false){
        burgerTL.play();
        mobileMenuEnter.play();
        canISeeMenu = true;
    }else{
        burgerTL.reverse();
        mobileMenuEnter.reverse();
        canISeeMenu = false;
    }
}

burgerButton.addEventListener("click", openCloseMenu);

// let buttons = document.querySelectorAll(".nav-container aside");
var mobilNav = document.querySelectorAll(".nav-container")
mobilNav.addEventListener("click", openCloseMenu);

window.addEventListener('load', function () {
    console.log("load");
    setupMenu();
    mobileTopicAnimation();
    barTL.play();
});

//window.addEventListener('resize', mobileTopicAnimation);

// window.addEventListener('click', mobileTopicAnimation);

window.addEventListener('resize', displayWindowSizeMobile);

window.addEventListener('load', displayWindowSizeMobile);

