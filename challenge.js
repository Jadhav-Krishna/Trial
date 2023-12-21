var s1 = document.querySelector('#s1')
var s2 = document.querySelector('#s2')
var s3 = document.querySelector('#s3')
var ss = document.querySelector('h1')
var rimg = document.querySelector('#rimg')
var lola = 0



s1.addEventListener('click',function(){
    s1.style.color = 'white'
    rimg.setAttribute("src","https://uploads-ssl.webflow.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15e1_Project-p-1080.jpg")
    console.log("s1")
})
s2.addEventListener('click',function(){
    s2.style.color = 'white'
    rimg.setAttribute("src","https://uploads-ssl.webflow.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d0_Project.webp")
    console.log("s2")

})
s3.addEventListener('click',function(){
    s3.style.color = 'white'
    rimg.setAttribute("src","https://uploads-ssl.webflow.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15cd_Execution-p-1080.jpg")
    console.log("s3")

})