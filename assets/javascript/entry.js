import '../css/app.scss';

import './maps';

import './slider';

let btns = [".hide-menu",".hide-menu-home",".hide-menu-about",".hide-menu-menu",
".hide-menu-contact",".hide-menu-gallery"];


document.querySelector(".btn").addEventListener("click",function(){
  document.querySelector(".munchies-screen").classList.add("active");
})

document.querySelector(".exit").addEventListener("click",function(){
  document.querySelector(".munchies-screen").classList.remove("active");
})

document.querySelector(".menu-icon").addEventListener("click",function(){
  document.querySelector(".menu-vertical").classList.add("show-menu");
})

document.querySelector(".hide-menu").addEventListener("click",function(){
  document.querySelector(".menu-vertical").classList.remove("show-menu");
})

document.querySelector(".hide-menu-home").addEventListener("click",function(){
  document.querySelector(".menu-vertical").classList.remove("show-menu");
})

document.querySelector(".hide-menu-about").addEventListener("click",function(){
  document.querySelector(".menu-vertical").classList.remove("show-menu");
})

document.querySelector(".hide-menu-menu").addEventListener("click",function(){
  document.querySelector(".menu-vertical").classList.remove("show-menu");
})

document.querySelector(".hide-menu-contact").addEventListener("click",function(){
  document.querySelector(".menu-vertical").classList.remove("show-menu");
})

document.querySelector(".hide-menu-gallery").addEventListener("click",function(){
  document.querySelector(".menu-vertical").classList.remove("show-menu");
})



var eventArray = new Array;

for(var i = 0; i < eventArray.length; i++) {
       eventArray[i].addEventListener("click", bindClick(i));
 }

 function bindClick(i) {
    return function() {
        console.log("you clicked region number " + i);
    };
 }
