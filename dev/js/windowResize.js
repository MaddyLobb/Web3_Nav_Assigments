import { gsap } from "gsap";

// gsap.set("nav",{right:0});

export function displayWindowSize(){

    let menu = document.querySelector("#nav-container");
    let menuWidth = menu.offsetWidth;

    // check the view port view and see if the menu needs to be moved
    if(document.documentElement.clientWidth <= 1024){
        console.log("hide");
        gsap.set("#nav-container",{y:-menuWidth});
    }else{
        console.log("un-hide");
        gsap.set("#nav-container",{y:0});
    }
}