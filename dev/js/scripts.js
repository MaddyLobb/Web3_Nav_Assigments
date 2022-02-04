import { setupMenu } from "./slideMenu"
import { barTL } from "./barsEnter"
import { burgerTL } from "./burgerAnimation"
import { mobileMenuEnter } from "./mobileMenu";
import { displayWindowSizeMobile } from "./mobileResize";
//import { mobileMenuAnimation } from "./mobileAnimation";

var burgerButton = document.querySelector("#burger");
let canISeeMenu = false;

function openCloseMenu(){
    if(canISeeMenu === false){
        burgerTL.play();
        mobileMenuEnter.play();
        //mobileMenuAnimation.play();
        canISeeMenu = true;
    }else{
        burgerTL.reverse();
        mobileMenuEnter.reverse();
        //mobileMenuAnimation.reverse();
        canISeeMenu = false;
    }
}

burgerButton.addEventListener("click", openCloseMenu);


// burgerButton.addEventListener("click", () =>{
//     //console.log("burger clicked");
//     burgerTL.play();
// });


window.addEventListener('load', function () {
    console.log("load");
    setupMenu();
    barTL.play();
});

//window.addEventListener("click", mobileMenuAnimation);

window.addEventListener('resize', displayWindowSizeMobile);

window.addEventListener('load', displayWindowSizeMobile);

