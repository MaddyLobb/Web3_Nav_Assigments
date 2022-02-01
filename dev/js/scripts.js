import { navTL } from "./menu";
import {menuAnimation} from "./mobileMenu.js"
import {scrollPage} from "./pageScroll"
import { displayWindowSize } from "./mobileResizing"

var burgerButton = document.querySelector("#burger");


burgerButton.addEventListener("click",() =>{

    navTL.play();

        // if(canISeeMenu === false){
        //     navTL.play();
        //     menuAnimation.play();
        //     canISeeMenu = true;
        // }else{
        //     navTL.reverse();
        //     menuAnimation.reverse();
        //     canISeeMenu = false;
        // }

});



// let canISeeMenu = false;

// function openCloseMenu(){
//     if(canISeeMenu === false){
//         navTL.play();
//         menuAnimation.play();
//         canISeeMenu = true;
//     }else{
//         navTL.reverse();
//         menuAnimation.reverse();
//         canISeeMenu = false;
//     }
// }

// burgerButton.addEventListener("click", openCloseMenu);

// let navButtons = document.querySelectorAll(".nav-btns");

// for (const button of navButtons){
//     button.addEventListener("click", checkScrolling);
//     button.addEventListener("click", openCloseMenu);
// }

// function checkScrolling(e) {
//     const indexValue = [].indexOf.call(navButtons, e.target)
//     if (indexValue != -1) {
//         scrollPage(indexValue);
//     }
// }



// window.addEventListener("resize", displayWindowSize);

// window.addEventListener('load', displayWindowSize);
