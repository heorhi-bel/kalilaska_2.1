let header = document.body.querySelector('header')


function movingHeader(event){

    if(event.taget == header) return;
    if(document.body.clientWidth + 16 <= 768) return;

    header.style.backgroundPositionX = -30 -((event.clientX - (header.clientWidth /2) ) /150) + 'px';
    header.style.backgroundPositionY = -100 -((event.clientY - (header.clientHeight /2) ) /150) + 'px';
}




document.body.onmousemove = movingHeader;