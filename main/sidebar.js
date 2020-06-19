"use strict"

let navbar = document.body.querySelector('.navbar')


function sideBar(event){
    
    if(event.target.className != 'option-icon') return;

    navbar.classList.toggle('navbar-open')
}


window.onclick = sideBar;