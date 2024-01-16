

var load = document.querySelector("#loader")
var circle = document.querySelector("#circle")
var h = document.querySelector("#sigh")
circle.addEventListener("mouseenter", function () {
    setTimeout(function () {
        circle.style.border = "none"
        circle.style.boxShadow = "5px 0px 5px red"
        h.innerHTML = "Enter"
    }, 1500)
    setTimeout(function () {
        circle.style.boxShadow = "5px 0px 5px blue"
        circle.style.animation = "rotate"
    }, 700)
    h.style.color = "red"
    h.innerHTML = "Move"
    h.style.color = "white"
})
load.addEventListener("click",function(dets){
        load.style.display = 'none'
        load.style.transition = 'all ease 0.5s'
})

Shery.makeMagnet("#cursor" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });











