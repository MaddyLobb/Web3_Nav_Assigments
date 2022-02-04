//import { gsap } from "gsap"; 
import { mobileSquaresFadeIn } from "./mobileFadeIn";

// export const mobileMenuAnimation = new gsap.timeline({paused: true});

// mobileMenuAnimation.from(".nav-container", {duration: 0.5, alpha:0, stagger:0.25});


                   //.to(".nav-container", {duration: 0.5, alpha:1, stagger:-0.25});

export function mobileMenuAnimation(){

    //let animation = document.querySelector(".nav-container");
        //let menuHeight = menu.offsetHeight;
                
            if(document.documentElement.clientWidth <= 768){
                console.log("pause");
                mobileSquaresFadeIn.reverse();
            }else{
                console.log("play");
                mobileSquaresFadeIn.play();
            }
                
}