var bulb = document.querySelector('#bulb')
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
})


//page1


var a = document.querySelector('#page1 #card h2')
var b = document.querySelector('#page1 #card button')
var boat = 0

b.addEventListener('click',function(){
  if(boat===0){
    setTimeout(function(){
      a.innerHTML='Friends'
      a.style.color='green'
      b.innerHTML='Remove friend'
    },5000)
    a.innerHTML='Request sending...'
    a.style.color='yellow'
    b.innerHTML='Requesting...'

    boat = 1
  }
  else{
    a.innerHTML='Stranger'
    a.style.color='red'
    b.innerHTML='Add friend'
    boat = 0
  }
})



