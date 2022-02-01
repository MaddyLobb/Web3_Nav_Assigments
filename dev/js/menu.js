import { gsap } from "gsap";

const growTL = new gsap.timeline();
growTL.to("#about",{duration:0.5, scaleX: 70});

export const navTL = new gsap.timeline({paused:true});


navTL.add(growTL,"burger")