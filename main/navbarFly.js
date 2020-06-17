let navbar = document.body.querySelector('.navbar')
let header = document.body.querySelector('header')

function scrollingBar(){
    
    // alert(window.pageYOffset)
    if(document.body.clientWidth + 16 <= 768) return;
 
    if(  ( window.pageYOffset >= (header.scrollHeight /1.5) ) ) {
        navbar.classList.add('navbar-scroll');
    }
    else if( ( window.pageYOffset <= (header.scrollHeight ) ) ){
        navbar.classList.remove('navbar-scroll');
    }
}


window.onscroll = scrollingBar;
