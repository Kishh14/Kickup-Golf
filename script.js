const cursor = document.getElementById("cursor");
const blurredCursor = document.getElementById("cursor-blur");

document.addEventListener("mousemove", (event) => {
  cursor.style.left = event.x + "px";
  cursor.style.top = event.y + "px";

  console.log(event.x - 150);
  blurredCursor.style.left = event.x - 150 + "px";
  blurredCursor.style.top = event.y - 150 + "px";
});

let buttonsAndLinks = document.querySelectorAll(".nav-links a, button");
buttonsAndLinks.forEach((elm) => {
  elm.addEventListener("mouseenter", () => {
    cursor.style.scale = 2;
    cursor.style.border = "1px solid white";
    cursor.style.backgroundColor = "transparent";
  });
  elm.addEventListener("mouseleave", () => {
    cursor.style.scale = 1;
    cursor.style.border = "none";
    cursor.style.backgroundColor = "#ade023";
  });
});

gsap.to("nav", {
  backgroundColor: "#000",
  height: "90px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "nav",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("main, #page2", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "main, #page2",
    scroller: "body",
    // markers: true,
    start: "top -30%",
    end: "top -60%",
    scrub: 2,
  },
});

gsap.from("#about-us img, #about-us-text", {
  y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    start: "top 70%",
    end: "top 50%",
    scrub: 2,
    // markers: true,
  },
});

gsap.from(".card", {
  scale: 0.9,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    start: "top 60%",
    end: "top 50%",
    scrub: 1,
    // markers: true,
  },
});

gsap.from("#left-colon", {
  y: -70,
  x: -70,
  duration: 1,
  scrollTrigger: {
    trigger: "#left-colon",
    scroller: "body",
    // markers: true,
    start: "top 45%",
    end: "top 30%",
    scrub: 3,
  },
});

gsap.from("#right-colon", {
  y: 70,
  x: 70,
  duration: 1,
  scrollTrigger: {
    trigger: "#right-colon",
    scroller: "body",
    // markers: true,
    start: "top 85%",
    end: "top 100%",
    scrub: 3,
  },
});

gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    // markers: true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});
