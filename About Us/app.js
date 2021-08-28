gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

// nav bar starts
const nav = () => {
  const burger = document.querySelector(".burger");
  const navbar = document.querySelector(".nav-links");
  const navlinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    navbar.classList.toggle("nav-active");

    navlinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navlinkfade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    burger.classList.toggle("tog");
  });
};

nav();
// nav bar ends

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".head",
    start: "30% 30%",
    end: "60% 30%",
    // markers: true,
    scrub: 1,
    immediateRender: false,
    // pin:'.phone'
  },
});
var iphone = document.querySelector(".phone img");
var ip = iphone.offsetHeight;
let desktop = window.matchMedia("(min-width: 800px)").matches;
var minus = desktop ? 110 : 20;
tl.from("body", { backgroundColor: "#fff", color: "black" });
tl.set(".phone", { scale: 1, opacity: 0 });

tl.fromTo(".phone", { scale: 1.75, opacity: 0.7 }, { opacity: 1, scale: 1 });

tl.to("body", { backgroundColor: "#151416" });
// tl.to('.head',0.1, {color:'#fff'},'-=0.5');
tl.to(".head h4, .head h3", { color: "#fff", y: "25vh" }, "-=0.5");
tl.to(
  ".phone",
  { scale: 1, alpha: 1, opacity: 1, transformOrigin: "center" },
  "-=.5"
);
tl.set(".container", { scale: 1, height: `${ip ? ip - minus : 510}px` });
tl.from(".container", { scale: 0, opacity: 0 }, "+=0.5");
tl.from(".container h1", {
  scale: 1,
  opacity: 0,
  xPercent: -100,
  stagger: 0.3,
});
tl.from(
  ".container p",
  { scale: 0, opacity: 0, x: -50, stagger: 0.3 },
  "-=0.5"
);

// gsap.to(".head", {
//   opacity: 0,
//   transformOrigin: "center",
//   scrollTrigger: {
//     trigger: ".phone",
//     start: "70% 30%",
//     end: "bottom 30%",
//     markers: true,
//     immediateRender: false,
//     scrub: true,
//   },
// });
var mob = desktop ? 0 : -10;
var x = document.getElementById("metalHead").querySelectorAll("path");
var y = document.getElementById("mask").querySelectorAll("path");
var t3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".meet-team",
    start: `${mob}% 10%`,
    end: "+=500 0%",
    pin: ".meet-team",
    pinSpacing: true,
    // markers: true,
    scrub: 1,
  },
});
t3.set(".meet-team .title h1", { alpha: 0, scale: 2 });
t3.fromTo(
  ".meet-team .title h1",
  { y: "20vh", alpha: 0.9 },
  { scale: 1, y: 0, alpha: 1, transformOrigin: "center" }
);
t3.fromTo(
  ".meet-team .title h3",

  { scale: 0.5, alpha: 0 },
  { scale: 1.1, y: 0, alpha: 0.8, transformOrigin: "center" },
  "-=0.5"
);
t3.fromTo(
  ".ironman",

  { scale: 0.1, alpha: 0 },
  { scale: 1, y: 0, alpha: 1, transformOrigin: "center" }
);
t3.from(x, { stagger: 0.09, alpha: 0, x: -100 });
t3.from(y, { stagger: 0.09, alpha: 0, x: 100 }, "-=1");
t3.to("#eyes path", { alpha: 1, fill: "#fff" }, "-=0.25");
t3.fromTo(
  ".card-list",
  { alpha: 0, scale: 1, xPercent: 30 },
  { alpha: 1, scale: 1, xPercent: 0 },
  "-=2.5"
);
