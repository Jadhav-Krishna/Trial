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

var main = document.querySelector('#main')
var head = document.querySelector("#y1")
var cur = document.querySelector('#cursor')
main.addEventListener('mousemove', function (xnxx) {
    cur.style.left = xnxx.x + 'px'
    cur.style.top = xnxx.y + 'px'
})
head.addEventListener('mouseenter', function () {
    cur.style.scale = 3
})
head.addEventListener('mouseleave', function () {
    cur.style.scale = 1
})
var main = document.querySelector('#main')
var head = document.querySelector("#ph5")
var cur = document.querySelector('#cursor')
main.addEventListener('mousemove', function (xnxx) {
    cur.style.left = xnxx.x + 'px'
    cur.style.top = xnxx.y + 'px'
})
head.addEventListener('mouseenter', function () {
    cur.style.scale = 3
})
head.addEventListener('mouseleave', function () {
    cur.style.scale = 1
})

var img = document.querySelector('#main .dic')
img.addEventListener('mouseenter', function () {
    cur.style.scale = 3
    cur.style.backgroundColor = 'white'
    cur.textContent = 'Discover'
})
img.addEventListener('mouseleave', function () {
    cur.style.scale = 1
    cur.textContent = ''
})
var img1 = document.querySelector('#main .dic1')
img1.addEventListener('mouseenter', function () {
    cur.style.scale = 3
    cur.style.backgroundColor = 'white'
    cur.textContent = 'Discover'
})
img1.addEventListener('mouseleave', function () {
    cur.style.scale = 1
    cur.textContent = ''
})
var img2 = document.querySelector('#main .ll')
img2.addEventListener('mouseenter', function () {
    cur.style.scale = 3
    cur.style.backgroundColor = 'white'
    cur.textContent = 'Discover'
})
img2.addEventListener('mouseleave', function () {
    cur.style.scale = 1
    cur.textContent = ''
})