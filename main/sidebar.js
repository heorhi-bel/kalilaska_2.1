"use strict"

let navbar = document.body.querySelector('.navbar')


function sideBar(event){
    console.log(event.target.className)
    console.log(event.target.className == 'option-icon')

    if(event.target.className != 'option-icon') return;

    navbar.classList.toggle('navbar-open')
}


window.onclick = sideBar;