import { gsap } from "gsap"; 

export const mobileSquaresFadeIn = new gsap.timeline({paused: true});

 mobileSquaresFadeIn.from(".nav-container", {duration: 0.5, alpha:0, stagger:0.25});