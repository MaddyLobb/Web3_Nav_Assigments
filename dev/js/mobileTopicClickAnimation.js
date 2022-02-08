// import { gsap } from "gsap";
let rightSide = document.querySelectorAll(".nav-rightSide");
let buttons = document.querySelectorAll(".nav-container aside");
let currentIndex =  -1;

export function mobileTopicAnimation(){

    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {

            //console.log(currentIndex + "this is current index");

            // if(currentIndex != -1 && document.documentElement.clientWidth >= 768){
            //     //console.log("shrink");
            //     rightSide[currentIndex].classList.remove("active-2");
            // }

            // currentIndex = i;
            // rightSide[i].classList.add("active-2"); 

        })
        
    })
}