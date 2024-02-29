function loader() {
  var load = document.querySelector("#loader");
  var circle = document.querySelector("#circle");
  var h = document.querySelector("#sigh");
  circle.addEventListener("mouseenter", function () {
    setTimeout(function () {
      circle.style.border = "none";
      circle.style.boxShadow = "5px 0px 5px red";
      h.innerHTML = "Enter";
    }, 1500);
    setTimeout(function () {
      circle.style.boxShadow = "5px 0px 5px blue";
      circle.style.animation = "rotate";
    }, 700);
    h.style.color = "red";
    h.innerHTML = "Move";
    h.style.color = "white";
  });
  load.addEventListener("click", function (dets) {
    load.style.display = "none";
    load.style.transition = "all ease 0.5s";
  });
}
loader();

// Shery.mouseFollower();

function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    // follwoing line is not required to work pinning on touch screen

    /* pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed"*/
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
locomotive();

var tl = gsap.timeline();
tl.from("#page1 #y1", {
  delay: 5,
  y: 200,
  duration: 1,
  opacity: 0,
});

// tl.from("#page2 #tyre",{
//     duration: 1,
//     opacity: 0,
//     scrollTrigger:{
//         scroll:"#main",
//         trigger: "#page2 #tyre",
//         start: "top 10%",
//         markers:true,
//         end: "bottom 10%",
//         scrub: 2,
//     }
// })

// Shery.makeMagnet("#page1 h1" /* Element to target.*/, {
//   //Parameters are optional.
//   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//   duration: 1,
// });
