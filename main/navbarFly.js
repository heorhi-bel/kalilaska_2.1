let navbar2 = document.body.querySelector('.navbar')
let header = document.body.querySelector('header')

function scrollingBar(){
    
    // alert(window.pageYOffset)
    if(document.body.clientWidth + 16 <= 768) return;
 
    if(  ( window.pageYOffset >= (header.scrollHeight /1.5) ) ) {
        navbar2.classList.add('navbar-scroll');
    }
    else if( ( window.pageYOffset <= (header.scrollHeight ) ) ){
        navbar2.classList.remove('navbar-scroll');
    }
}


window.addEventListener('scroll', scrollingBar ) ;
