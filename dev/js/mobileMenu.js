import { gsap } from "gsap"; 



export const mobileMenuEnter = new gsap.timeline({paused: true});

mobileMenuEnter.to(".fullnav", {duration:0.5, y:0, x:0})
                // .to(".nav-container", {duration: 0.5, alpha:1, stagger:0.25});