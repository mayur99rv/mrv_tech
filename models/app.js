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

const i1 = document.querySelector(".i1").dataset.change;
const i2 = document.querySelector(".i2").dataset.change;
const i3 = document.querySelector(".i3").dataset.change;
const i4 = document.querySelector(".i4").dataset.change;
const i5 = document.querySelector(".i5").dataset.change;
// t.set(".img-cover img", { attr: { src: `${i1.dataset.change}.jpg` } });
gsap.set(".img-cover img", {
  scrollTrigger: {
    trigger: ".pages .i1",
    toggleActions: "play reset reset reset",
    // markers: true,
    start: "10% 0%",
    end: "50% 0%",
  },
  attr: { src: i1 },
});
gsap.set(".img-cover img", {
  scrollTrigger: {
    trigger: ".pages .i2",
    toggleActions: "play reset reset reset",
    start: "10% 0%",
    end: "50% 0%",
  },
  attr: { src: i2 },
});
gsap.set(".img-cover img", {
  scrollTrigger: {
    trigger: ".pages .i3",
    start: "10% 30%",
    end: "50% 30%",
    toggleActions: "play reset reset reset",
  },
  attr: { src: i3 },
});
gsap.set(".img-cover img", {
  scrollTrigger: {
    trigger: ".pages .i4",
    start: "10% 30%",
    end: "50% 30%",
    toggleActions: "play reset reset reset",
  },
  attr: { src: i4 },
});
gsap.set(".img-cover img", {
  scrollTrigger: {
    trigger: ".pages .i5",
    start: "10% 30%",
    end: "50% 30%",
    toggleActions: "play reset reset reset",
  },
  attr: { src: i5 },
});

var t2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".screen",
    start: "0% 8%",
    end: "+=1000 0%",
    pin: ".screen",
    pinSpacing: true,
    scrub: 0.7,
    // markers: true,
    immediateRender: false,
  },
});

t2.fromTo(
  ".controller .video video",
  2,
  { height: 0, width: "100%" },
  { height: "100%", width: "100%", transformOrigin: "center center" }
);
t2.fromTo(
  ".gamepad",
  1,
  { scale: 1, yPercent: 0 },
  { scale: 1.75, yPercent: 0, transformOrigin: "top center" },
  "-=1.5"
);
t2.fromTo(
  ".controller .video video",
  2,
  { scale: 2, yPercent: -0 },
  { scale: 1, yPercent: 0, transformOrigin: "center center" }
);
t2.fromTo(
  ".gamepad",
  1,
  { scale: 1.75, yPercent: 0 },
  { scale: 1, yPercent: 0, transformOrigin: "top center" },
  "-=1"
);
t2.fromTo(
  ".gamepad .left",
  1.5,
  { yPercent: -50, alpha: 0 },
  { yPercent: 0, alpha: 1 },
  "-=0.25"
);
t2.fromTo(
  ".gamepad .right",
  1.5,
  { yPercent: 50, alpha: 0 },
  { yPercent: 0, alpha: 1 },
  "-=1.5"
);
t2.fromTo(".screen .philo h2", 0.6, { y: 100, alpha: 0 }, { y: 0, alpha: 1 });
t2.fromTo(
  ".screen .philo p",
  0.6,
  { yPercent: 100, alpha: 0 },
  { yPercent: 0, alpha: 1 }
);
