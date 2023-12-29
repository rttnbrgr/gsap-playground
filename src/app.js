// import { gsap } from "gsap";

// console.log("hi");

// setTimeout(function () {
//   console.log("Executed after 1 second");
// }, 1000);

//rotate and move elements with a class of "box" ("x" is a shortcut for a translateX() transform) over the course of 1 second.
// gsap.to(".box.orange", { x: 300, duration: 1, repeat: 3, repeatDelay: 3 }); // runs out of time?
// gsap.to(".box.blue", { rotation: 180, x: 30, duration: 1 }); // runs out of time?
// gsap.to(".box.green", { y: 300, duration: 1 }); // runs out of time?

// document.addEventListener("DOMContentLoaded", event => {
//   console.log("DOM fully loaded and parsed");
//   setTimeout(function () {
//     console.log("Executed after 1 second");
//   }, 2000);
//   gsap.to(".box.orange", { x: 300, duration: 1, repeat: 3, repeatDelay: 3 }); // runs out of time?
//   gsap.to(".box.blue", { rotation: 180, x: 30, duration: 1 }); // runs out of time?
//   gsap.to(".box.green", { y: 300, duration: 1 }); // runs out of time?
// });

// gsap.fromTo(".box.orange", { x: 1 }, { x: 100 }); // runs out of time?

gsap.to(".box.orange", { x: 200, repeat: 2 }); // runs out of time?

// setTimeout(function () {
//   console.log("Executed after 1 second");
// }, 1000);
