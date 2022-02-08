import { setupMenu } from "./slideMenu"
import { barTL } from "./barsEnter"
import { burgerTL } from "./burgerAnimation"
import { mobileMenuEnter } from "./mobileMenu";
import { displayWindowSizeMobile } from "./mobileResize";
import { mobileTopicAnimation } from "./mobileTopicClickAnimation";

var burgerButton = document.querySelector("#burger");
let canISeeMenu = false;

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

// if(document.documentElement.clientWidth <= 768){
//     mobileSquaresFadeIn.play();
// }
// burgerButton.addEventListener("click", () =>{
//     //console.log("burger clicked");
//     burgerTL.play();
// });


window.addEventListener('load', function () {
    console.log("load");
    setupMenu();
    mobileTopicAnimation();
    barTL.play();
});

// window.addEventListener('resize', mobileTopicAnimation);

// window.addEventListener('click', mobileTopicAnimation);

window.addEventListener('resize', displayWindowSizeMobile);

window.addEventListener('load', displayWindowSizeMobile);

