function scrollingBar(){
    let navbar = document.body.querySelector('.navbar')
    let header = document.body.querySelector('header')
    alert(header.scrollHeight)
    alert(window.pageYOffset)
    // let metrics =
    if(  ( window.pageYOffset >= (header.scrollHeight /2) ) ) {
        navbar.classList.add('navbar-scroll');
    }
    else if( ( window.pageYOffset <= (header.scrollHeight /2) ) ){
        navbar.classList.remove('navbar-scroll');
    }
}



document.body.addEventListener('click', scrollingBar)