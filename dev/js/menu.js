import { gsap } from "gsap";

const growTL = new gsap.timeline();
growTL.to("#hiddenMenuLink",{duration:0.5, alpha: 0});

export const navTL = new gsap.timeline({paused:true});


navTL.add(growTL,"burger")