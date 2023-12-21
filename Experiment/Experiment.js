/* var bulb = document.querySelector('#bulb')
var button = document.querySelector('#btn')
var flag = 0

button.addEventListener('click',function(){
    if(flag===0){
      bulb.style.backgroundColor ='yellow'
      bulb.style.boxShadow ='0 0 100px yellow'
      flag = 1
    }
    else{
        bulb.style.backgroundColor ='transparent'
        bulb.style.boxShadow ='none'
        flag = 0
      }
})*/


//================= page 1 ===============


/* var a = document.querySelector('#page1 #card h2')
var b = document.querySelector('#page1 #card button')
var boat = 0

b.addEventListener('click',function(){
  if(boat===0){
    setTimeout(function(){
      a.innerHTML='Friends 💕'
      a.style.color='green'
      b.innerHTML='Remove friend'
    },5000)
    a.innerHTML='Request sending...'
    a.style.color='gold'
    b.innerHTML='Requesting...'
    boat = 1
  }
  else{
    a.innerHTML='Stranger 💔'
    a.style.color='red'
    b.innerHTML='Add friend'
    boat = 0
  }
}) */


//================= page 2 ==============


/*  var page2 = document.querySelector('#page2')
var head = document.querySelector('h1')
var cur = document.querySelector('#cursor')
page2.addEventListener('mousemove',function(xnxx){
  cur.style.left = xnxx.x+'px'
  cur.style.top = xnxx.y+'px'
})
head.addEventListener('mouseenter',function(){
  cur.style.scale=3
})
head.addEventListener('mouseleave',function(){
  cur.style.scale=1
}) */




var tl = gsap.timeline({
  scrollTrigger:{
    trigger:'#page3',
    scroller:'body',
    pin:true,
    markers:true,
    start:'top top',
    scrub:'2'
  }})
tl
.to('#page3 img',{
  left:'-100%'
})


var tl2 = gsap.timeline({
  scrollTrigger:{
    trigger:'#page3',
    scroller:'body',
    pin:true,
    markers:true,
    start:'10% top',
    scrub:'2'
  }})
tl2
.to('#page3 #orange',{
  display:'initial'
})