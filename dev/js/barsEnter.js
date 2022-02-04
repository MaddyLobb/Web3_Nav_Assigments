import { gsap } from "gsap";

const barTL = new gsap.timeline();
barTL.from(".nav-container", {duration:0.5, y: -920});
barTL.to(".nav-container", {duration:5, y:0, stagger: {each: 1,  ease: "power1.inOut"} });

export const navTL = new gsap.timeline;

navTL.add(barTL,"bars")
//stagger not performing //

