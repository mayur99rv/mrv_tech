//animation transition starts

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1.5, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 0.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 0.75 }, "-=0.5");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 2 });

//animation transition ends
const allDivs = document.querySelectorAll("div.tags");
const lastview = document.querySelector(".view-3");
const headImg = document.querySelector(".img img");
function change() {
  allDivs.forEach((tag, index) => {
    setTimeout(function () {
      allDivs.forEach((di) => {
        di.classList.remove("active1");
        // di.style.animation = `none`;
      });
      tag.classList.add("active1");
      // headImg.src = `./${tag.dataset.imgsrc}.jpg`;
    }, 1000 * `${tag.dataset.delay}`);
  });

  // setInterval(change, 15000);
}

function last() {
  lastview.style.display = "block";
  lastview.classList.remove("active1");
}

change();
setTimeout(last, 15000);

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

var t = gsap.timeline({
  scrollTrigger: {
    trigger: ".part-2",
    start: "0% 65%",
    end: "60% 40%",
    //     markers: true,
    scrub: 0.5,
    immediateRender: false,
    // pin:'.phone'
  },
});

t.from(".part-2 div h3", { opacity: 0, x: -150 });
t.from(".part-2 div p", { opacity: 0, x: 150 });

t.from(".part-2 div img", {
  opacity: 0,
  x: -150,
  clipPath: "polygon(0% 0%, 0% 0%, 0% 0%, 0% 100%)",
}),
  "0";

var t3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".logo",
    start: "25% 40%",
    end: "50% 10%",
    //     markers: true,
    scrub: 1,
    immediateRender: false,
    // pin:'.phone'
  },
});
t3.from(".logo", { opacity: 0, scale: 2 });
t3.from(".part-3 div h3", { opacity: 0, x: -150 });
t3.from(".part-3 div p", { opacity: 0, x: 150 }), "-=1.5";
var t4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".part-3 div img.left",
    start: "0% 40%",
    end: "70% 10%",
    //     markers: true,
    scrub: 0.5,
    immediateRender: false,
    // pin:'.phone'
  },
});

t4.from(".part-3 div img.left", {
  opacity: 1,
  x: -150,
  clipPath: "polygon(0% 0%, 0% 0%, 0% 0%, 0% 100%)",
});
t4.from(".part-3 div img.right", {
  opacity: 0,
  x: 150,
  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 0%)",
});

var t5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".part-4",
    start: "0% 40%",
    end: "30% 30%",
    //     markers: true,
    scrub: 0.5,
    immediateRender: false,
    // pin:'.phone'
  },
});
t5.from(".part-4 img", {
  opacity: 0,
  x: -150,
  clipPath: "polygon(0% 0%, 0% 0%, 0% 0%, 0% 100%)",
});
t5.from(".part-4 p", { opacity: 0, x: -150 });
t5.from(".part-4 h3", { opacity: 0, x: -150 });

const bgs = document.querySelectorAll(".bg");

const options = {
  root: null,
  threshold: 0.5,
  rootMargin: "10px 0px -100px 0px",
};

observer2 = new IntersectionObserver((entr, observer2) => {
  entr.forEach((entry) => {
    if (entry.isIntersecting) {
      document.body.style.backgroundColor = `${entry.target.dataset.bgg}`;
    }
  });
}, options);

bgs.forEach((bg) => {
  observer2.observe(bg);
});
