import { gsap } from "gsap";

export function displayWindowSizeMobile(){

    let menu = document.querySelector(".fullnav");
    let menuHeight = menu.offsetHeight;

    console.log(menuHeight);

    if(document.documentElement.clientWidth <= 768){
        console.log("hide");
        gsap.set(".fullnav", {y: -menuHeight})
    }else{
        console.log("un-hide");
        gsap.set(".fullnav",{y:0});
    }

}