import { gsap } from "gsap";

const growTL = new gsap.timeline();
growTL.to("#rectangle1",{duration:0.5, scaleX: 2});

export const navTL = new gsap.timeline({paused:true});


navTL.add(growTL,"burger")