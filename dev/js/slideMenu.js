// import { mobileMenuEnter } from "./mobileMenu";
// import { burgerTL } from "./burgerAnimation"
// import { canISeeMenu } from "./scripts"

let rightSide = document.querySelectorAll(".nav-rightSide");
let buttons = document.querySelectorAll(".nav-container aside");
let currentIndex =  -1;

export function setupMenu(){
    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
            // console.log("clicl");
            // if(canISeeMenu === false){
            //     burgerTL.play();
            //     mobileMenuEnter.play();
            //     canISeeMenu = true;
            // }else{
            //     burgerTL.reverse();
            //     mobileMenuEnter.reverse();
            //     canISeeMenu = false;
            // }
    

            //console.log(currentIndex + "this is current index");

            // if(currentIndex != -1){
            //     //console.log("shrink");
            //     rightSide[currentIndex].classList.remove("active");
            // }

            // currentIndex = i;
            // rightSide[i].classList.add("active"); 

        })
        
    })

    // this allows the hero to be clickable so that you can close the nav all together
    let main = document.querySelector("#hero");

    main.addEventListener("click", () => {
        rightSide[currentIndex].classList.remove("active");

        currentIndex = -1;
    })
}